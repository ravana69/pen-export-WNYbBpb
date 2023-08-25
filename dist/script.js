const tls = []
const shapes = document.querySelectorAll('.shape')

shapes.forEach((shape, i)=>{
  tls.push(
    gsap.timeline({repeat:-1, defaults:{svgOrigin:'256 256'}})
      .add(()=> document.querySelector('svg').appendChild(shape) )
      .fromTo(shape, {scale:0, opacity:1}, {duration:1, scale:0.2, ease:'power3.inOut'}, 0)
      .fromTo(shape, {rotate:()=>[-20,20][i]}, {rotate:0, ease:'back.out(3)'}, 0.4)
      .to(shape, {scale:5, ease:'back.in(0.67)'}, 1)
      .add(()=> gsap.set('.bg', {attr:{fill:shape.getAttribute('fill')}}), 2)
      .play(i) //stagger start
  )
})

gsap.set('.shape path', {y:(i)=>[50,-50][i]}) //shift internal shapes to better center

window.onclick = ()=>{ // play/pause on click
  tls.forEach((tl)=> (tl.isActive()) ? tl.pause() : tl.play() )
}