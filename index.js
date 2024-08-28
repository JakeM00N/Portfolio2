gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const cards = [
    { id: "#card-1", endTranslateX: -2000, rotate:  30 },
    { id: "#card-2", endTranslateX: -1000, rotate: -30 },
    { id: "#card-3", endTranslateX: -2000, rotate: 45 },
    { id: "#card-4", endTranslateX: -1500, rotate: -30 },
  ];

  ScrollTrigger.create({
    trigger: ".wraper",
    start: "top top",
    end: "+=900vh",
    scrub: 3,
    pin: true,
    onUpdate: (self) => {
      gsap.to(".wraper", {
        x: `${-350 * self.progress}vw`,
        duration: 0.5,
        ease: "power3.out",
      });
    },
  });

  cards.forEach((card) => {
    ScrollTrigger.create({
      trigger: card.id,
      start: "top top", // Adjust start point if needed
      end: "+=1200vh", // Adjust end point based on content
      scrub: 3,
      markers: false, // Enable markers for debugging
      onUpdate: (self) => {
        console.log(`Animating ${card.id} with progress ${self.progress}`);
        gsap.to(card.id, {
          x: `${card.endTranslateX * self.progress}px`,
          rotate: `${card.rotate * self.progress * 2}deg`,
          duration: 0.5,
          ease: "power3.out",
        });
      },
    });
  });
});
