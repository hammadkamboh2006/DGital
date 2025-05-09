document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".progress").forEach(bar => {
        let percentage = bar.getAttribute("data-percentage");
        bar.style.width = percentage + "%";
        
        let counter = 0;
        let target = parseInt(percentage);
        let interval = setInterval(() => {
            if (counter >= target) {
                clearInterval(interval);
            } else {
                counter++;
                bar.parentElement.previousElementSibling.querySelector(".percentage").textContent = counter + "%";
            }
        }, 15);
    });
});



    document.addEventListener("DOMContentLoaded", function () {
        const counters = document.querySelectorAll(".counter");

        counters.forEach(counter => {
            let target = +counter.getAttribute("data-target");
            let count = 0;
            let increment = target / 100;

            function updateCounter() {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCounter, 20);
                } else {
                    counter.innerText = target;
                }
            }

            updateCounter();
        });
    });



    var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    
        breakpoints:{
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
            },
        },
      });




      let navbar = document.getElementById("navbar");
 let topBtn = document.querySelector(".top-btn");
 
 window.addEventListener("scroll", function () {
     if (window.scrollY > 100) {
         navbar.classList.add("show");
         topBtn.classList.add("top-show");
     } else {
         navbar.classList.remove("show");
         topBtn.classList.remove("top-show");
     }
 });