

const countdown = () => {
    date = new Date("Apr 20 , 2023 23:59:59").getTime();
    now = new Date().getTime();
    const gap = date - now;

    // Times
    const second = 1000;
    const minutes = second * 60;
    const hour = minutes * 60;
    const day = hour * 24;

    // Calc Times 
    const targetday = Math.floor( gap / day );
    const targethour = Math.floor( gap % day  / hour) ;
    const targetmin  = Math.floor( gap % hour  / minutes );
    const targetsec  = Math.floor( gap % minutes  / second );

    document.querySelector('.day').innerText = targetday;
    document.querySelector('.hour').innerText = targethour;
    document.querySelector('.min').innerText = targetmin;
    document.querySelector('.seconds').innerText = targetsec;
}

setInterval(countdown , 1000)