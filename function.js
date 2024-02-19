// console.log('connected')
let titleCount=1;
let totalPrice=0;

const seats=document.querySelectorAll(".seat")
for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
   
    seat.addEventListener("click",function(){
     if(titleCount<="4")
     {
    
       const seatId = seat.id
     const seatsText=seat.innerHTML;
    
    //  console.log(seatsText)
     const ticket=document.getElementById('ticketPrice')
     const ticketText=ticket.innerText
     const ticketValue=parseInt(ticketText)
    //  console.log(ticketValue)
     setBackground(seatId)

   

     const seatCon=document.getElementById('seatContainer')
     const div=document.createElement('div')
     div.innerText=titleCount+". "+seatsText +"----------"+"Economy"+"---------"+ticketText;   
     seatCon.appendChild(div);
     
    //  const seatP=document.getElementById('seatContainer')
    //  const div1=document.createElement('div')
    //  div1.innerText=ticketText; 
    //  seatP.appendChild(div1);
     titleCount++;


    totalPrice+=ticketValue;
    document.getElementById('price').innerText=totalPrice

    document.getElementById('seatCount').innerText=titleCount-1;
    document.getElementById('decreaseSeat').innerText=40-(titleCount-1)

     }

     

     

    


    })
}

const btn=document.getElementById('applyBtn');
btn.addEventListener("click", function(){
    const couponElement= document.getElementById('inputDiscount').value;
    const couponCode=couponElement.split(" ").join("");
   
   if(totalPrice>=2000)
   {
     if(couponCode==="NEW15"){
        const discountE=document.getElementById('discount')
        const discountAmount=totalPrice*0.15;
        discountE.innerText=discountAmount;
        const restTotal=document.getElementById('discountedPrice')
        restTotal.innerText= totalPrice - discountAmount
        document.getElementById('inputDiscount').value="";
        const element=document.getElementById('inputHide');
         element.classList.add('hidden');
       
     }
    else if(couponCode==="Couple20")
     {
        const discountE=document.getElementById('discount')
        const discountAmount=totalPrice*0.2;
        discountE.innerText=discountAmount;
        const restTotal=document.getElementById('discountedPrice')
        restTotal.innerText= totalPrice - discountAmount
        document.getElementById('inputDiscount').value="";
        const element=document.getElementById('inputHide');
         element.classList.add('hidden');
     }
    
   }
   else{
    alert("Please At Least buy 4 ticket ")
   }
  

})



const nextBtn=document.getElementById('next');
nextBtn.addEventListener("click", function(){
    const phone=document.getElementById('phoneNumber')
  const  phoneNum=phone.value;
   const phoneNumber=parseInt(phoneNum);
    
     if((typeof phoneNumber=='number' && (titleCount-1)>=1)   )
     { 
        const nextB=document.getElementById('next');
        nextB.classList.remove('hidden');
         const element2=document.getElementById('homePage');
          element2.classList.add('hidden');

        const element1=document.getElementById('Confirm');
         element1.classList.remove('hidden');
     }
     else{
        alert("FillUp at least one seat ")
     }
   

})