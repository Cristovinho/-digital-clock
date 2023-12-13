const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");
const ampm = document.querySelector(".am-pm");
const day = document.querySelector(".day");
const month = document.querySelector(".month");

// Tableau des mois en trois lettres sans accents
const moisEnTroisLettres = [
  "Jan",
  "Fev",
  "Mar",
  "Avr",
  "Mai",
  "Jun",
  "Jul",
  "Aou",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function time() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let isAmOrPm = "AM";

  if (h > 12) {
    h = "0" + h - 12;
    isAmOrPm = "PM";
  }

  if (m < 10) {
    m = "0" + m;
  }

  if (s < 10) {
    s = "0" + s;
  }

  hour.innerText = h;
  minute.innerText = m;
  second.innerText = s;
  ampm.innerText = isAmOrPm;
  day.innerText = date.toLocaleString("fr-FR", { weekday: "long" }); // Nom du jour
  month.innerText = `${date.getDate()} / ${
    moisEnTroisLettres[date.getMonth()]
  }`; // Numéro du jour et nom du mois
}

setInterval(() => {
  time();
}, 1000);
