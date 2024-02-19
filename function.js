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
     const p=document.createElement('p')
     p.innerText=titleCount+". "+seatsText; 
     seatCon.appendChild(p);
     titleCount++;
      totalPrice+=ticketValue;
    document.getElementById('price').innerText=totalPrice

    document.getElementById('seatCount').innerText=titleCount-1;
    document.getElementById('discreaseSeat').innerText=40-(titleCount-1)

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