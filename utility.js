function setBackground(event)
{
    const button=document.getElementById(event)
    button.style.backgroundColor='green'
   
}
function removeBackground(event)
{
    const button=document.getElementById(event);
    button.classList.remove(event);
}