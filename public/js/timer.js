function getSecondsUntilNextIntervalDog() {
  const now = new Date();
  const intervalStart = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    0,
    1,
    0,
    0
  );
  const msPerInterval = 10 * 60 * 1000; // 10 minutes
  return (
    Math.floor(
      msPerInterval -
        ((now.getTime() - intervalStart.getTime()) % msPerInterval)
    ) / 1000
  );
}

function updateLabelDog() {
  const now = new Date();
  const start = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    0,
    0,
    59,
    0
  );
  const msPerInterval = 10 * 60 * 1000; // 10 minutes
  const initialValue = 1985;
  const intervalsPassed = Math.floor(
    (now.getTime() - start.getTime()) / msPerInterval
  );
  // labelElementmm.textContent = initialValue + intervalsPassed;
  return initialValue + intervalsPassed;
}

function updateTimerDog(dogTimerCounter) {
  const secondsLeft = getSecondsUntilNextIntervalDog();
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = parseInt(secondsLeft % 60);
  if (dogTimerCounter) {
    // console.log(
    //   `${minutes.toString().padStart(2, "0")}:${seconds
    //     .toString()
    //     .padStart(2, "0")}`
    // );
    dogTimerCounter.textContent = `${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    if (
      `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}` == "00:01"
    ) {
      createOneGameAccordionForDog();
    }
  } else {
    console.log("Timer element not found");
  }
}

function startTimerDog() {
  const timerCheckInterval = setInterval(() => {
    const dogTimerCounter = document.getElementById("dog-timer-label");
    if (dogTimerCounter) {
      clearInterval(timerCheckInterval); // Stop checking once the element is found

      function update() {
        updateTimerDog(dogTimerCounter);
        updateLabelDog();
        requestAnimationFrame(update);
      }
      update();
    }
  }, 100);
}

// Horse

function getSecondsUntilNextIntervalHorse() {
  const now = new Date();
  const intervalStart = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    0,
    6,
    0,
    0
  );
  const msPerInterval = 10 * 60 * 1000; // 10 minutes
  return (
    Math.floor(
      msPerInterval -
        ((now.getTime() - intervalStart.getTime()) % msPerInterval)
    ) / 1000
  );
}

function updateLabelHorse() {
  const now = new Date();
  const start = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    0,
    5,
    59,
    0
  );
  const msPerInterval = 10 * 60 * 1000; // 10 minutes
  const initialValue = 986;
  const intervalsPassed = Math.floor(
    (now.getTime() - start.getTime()) / msPerInterval
  );
  horseLabelmm.textContent = initialValue + intervalsPassed;
}

function updateTimerHorse(horseTimerCounter) {
  const secondsLeft = getSecondsUntilNextIntervalHorse();
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = parseInt(secondsLeft % 60);

  if (horseTimerCounter) {
    horseTimerCounter.textContent = `${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;
  } else {
    console.warn("Timer element not found");
  }
}

function startTimerHorse() {
  const timerCheckInterval = setInterval(() => {
    const horseTimerCounter = document.getElementById("horse-timer-label");
    if (horseTimerCounter) {
      clearInterval(timerCheckInterval); // Stop checking once the element is found

      function update() {
        updateTimerHorse(horseTimerCounter);
        requestAnimationFrame(update);
      }
      update();
    }
  }, 100);
}

// startTimerHorse();
