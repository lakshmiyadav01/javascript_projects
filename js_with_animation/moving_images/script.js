const tl = gsap.timeline()

tl.from("#box1 img",{
    y:30,
    x:100,
    duration:2.7,
    delay:1,
    scale:2.5,
    opacity:0,
    // rotate:45,
    stagger:-1,
    filter: "drop-shadow(20px 20px 20px yellow )",

})

tl.from("#box2 img",{
    y:30,
    x:100,
    duration:2.2,
    scale:2,
    opacity:0,
    // rotate:45,
    stagger:-1,
    filter: "drop-shadow(20px 20px 20px green )",
})
tl.from("#box3 img",{
    y:30,
    x:100,
    duration:2,
    scale:1.8,
    opacity:0,
    // rotate:45,
    stagger:-1,
    filter: "drop-shadow(20px 20px 20px orange )",
})
