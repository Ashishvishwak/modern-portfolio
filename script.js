function loder() {
  var tl = gsap.timeline();
  tl.to(".slide", {
      y: -700,
      stagger: 0.25,
      duration: 0.5,
      delay: 0.5,
  });

  tl.to("#loader", {
      opacity: 0,
      duration: 0.2,
      delay: 0.6,
  });
  tl.to("#loader", {
      display: "none",
  });

}

function page1() {

  gsap.to("#circle",{
    rotation:360,
    duration: 10,
    repeat: -1,
    yoyo:true,
    
   
  })
  var tl = gsap.timeline();

  tl.to("#h1", {
    x: 100,
    opacity: 0.5,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#page1 ",
      scroller: "body",
      // markers: true,
      start: "10% 0%",
      end: "top -50%",
      scrub: 1,
    },
  });
  tl.to("#H1", {
    x: -100,
    opacity: 0.5,
    scrollTrigger: {
      trigger: "#page1 ",
      scroller: "body",
      // markers: true,
      start: "10% 0%",
      end: "top -50%",
      scrub: 1,
    },
  });
}

function page2() {
  var tl = gsap.timeline();
  tl.to(".box2", {
    y: -655,
    opacity: 1,

    scrollTrigger: {
      trigger: "#page2 ",
      scroller: "body",
      // markers:true,
      start: "top 0%",
      end: "top -50%",
      pin: true,
      scrub: 1,
    },
  });

  tl.to(".box3", {
    y: -1310,
    opacity: 1,
    scrollTrigger: {
      trigger: "#page2 ",
      scroller: "body",
      // markers:true,
      start: "3% 1%",
      end: "top -50%",
      pin: true,
      scrub: 1,
    },
  });
}
loder()
page1();
page2();
