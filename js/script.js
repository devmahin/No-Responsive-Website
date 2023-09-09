let nameString = ["Web Developer", "Youtuber", "Blogger"];

setInterval(myfun, 100);
let index = 0;
let letter = 0;

let count = 0;
let current = 0;

function myfun() {
  current = nameString[count];
  letter = current.slice(0, index++);
  const typing = (document.querySelector(".typing").innerHTML = letter);
  if (letter.length === current.length) {
    count++;
    index = 0;
  }

  if (count === nameString.length) {
    count = 0;
  }
}

let nameString2 = ["Web Developer", "Youtuber", "Blogger"];

setInterval(myfun2, 1000);
let index2 = 0;
let letter2 = 0;

let count2 = 0;
let current2 = 0;

function myfun2() {
  current2 = nameString2[count2];
  letter2 = current2.slice(0, index2++);
  const typing2 = (document.querySelector(".typing2").innerHTML = letter2);
  if (letter2.length === current2.length) {
    count2++;
    index2 = 0;
  }

  if (count2 === nameString2.length) {
    count2 = 0;
  }
}

const fqas = document.querySelectorAll(".fqa");
fqas.forEach((fqa) => {
  fqa.addEventListener("click", () => {
    fqa.classList.toggle("open");

    const icon = fqa.querySelector(".fqa-icon i");
    console.log(icon)
    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});
