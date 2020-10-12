const timer = (id, deadline) => {
    

    function getRemainingTime(endtime) {
        let now = Date.now();
        let targetDate = Date.parse(endtime);
        let diff = targetDate - now;

        let daysLeft = Math.floor(diff / (24 * 60 * 60 * 1000)),
            hoursLeft = Math.floor(diff / (60 * 60 * 1000)) % 24,
            minutesLeft = Math.floor(diff / (60 * 1000)) % 60,
            secondsLeft = Math.floor(diff / 1000) % 60;
        
        return {
            'total': diff,
            'days': daysLeft,
            'hours': hoursLeft,
            'minutes': minutesLeft,
            'seconds': secondsLeft
        };
    }

    function setTimeToPage (selector) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timerId = setInterval(updateTimer, 1000);

        updateTimer();

        function updateTimer() {
            let t = getRemainingTime(deadline);
            if(t.total <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(timerId);
            }else {
                days.textContent = t.days < 10 ? '0' + t.days : t.days;
                hours.textContent = t.hours < 10 ? '0' + t.hours : t.hours;
                minutes.textContent = t.minutes < 10 ? '0' + t.minutes : t.minutes;
                seconds.textContent = t.seconds < 10 ? '0' + t.seconds : t.seconds;
            }
        }
    }

    setTimeToPage(id);
    
};

export default timer;