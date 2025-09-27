var img = document.querySelector("img");
document.addEventListener("keydown", function (event) {
    if (!img)
        return;
    var left = parseInt(img.style.left || "0");
    var top = parseInt(img.style.top || "0");
    if (event.key === "ArrowLeft") {
        img.style.left = "".concat(left - 10, "px");
    }
    if (event.key === "ArrowRight") {
        img.style.left = "".concat(left + 10, "px");
    }
    if (event.key === "ArrowUp") {
        img.style.top = "".concat(top - 10, "px");
    }
    if (event.key === "ArrowDown") {
        img.style.top = "".concat(top + 10, "px");
    }
});

//GSAP plug

gsap.registerPlugin(SplitText); 

let split = SplitText.create(".text", {
    type: "chars, words, lines", 
    wordsClass: "words"
}); 

gsap.from(split.words, {
    y: 400, 
    autoAlpha: 0, 
    stagger: 0.05, 
})

//Weather station 
const API_KEY ="a10c63adbe072abaec763bdb77ddbe55"; 
const city = "Reykjavik";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    console.log(data); // see the full weather data
    const temp = data.main.temp;       // temperature
    const desc = data.weather[0].description; // weather description

    document.getElementById("weather").textContent =
      `${city}: ${temp}°C, ${desc}  ⛅, `;
  })
  .catch(error => console.error("Error:", error));

 
  //Adding text thorugh DOM inner HTML
 document.querySelector(".carousel-title").innerHTML +="Carousel of memories"; 

//Carousel
 const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = `translateX(${ -size * counter }px)`;

// next
nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return; // avoid overflow click
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = `translateX(${ -size * counter }px)`;
});

// prev
prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = `translateX(${ -size * counter }px)`;
});

// loop logic
carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2; // jump to last real
    carouselSlide.style.transform = `translateX(${ -size * counter }px)`;
  }
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = 1; // jump to first real
    carouselSlide.style.transform = `translateX(${ -size * counter }px)`;
  }
}); 


///I will try to make an image that is created and prints a lot of times and then  when you press OK, it dissapears. 
window.addEventListener("load", () => {
  const popupArea = document.querySelector("#popup-area");

  for (let i = 0; i < 3; i++) { // how many popups
    const win = document.createElement("div");
    win.className = "popup";
    win.style.left = Math.random() * (window.innerWidth - 110) + "px";
    win.style.top = Math.random() * (window.innerHeight - 120) + "px";
     win.style.top = Math.random() * (window.innerHeight - 130) + "px";
      win.style.top = Math.random() * (window.innerHeight - 140) + "px";
       win.style.top = Math.random() * (window.innerHeight - 150) + "px";
        win.style.top = Math.random() * (window.innerHeight - 160) + "px";
    win.innerHTML = `
      <div class="popup-header">
        Warning
        <button class="popup-close">X</button>
      </div>
      <div class="popup-body">
        Random button to annoy you<br>
        <button class="button-close">OK</button>
        <button class="button-close">OK</button>
      </div>`;

    // add close event for the X button
    win.querySelector(".popup-close").addEventListener("click", () => {
      win.remove(popup);
    });
      win.querySelector(".button-close").addEventListener("click", () => {
      win.remove();
    });
       win.querySelector(".button-close").addEventListener("click", () => {
      win.remove();
    });
    popupArea.appendChild(win);
  }
});
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();