let hrs = document.getElementById("hours");
let mins = document.getElementById("minutes");
let secs = document.getElementById("seconds");


setInterval(()=>{
    let current_time = new Date();
hrs.innerHTML = (current_time.getHours()<10?"0":" ")+ current_time.getHours();
mins.innerHTML = (current_time.getMinutes()<10?"0":" ")+ current_time.getMinutes();
secs.innerHTML = (current_time.getSeconds()<10?"0":" ")+ current_time.getSeconds();
},1000);
