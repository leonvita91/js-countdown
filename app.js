const days = document.querySelectorAll('days');
const hours = document.querySelectorAll('hours');
const minutes = document.querySelectorAll('minutes');
const seconds = document.querySelectorAll('seconds');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`january 1 $
 {currentYear + 1} 00:00:00`);
//function
function updateCountdowntime() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 68 / 68 / 24);


    console.log(d);
}
updateCountdowntime();