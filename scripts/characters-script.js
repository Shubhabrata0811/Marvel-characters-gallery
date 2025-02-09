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
  document.getElementById("prevBtn").textContent =
    characters[
      currentCharacterIdx === 0
        ? characters.length - 1
        : currentCharacterIdx - 1
    ].name;
  document.getElementById("nextBtn").textContent =
    characters[
      currentCharacterIdx === characters.length - 1
        ? 0
        : currentCharacterIdx + 1
    ].name;
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
