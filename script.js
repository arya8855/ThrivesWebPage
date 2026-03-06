const counters = document.querySelectorAll(".counter");

let started = false;

function startCounter() {

  if(started) return;

  const section = document.querySelector(".glance-section");
  const sectionTop = section.getBoundingClientRect().top;

  if(sectionTop < window.innerHeight - 100){

    counters.forEach(counter => {

      const target = +counter.getAttribute("data-target");
      let count = 0;
      const speed = target / 100;

      const update = () => {

        count += speed;

        if(count < target){
          counter.innerText = Math.floor(count).toLocaleString();
          requestAnimationFrame(update);
        } else {
          counter.innerText = target.toLocaleString();
        }

      };

      update();

    });

    started = true;
  }
}

window.addEventListener("scroll", startCounter);

const track = document.querySelector(".carousel-track");
const logos = document.querySelectorAll(".logo");
const next = document.querySelector(".right");
const prev = document.querySelector(".left");

let index = 0;
const visible = 3;
const total = logos.length;

function updateCarousel(){
const logoWidth = logos[0].offsetWidth + 80;
track.style.transform = `translateX(-${index * logoWidth}px)`;
}

next.addEventListener("click", () => {

if(index < total - visible){
index++;
updateCarousel();
}

});

prev.addEventListener("click", () => {

if(index > 0){
index--;
updateCarousel();
}

});