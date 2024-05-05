let tip = 0;
let bill = 0;
let peopleNumber = 0;
// const of elements
const peopleInput = document.getElementById("people");
const billInput = document.getElementById("bill");
const tipCards = document.querySelectorAll("main section article button");
const custopTip = document.querySelector("main section article input");
const submitButton = document.getElementById("submit");
const tipForPersoneElement = document.getElementById("tipForPerson");
const totalElement = document.getElementById("total");
// events
tipCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    let value = +e.target.getAttribute("data-tip");
    tipCards.forEach(
      (ele) => ele !== e.target && ele.classList.remove("selected")
    );
    e.target.classList.toggle("selected");
    tip = e.target.classList.contains("selected") ? value : 0;
    setSubmitStatus();
  });
});
custopTip.addEventListener("change", (e) => {
  let value = +e.target.value;
  if (value < 0) {
    e.target.value = 0;
    value = 0;
  } else if (value > 100) {
    e.target.value = 100;
    value = 100;
  }
  tip = value;
  setSubmitStatus();
});
peopleInput.addEventListener("change", (e) => {
  let value = parseInt(controllNumber(+e.target.value));
  peopleNumber = value;
  e.target.value = value;
  setSubmitStatus();
});
billInput.addEventListener("change", (e) => {
  let value = controllNumber(+e.target.value);
  bill = value;
  e.target.value = value;
  setSubmitStatus();
});
submitButton.addEventListener("click", (e) => {
  if (e.target.classList.contains("off")) return;
  let billForPerson = bill / peopleNumber;
  let tipForPersone = +(billForPerson * (tip / 100)).toFixed(2);
  let total = billForPerson + tipForPersone;
  tipForPersoneElement.innerText = "$" + tipForPersone;
  totalElement.innerText = "$" + total;
});

function controllNumber(value) {
  return value < 0 ? 0 : value;
}
function setSubmitStatus() {
  if (bill !== 0 && tip !== 0 && peopleNumber !== 0) {
    submitButton.classList.remove("off");
  } else submitButton.classList.add("off");
}
