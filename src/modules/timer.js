export const timer = (deadline) => {
  const timerDays = document.querySelectorAll(".count_1 span");
  const timerHours = document.querySelectorAll(".count_2 span");
  const timerMinutes = document.querySelectorAll(".count_3 span");
  const timerSeconds = document.querySelectorAll(".count_4 span");

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

  const updateElements = (elements, value) => {
    elements.forEach((el) => {
      el.textContent = value;
    });
  };

  const timerOnZeroes = () => {
    updateElements(timerDays, "00");
    updateElements(timerHours, "00");
    updateElements(timerMinutes, "00");
    updateElements(timerSeconds, "00");
  };

  const addZeroBefore = (value) => {
    return value < 10 ? "0" + value : value;
  };

  const updateClock = () => {
    const getTime = getTimeRemaining();

    updateElements(timerDays, addZeroBefore(getTime.days));
    updateElements(timerHours, addZeroBefore(getTime.hours));
    updateElements(timerMinutes, addZeroBefore(getTime.minutes));
    updateElements(timerSeconds, addZeroBefore(getTime.seconds));

    if (getTime.timeRemaining < 0) {
      clearInterval(idInterval);
      timerOnZeroes();
    }
  };

  idInterval = setInterval(updateClock, 1000);
  updateClock();
};
