AOS.init();

document.addEventListener("DOMContentLoaded", () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    // smoothMobile: true,
    // tablet: { smooth: true },
    smartphone: { smooth: true },
  });
});

// lerp: 0.1,
// multiplier: 1.2,
// tablet: { smooth: true },
// smartphone: { smooth: false }
