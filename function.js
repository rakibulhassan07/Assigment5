// console.log('connected')
const seats=document.querySelectorAll(".seat")
for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
  
    seat.addEventListener("click",function(){
     const seatId = seat.id
     const seatsText=seat.innerHTML;
     console.log(seatsText)
     const ticket=document.getElementById('ticketPrice')
     const ticketText=ticket.innerText
     const ticketValue=parseInt(ticketText)
     console.log(ticketValue)
     setBackground(seatId)

     const seatCon=document.getElementById('seatContainer')
     const p=document.createElement('p')
     p.innerText=seatsText; 
     seatCon.appendChild(p);
     


    })
}