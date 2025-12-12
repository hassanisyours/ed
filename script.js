const bar = document.getElementById("bar")
const nav = document.getElementById("NavBar")
const close = document.getElementById("close")
if (bar) {
    bar.addEventListener("click",()=>{
        nav.classList.add("active")
    })
}
if (close) {
    close.addEventListener("click",()=>{
        setTimeout(() => {
            nav.classList.remove("active")
        }, 500);
    })
}


const texts = [
    "Super Value Deals",
    "Up to 70% Off",
    "Summer Collection 2025",
    "Shop Now & Save Big"
];

let count = 0;
let index = 0;

function type() {
    let currentText = texts[count];
    let letter = currentText.slice(0, ++index);
    document.getElementById("typed-text").textContent = letter;

    if (letter.length === currentText.length) {
        count = (count + 1) % texts.length;
        index = 0;
        setTimeout(type, 1500); // pause before next text
    } else {
        setTimeout(type, 130);
    }
}

type();


