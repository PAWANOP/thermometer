const changing=()=>{
  let temp=document.getElementById("temp");
  temp.innerHTML="&#xf2cb";

  setTimeout(() => {
    temp.innerHTML="&#xf2ca";
    temp.style.color="red";
           setTimeout(() => {
               temp.innerHTML="&#xf2c9";
               temp.style.color="blue";
                 setTimeout(() => {
                    temp.innerHTML="&#xf2c7";
                    temp.style.color="green";
                 },1000);
        }, 1000);  
  }, 1000);
}
 
setInterval(changing,5000);

changing();