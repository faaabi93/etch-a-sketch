const gridContainer = document.querySelector(".grid-container");
const clearbtn = document.querySelector("#clearBtn");
const sizebtn = document.querySelector("#sizeBtn");
const rainbowbtn = document.querySelector("#rainbowBtn");
const blackbtn = document.querySelector("#blackBtn");
console.log(blackbtn);

var size = 16;

window.addEventListener("load", createDefaultGrid(16));

clearbtn.addEventListener("click", clearAll);

rainbowbtn.addEventListener("click", ()  => {
    rainbowbtn.style.backgroundColor = "lightgrey";
    blackbtn.style.backgroundColor = "white";
    clearAll();
    const gridItems = gridContainer.querySelectorAll("div");
    gridItems.forEach(gridItem => gridItem.removeEventListener("mouseover", blackColor));
    gridItems.forEach(gridItem => gridItem.addEventListener("mouseover", rainbowColor));
});

blackbtn.addEventListener("click", () => {
    rainbowbtn.style.backgroundColor = "white";
    blackbtn.style.backgroundColor = "lightgrey";
    clearAll()
    const gridItems = gridContainer.querySelectorAll("div");
    gridItems.forEach(gridItem => gridItem.removeEventListener("mouseover", rainbowColor));
    gridItems.forEach(gridItem => gridItem.addEventListener("mouseover", blackColor));
});

sizebtn.addEventListener("click", () => {
    let newSize = prompt("Enter new size between 5 and 64");
    if (newSize !== null)
        newSize = parseInt(newSize)
        if (Number.isNaN(newSize) || (newSize < 65 && newSize > 4)) {
            removeGridElements();
            setSize(newSize);
            createDivs(newSize);
        } else {
            alert("Enter a number from between 5 and 64!");
        }
});

function createDefaultGrid() {
    blackbtn.style.backgroundColor = "lightgrey";
    setSize(16);
    createDivs(16);
};

function setSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
};

function createDivs(size) { 
    const gridSize = size*size
    for(i = 0; i < gridSize; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList.add("grid-item");
        gridContainer.appendChild(gridElement);
    }
    const gridItems = gridContainer.querySelectorAll("div");
    gridItems.forEach(gridItem => gridItem.addEventListener("mouseover", blackColor));
};

function rainbowColor(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    if (e.target.style.backgroundColor === "white") {
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    };
};

function blackColor(e) {
    e.target.style.backgroundColor = "#000000";
};

function blackColor(e) {
    e.target.style.backgroundColor = "#000000";
};

function removeGridElements() {
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((item) => {
        gridContainer.removeChild(item);
    });
};

function clearAll() {
    const gridItems = gridContainer.querySelectorAll("div");
    gridItems.forEach((gridItem) => gridItem.style.backgroundColor = "white");
};



