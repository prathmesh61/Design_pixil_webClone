var t1 = gsap.timeline();

// t1.to(".logo", {
//   duration: 2,
//   opacity: 1,
//   ease: "power2.inOut",
// });
t1.to(".hero h1", {
  duration: 1,
  opacity: 1,
  ease: "power2.inOut",
});
t1.to(".hero p", {
  duration: 1,
  opacity: 1,
  ease: "power2.inOut",
});
t1.to(".btn-b", {
  duration: 1,
  opacity: 1,

  ease: "power2.inOut",
});
t1.to(".img1", {
  duration: 2,
  x: -90,
  ease: "power2.inOut",
});
t1.to(".img3", {
  duration: 2,
  x: 90,
  delay: 0.2,
  ease: "power2.inOut",
});
t1.to(".img2", {
  duration: 4,
  skewX: 0,
  rotate: 360,
  delay: 0.2,
  scale: 1.3,
  ease: "bounce",
});
