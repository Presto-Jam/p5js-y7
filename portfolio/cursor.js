let circle = document.getElementById('custom-cursor');

const onMouseMove = (e) => {
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + window.scrollY + 'px';;
}
document.addEventListener('mousemove', onMouseMove);

// interactiveness
let projects = document.getElementsByClassName('project-container')

projects.addEventListener('mouseenter', () => {
  gsap.to(cursor, 1, {
      scale: 1,
      opacity: 1,
      top: '-75px',
      left: '-75px',
      ease: Elastic.easeOut.config(1, 0.3)
  })
})