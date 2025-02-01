const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


var tl = gsap.timeline({scrollTrigger:{
    trigger: ".part-1",
    start:"50% 50%",
    end:"250% 50%",
    scrub:true,
    // markers:true,
    pin:true,
}})

tl.to(".rotate-div",{
    rotate: -15,
    scale: 0.8,
},'a')
tl.to("#row-div-2",{
    marginTop: "5%"
},'a')
tl.to("#row-div-3",{
    marginTop: "-2%"
},'a')
tl.to("#row-div-4",{
    marginTop: "-8%"
},'a')
tl.to("#row-div-5",{
    marginTop: "-10%"
},'a')
tl.to(".overlay-div h1",{
    opacity: "1",
    delay: 0.2,
},'a')
tl.to(".overlay-div",{
    backgroundColor: "#000000b4",
},'a')
tl.to(".scrolling",{
    width: "100%",
},'a')

var t2 = gsap.timeline({scrollTrigger:{
    trigger: ".part-2",
    start:"0% 70%",
    end:"50% 50%",
    scrub:true,
    // markers:true,
}})

t2.to(".rounded-div-wrapper",{
    height:0,
    marginTop: 0
})


let t3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".content-2",
        start:"20% 50%",
        end: "100% 50%",
        // markers: true,
        scrub: 1,
    },  
});
t3.to(".content-2 .text-area-hover h1",{
    width:"100%",
})
t3.to(".content-2 .text-area-hover h2",{
    delay: -0.4,
    width:"100%",
})


let t4 = gsap.timeline({
    scrollTrigger:{
        trigger: ".part-4",
        start:"52% 48%",
        end: "200% 48%",
        // markers: true,
        scrub: 1,
        pin: true,
    },  
});
t4.to(".c-one",{
    marginTop: "-25%",
    opacity:"1",
}, 'sct-1')
t4.to(".cir-part-4",{
    rotate: 360
}, 'sct-1')
t4.to(".c-two",{
    opacity:"1",
}, 'sct-2')
t4.to(".c-one",{
    marginTop: "-100",
    opacity:"0",
}, 'sct-2')
t4.to(".cir-part-4",{
    rotate: 720
}, 'sct-2')
t4.to(".c-three",{
    opacity:"1",
}, 'sct-3')
t4.to(".c-two",{
    opacity:"0",
}, 'sct-3')
t4.to(".c-one",{
    marginTop:"-180%",
}, 'sct-3')
t4.to(".cir-part-4",{

    rotate: 1080
}, 'sct-3')
t4.to(".c-one",{
    marginTop:"-230%",
}, 'sct-4')
t4.to(".c-three",{
    opacity:"0",
}, 'sct-4')
t4.to(".cir-part-4",{
    marginLeft:"100%",
    rotate: 1300
}, 'sct-4')


let t5 = gsap.timeline({
    scrollTrigger:{
        trigger: ".part-5",
        start:"20% 50%",
        end: "100% 50%",
        // markers: true,
        scrub: 1,
    },  
});
t5.to(".part-5 .text-area-hover h1",{
    width:"100%",
})
t5.to(".part-5 .text-area-hover h2",{
    delay: -0.4,
    width:"100%",
})


let t6 = gsap.timeline({
    scrollTrigger:{
        trigger: ".part-6",
        start:"25% 50%",
        end: "100% 50%",
        // markers: true,
        scrub: 1,
    },  
});
t6.to(".part-6 .text-area-hover h1",{
    width:"100%",
})
t6.to(".part-6 .text-area-hover h2",{
    delay: -0.4,
    width:"100%",
})


let t7 = gsap.timeline({
    scrollTrigger:{
        trigger: ".part-6",
        start:"10% 80%",
        end: "80% 80%",
        // markers: true,
        scrub: 1,
    },  
});
t7.to(".rounded-div-wrapper-6",{
    height:"0%",
    marginTop: 0,
})

let t8 = gsap.timeline({
    scrollTrigger:{
        trigger: ".part-8",
        start:"50% 50%",
        end: "300% 50%",
        pin:true,
        // markers: true,
        scrub: 1,
    },  
});
t8.to(".demo",{
    bottom:"7%",
})
t8.to(".our-work-txt-div",{
    height:"60vh",
}, 'height')
t8.to(".our-work-txt",{
    height:"60vh",
}, 'height')
t8.to("#our",{
    left:"0%",
}, 'height')
t8.to("#work",{
    right:"0%",
}, 'height')
t8.to(".scroll-img",{
    marginTop:"-300%",
})
