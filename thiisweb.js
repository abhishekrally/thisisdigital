// gsap.registerPlugin(ScrollTrigger);
gsap.from("#img1",{
    Delay:1 ,
    opacity:-1,
    duration:1,
    y:70
})
gsap.from("#img2",{
    Delay:1,
    opacity:-1,
    duration:1,
    x:70
})
gsap.from("#img3",{
    Delay:1,
    opacity:-1,
    duration:1,
    x:-70
})
gsap.from("#imgh1",{
    Delay:1,
    opacity:-1,
    duration:1,
})
gsap.from("#btn2",{
    Delay:1 ,
    opacity:-1,
    duration:1,
    y:70
})
var tl = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    // markers:true,
    start:"85% 55%",
    end:"90% 56%",
  //   scrub:2,
  //   pin:true
   }});

 tl.from("#pg2h5",{
    Delay:0.8,
    opacity:0,
    duration:1,
})
var tl2 = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    // markers:true,
    start:"95% 55%",
    end:"97% 60%",
  //   scrub:2,
  //   pin:true
   }});
tl2.from("#pg2h1",{
    Delay:0.8,
    opacity:0,
    duration:1,
})
var tl3 = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    // markers:true,
    start:"160% 55%",
    end:"179% 60%",
  //   scrub:2,
  //   pin:true
   }});
   tl3.from("#pg3img1",{
    Delay:1,
    opacity:0,
    duration:0.8,
    y:80
},"a")
tl3.from("#pg3img2",{
    Delay:1,
    opacity:0,
    duration:1,
    y:80
},"a")
tl3.from("#pg3img3",{
    Delay:1.8,
    opacity:0,
    duration:1.3,
    y:80
},"a")
tl3.from("#pg3img4",{
    Delay:1.8,
    opacity:0,
    duration:1.5,
    y:80
},"a")
var tl4 = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    // markers:true,
    start:"180% 55%",
    end:"220% 60%",
  //   scrub:2,
  //   pin:true
   }});
tl4.from("#pg3h1",{
    Delay:0.5,
    opacity:0,
    duration:1,
},"a")
tl4.from("#pg3h5",{
    Delay:0.8,
    opacity:0,
    duration:1,
},"b")
tl4.from("#btn4",{
    Delay:0.8,
    opacity:0,
    duration:1,
},"b")
tl4.from("#pg3h4",{
    Delay:0.8,
    opacity:0,
    duration:1,
},"b")
var tl5 = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    // markers:true,
    start:"280% 55%",
    end:"290% 60%",
  //   scrub:2,
  //   pin:true
   }});
tl5.from("#pg4h1",{
    opacity:0,
})
var tl6 = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    // markers:true,
    start:"315% 55%",
    end:"290% 60%",
  //   scrub:2,
  //   pin:true
   }});
tl6.from("#divset1",{
    duration:0.7,
    opacity:0,
})
var tl7 = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    // markers:true,
    start:"420% 55%",
    end:"440% 60%",
  //   scrub:2,
  //   pin:true
   }});
tl7.from("#pg5div1",{
    duration:1,
    opacity:0,
    x:-60
},"a")
tl7.from("#pg5div2",{
    opacity:0,
    duration:1,
    x:60
},"a")
tl7.from("#pg5h4",{
    opacity:0,
    duration:1,
    y:60
},"b")
tl7.from("#btn7",{
    opacity:0,
    duration:1,
    y:60
},"b")

var tl8 = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    // markers:true,
    start:"540% 55%",
    end:"560% 60%",
  //   scrub:2,
  //   pin:true
   }});
tl8.from(".carousel-cell",{
    opacity:0,
    duration:1.2
},"a")

var tl9 = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    markers:true,
    start:"630% 55%",
    end:"660% 60%",
  //   scrub:2,
  //   pin:true
   }});
tl9.from("section",{
    opacity:0,
    duration:1.2
},"a")

tl9.from("#section2",{
    opacity:0,
    duration:1.2
},"a")
