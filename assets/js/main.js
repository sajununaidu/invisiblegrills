const stars = document.getElementById("stars");
  for (let i = 0; i < 80; i++) {
    const star = document.createElement("div");
    star.style.position = "absolute";
    star.style.background = "white";
    star.style.borderRadius = "50%";
    star.style.width = "2px";
    star.style.height = "2px";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.opacity = 0.6;
    star.style.animation = `twinkle ${1 + Math.random() * 2}s infinite ease-in-out`;
    stars.appendChild(star);
  }

  // Firework burst
  setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.5 }
    });
  }, 2000);

  // Hide welcome screen
  setTimeout(() => {
    const screen = document.getElementById("welcomeScreen");
    screen.style.transition = "opacity 1s ease";
    screen.style.opacity = 0;
    setTimeout(() => {
      screen.style.display = "none";
    }, 1000);
  }, 4000);
  setTimeout(() => {
    const welcome = document.getElementById('welcomeScreen');
    if (welcome) welcome.remove();
  }, 5000);
  const header = document.getElementById("pageHeader");
  const slides = document.querySelectorAll(".slider img");
  const dots = document.querySelectorAll(".dot");
  const balconyImages = document.querySelectorAll("#balconySlider img");
  const balconyImages1 = document.querySelectorAll("#balconySlider-1 img");
  const balconyImages2 = document.querySelectorAll("#balconySlider-2 img");
  const balconyImages3 = document.querySelectorAll("#balconySlider-3 img");
  const balconyImages4 = document.querySelectorAll("#balconySlider-4 img");

  let balconyIndex = 0;
  let balconyIndex1 = 0;
  let balconyIndex2 = 0;
  let balconyIndex3 = 0;
  let balconyIndex4 = 0;

  let index = 0;
  let interval;

  function showNextBalconySlide() {
    balconyImages[balconyIndex].classList.remove("active-slide");
    balconyIndex = (balconyIndex + 1) % balconyImages.length;
    balconyImages[balconyIndex].classList.add("active-slide");
  }

  if (balconyImages.length > 1) {
    setInterval(showNextBalconySlide, 3000); // 3 seconds
  }

  function showNextBalconySlide1() {
    balconyImages1[balconyIndex1].classList.remove("active-slide");
    balconyIndex1 = (balconyIndex1 + 1) % balconyImages1.length;
    balconyImages1[balconyIndex1].classList.add("active-slide");
  }

  if (balconyImages1.length > 1) {
    setInterval(showNextBalconySlide1, 3000); // 3 seconds
  }

  function showNextBalconySlide2() {
    balconyImages2[balconyIndex2].classList.remove("active-slide");
    balconyIndex2 = (balconyIndex2 + 1) % balconyImages2.length;
    balconyImages2[balconyIndex2].classList.add("active-slide");
  }

  if (balconyImages2.length > 1) {
    setInterval(showNextBalconySlide2, 3000); // 3 seconds
  }

  function showNextBalconySlide3() {
    balconyImages3[balconyIndex3].classList.remove("active-slide");
    balconyIndex3 = (balconyIndex3 + 1) % balconyImages3.length;
    balconyImages3[balconyIndex3].classList.add("active-slide");
  }

  if (balconyImages3.length > 1) {
    setInterval(showNextBalconySlide3, 3000); // 3 seconds
  }

  function showNextBalconySlide4() {
    balconyImages4[balconyIndex4].classList.remove("active-slide");
    balconyIndex4 = (balconyIndex4 + 1) % balconyImages4.length;
    balconyImages4[balconyIndex4].classList.add("active-slide");
  }

  if (balconyImages4.length > 1) {
    setInterval(showNextBalconySlide4, 3000); // 3 seconds
  }

  function showSlide(i) {
    slides.forEach((img, idx) => {
      img.classList.remove("active");
      dots[idx].classList.remove("active");
    });
    slides[i].classList.add("active");
    dots[i].classList.add("active");
    index = i;
  }

  function showNextImage() {
    let next = (index + 1) % slides.length;
    showSlide(next);
  }

  function startSlider() {
    interval = setInterval(showNextImage, 3000);
  }

  function pauseSlider() {
    clearInterval(interval);
  }

  function resumeSlider() {
    startSlider();
  }

  function goToSlide(i) {
    showSlide(i);
  }

  function openLightbox(src) {
    if (document.getElementById("lightbox") && document.getElementById("lightbox-img")){
        document.getElementById("lightbox-img").src = src;
        document.getElementById("lightbox").classList.add("active");
    }
  }

  function closeLightbox() {
    document.getElementById("lightbox").classList.remove("active");
  }

  window.addEventListener("blur", startSlider);
  window.addEventListener("focus", pauseSlider);
  window.addEventListener("DOMContentLoaded", startSlider);

  window.addEventListener("scroll", function () {
    const headingLarge = document.querySelector(".mainHeadingLarge");
    const headingSmall = document.querySelector(".mainHeadingSmall");
    const mainHeadingQuote = document.querySelector(".mainHeadingQuote");

    if (window.scrollY > 50) {
        header.classList.add("shrink");                
        stickyNav.style.display = "block";
        setTimeout(() => {            
            mainHeadingQuote.style.display = "none";  
            headingLarge.style.display = "none";
            headingSmall.style.display = "block";
        }, 1000);  
    } else {
        header.classList.remove("shrink");
        stickyNav.style.display = "none";
        setTimeout(() => {            
            mainHeadingQuote.style.display = "block";
            headingLarge.style.display = "block";
            headingSmall.style.display = "none";
        }, 1000);
    }
  });