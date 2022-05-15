const hour = document.getElementById("clock-hour"),
  minutes = document.getElementById("clock-minutes"),
  seconds = document.getElementById("clock-seconds");

const clock = () => {
  let date = new Date();
  let hh = date.getHours() * 30,
    mm = date.getMinutes() * 6,
    ss = date.getSeconds() * 6;

  //add a rotation to the elements
  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minutes.style.transform = `rotateZ(${mm}deg)`;
  seconds.style.transform = `rotateZ(${ss}deg)`;
};

setInterval(clock, 1000); // 1000 -> 1s

const textHour = document.getElementById("text-hour"),
  textMinutes = document.getElementById("text-minutes"),
  textAmPm = document.getElementById("text-ampm"),
  dateDay = document.getElementById("date-day"),
  dateMonth = document.getElementById("date-month"),
  dateYear = document.getElementById("date-year");

const clockText = () => {
  let date = new Date();
  let hh = date.getHours(),
    ampm,
    mm = date.getMinutes(),
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear();

  //Changing the hours time
  if (hh > 12) {
    hh = hh - 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  //When it's 0AM transform to 12AM
  if (hh == 0) {
    hh == 12;
  }

  //Show 0 before hours
  if (hh < 10) {
    hh = `0${hh}`;
  }

  textHour.innerHTML = `${hh}:`;

  //Show 0 before minutes
  if (mm < 10) {
    mm = `0${mm}`;
  }

  textMinutes.innerHTML = `${mm}`;

  //Show PM or AM
  textAmPm.innerHTML = ampm;

  //Show months of the year
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  //Show the day, month and year
  dateDay.innerHTML = day;
  dateMonth.innerHTML = `${months[month]},`;
  dateYear.innerHTML = year;

};

setInterval(clockText, 1000);
