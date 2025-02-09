const path = new URL("../chars.json", import.meta.url).href;
const response = await fetch(path);
const characters = await response.json();
console.log(characters);

let currentCharacterIdx = 0;

const setGallery = () => {
  document.getElementById("characterName").textContent =
    characters[currentCharacterIdx].name;
  document.getElementById("characterDescription").textContent =
    characters[currentCharacterIdx].description;
  document.getElementById("characterImg").src =
    characters[currentCharacterIdx].image;
  document.getElementById("characterImg").alt =
    characters[currentCharacterIdx].name + " Image";
};

setGallery();

document.getElementById("prevBtn").addEventListener("click", () => {
  currentCharacterIdx === 0
    ? (currentCharacterIdx = characters.length - 1)
    : currentCharacterIdx--;
  setGallery();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentCharacterIdx === characters.length - 1
    ? (currentCharacterIdx = 0)
    : currentCharacterIdx++;
  setGallery();
});
