// ======ball animation function ============

// TweenMax.to('.circle', 20, {
//   backgroundColor: '#ff0000',
//   x: 400,
//   ease: Elastic.easeOut,
// });

// =================================================

// =========logo animation ====================

// gsap.to('.logo', { duration: 2, x: 300 });

// gsap.to('.logo', {
//   duration: 3,
//   x: 400,
//   opacity: 100,

//   backgroundColor: '#124563',
//   borderRadius: '10%',
//   border: '5px solid white',
//   padding: '10px',
//   ease: 'bounce',
// });

// gsap.set('.logo, .autocad', { transformOrigin: '50% 50%' });
// gsap.to('.logo, .autocad', { duration: 20, rotation: 360 })

// gsap.from('.logo', {
//   duration: 2.5,
//   opacity: 0,
//   scale: 0.1,
//   ease: 'back',
// });

// gsap.from('.circle', {
//   duration: 2,
//   opacity: 0,
//   y: 'random(-400, 400)',
//   stagger: 0.25,
// });
let tl = gsap.timeline({ repeat: 2 });
tl.from('.logo', {
  duration: 2,
  opacity: 0,
  scale: 0.1,
  ease: 'back',
});
tl.to('.logo', {
  duration: 1.5,
  rotation: 360,
});
tl.from(
  '.circle',
  {
    duration: 1,
    opacity: 0,
    delay: 1.5,
    y: 150,
    stagger: 0.25,
  },
  '+=1'
);
