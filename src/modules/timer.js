export const timer = (deadline) => {
  const timerDays = document.querySelector(".count_1 span");
  const timerHours = document.querySelector(".count_2 span");
  const timerMinutes = document.querySelector(".count_3 span");
  const timerSeconds = document.querySelector(".count_4 span");

  let idInterval;

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = new Date().getTime();
    const timeRemaining = (dateStop - dateNow) / 1000;
    const days = Math.floor(timeRemaining / 60 / 60 / 24);
    const hours = Math.floor((timeRemaining / 60 / 60) % 24);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, days, hours, minutes, seconds };
  };

  const timerOnZeroes = () => {
    timerDays.textContent = "00";
    timerHours.textContent = "00";
    timerMinutes.textContent = "00";
    timerSeconds.textContent = "00";
  };

  const addZeroBefore = (value) => {
    return value < 10 ? "0" + value : value;
  };

  const updateClock = () => {
    const getTime = getTimeRemaining();

    timerDays.textContent = addZeroBefore(getTime.days);
    timerHours.textContent = addZeroBefore(getTime.hours);
    timerMinutes.textContent = addZeroBefore(getTime.minutes);
    timerSeconds.textContent = addZeroBefore(getTime.seconds);

    if (getTime.timeRemaining < 0) {
      clearInterval(idInterval);
      timerOnZeroes();
    }
  };

  idInterval = setInterval(updateClock, 1000);
  updateClock();
};
