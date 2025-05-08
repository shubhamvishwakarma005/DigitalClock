

function updateclock(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM" ;

    hours = hours % 12 || 12 ;

    hours = padZero(hours);
    minutes = padZero(minutes);
    seconds = padZero(seconds);

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`

    document.getElementById('time').innerText= timeString ;
}

function padZero(num){
    return num < 10 ? '0' + num : num ;
}

setInterval(updateclock ,1000);
updateclock();