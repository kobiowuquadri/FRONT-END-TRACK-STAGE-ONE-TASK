let currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]')
let currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]')

let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDate = new Date();

currentDayOfTheWeek.textContent = daysOfWeek[currentDate.getDay()]
currentUTCTime.textContent = currentDate.getTime()
