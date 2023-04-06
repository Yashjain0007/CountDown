const endDate = "06 April 2023 12:45 PM";
const inputs = document.querySelectorAll("input");
document.getElementById("end-date").innerText = endDate;

const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  console.log(end);
  console.log(now);

  const diff = (end - now) / 1000; // 1000 is divided because to convert in mili sec to sec
  console.log(diff);
  // convert into days
  if (diff < 0) return;
  inputs[0].value = Math.floor(diff / 60 / 60 / 24); // second / minutes/ hours to calculate days
  inputs[1].value = Math.floor((diff / 60 / 60) % 24); // calculates the hour so we modulus the 24 not divided.
  inputs[2].value = Math.floor(diff / 60) % 60; // to calculate the minutes ;
  inputs[3].value = Math.floor(diff) % 60; // to calculate the seconds
};

clock();

setInterval(() => {
  clock();
}, 1000);
