// ===== ENHANCED JAVASCRIPT WITH ANIMATIONS =====

// 0. SCROLL-TRIGGERED ANIMATIONS (Intersection Observer API)
document.addEventListener("DOMContentLoaded", function () {
  // Add animation classes to elements
  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("animate-section");
  });
  document.querySelectorAll(".popular .popular-slider .box").forEach((box) => {
    box.classList.add("animate-card");
  });
  document.querySelectorAll(".container .box-container .box").forEach((box) => {
    box.classList.add("animate-card");
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animated elements
  document.querySelectorAll(".animate-section, .animate-card").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
    observer.observe(el);
  });
});

// 1 SEARCH BOX 
document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("search-btn");
  const searchForm = document.querySelector(".search-form");
 
  if (searchBtn && searchForm) {
    // Show/hide search
    searchBtn.addEventListener("click", function () {
      searchForm.classList.toggle("active");
    });

    // Hide when clicking outside
    document.addEventListener("click", function (e) {
      if (!searchForm.contains(e.target) && e.target !== searchBtn) {
        searchForm.classList.remove("active");
      }
    });
  }
});

// 2. HEADER SCROLL EFFECT with enhanced styling
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header .header-2");
  if (header) {
    if (window.scrollY > 80) {
      header.classList.add("active");
      header.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.15)";
    } else {
      header.classList.remove("active");
      header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.08)";
    }
  }
});

// 3. LOADER - Hide after 2 seconds with smooth fade
window.addEventListener("load", function () {
  setTimeout(function () {
    const loader = document.querySelector(".loader-container");
    if (loader) {
      loader.classList.add("active");
    }
  }, 2000);
});

// 4 Load More Blogs - Perfect for your HTML
document.addEventListener("DOMContentLoaded", function () {
  const loadBtn = document.getElementById("load-more");

  if (loadBtn) {
    // Get ALL boxes inside the blogs section
    const boxes = document.querySelectorAll(".blogs .box-container .box");

    // Check if we have more than 3 blog posts
    if (boxes.length > 3) {
      let visible = 3; // Start with 3 visible

      // Hide blog posts 4, 5, 6, 7, 8, 9 (index 3 to 8)
      for (let i = visible; i < boxes.length; i++) {
        boxes[i].style.display = "none";
      }

      // When "load more" is clicked
      loadBtn.onclick = function () {
        // Show next 3 blog posts with animation
        for (let i = visible; i < visible + 3 && i < boxes.length; i++) {
          boxes[i].style.display = "block";
          boxes[i].style.opacity = "0";
          boxes[i].style.transform = "translateY(20px)";
          // Trigger animation
          setTimeout(() => {
            boxes[i].style.opacity = "1";
            boxes[i].style.transform = "translateY(0)";
          }, 50);
        }
        visible += 3; // Now showing 3 more

        // Hide button when all blogs are shown
        if (visible >= boxes.length) {
          loadBtn.style.opacity = "0";
          loadBtn.style.pointerEvents = "none";
          setTimeout(() => {
            loadBtn.style.display = "none";
          }, 300);
        }
      };
    } else {
      // If we have 3 or fewer blogs, hide the button
      loadBtn.style.display = "none";
    }
  }
});

// 5. SWIPER SLIDERS - Load when everything is ready
window.addEventListener("load", function () {
  // Wait a bit for everything to load
  setTimeout(function () {
    // Home slider
    if (document.querySelector(".books-slider")) {
      new Swiper(".books-slider", {
        loop: true,
        autoplay: { delay: 3000 },
        slidesPerView: 1,
        breakpoints: {
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
      });
      console.log("Home slider initialized");
    }

    // Popular slider
    if (document.querySelector(".popular-slider")) {
      new Swiper(".popular-slider", {
        loop: true,
        autoplay: { delay: 5000 },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        breakpoints: {
          450: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        },
      });
      console.log("Popular slider initialized");
    }

    // New sliders
    if (document.querySelector(".new-slider")) {
      new Swiper(".new-slider", {
        loop: true,
        autoplay: { delay: 3500 },
        slidesPerView: 1,
        breakpoints: {
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
      });
      console.log("New slider 1 initialized");
    }

    if (document.querySelector(".new-slider-2")) {
      new Swiper(".new-slider-2", {
        loop: true,
        autoplay: { delay: 6000 },
        slidesPerView: 1,
        breakpoints: {
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
      });
      console.log("New slider 2 initialized");
    }
  }, 500);
});
