var tl = gsap.timeline();

tl.from('#container #container1 , #container h2, #container h3, #container button', {
    y: -100,
    duration: 1,
    delay: 0.3,
    opacity: 0,
    stagger: 0.2,
})
tl.from('#heading h1', {
    y: -120,
    // duration: 1,
    // delay: 0.3,
    opacity: 0,
    stagger: 0.3,
})
tl.from('#heading2 img', {
    scale: 0,
    opacity: 0,
    stagger: 0.3,
})

tl.from('#foot h5', {
    scale: 0,
    opacity: 0,

})
tl.to('#foot h5', {
    y: 30,
    repeat: -1,
    duration: 0.7,
    yoyo: true,
})