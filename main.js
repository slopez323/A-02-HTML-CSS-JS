let count = 0;

const remove = document.getElementById("remove");
const add = document.getElementById("add");
const number = document.getElementById("count");
const starDiv = document.querySelector(".stars");

const updateStars = () => {
  starDiv.innerHTML = "";
  for (let i = 1; i <= count; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.textContent = "⭐️";
    starDiv.append(star);
  }
};

const updateNumber = () => {
  number.textContent = count;
  updateStars();
};
updateNumber();

remove.addEventListener("click", () => {
  if (count > 0) count -= 1;
  updateNumber();
});

add.addEventListener("click", () => {
  count += 1;
  updateNumber();
});
