let circle = document.getElementById('custom-cursor');

const onMouseMove = (e) => {
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + window.scrollY + 'px';;
}
document.addEventListener('mousemove', onMouseMove);

// interactiveness
let projects = document.getElementsByClassName('project-container')

projects.addEventListener('mouseenter', () => {
  circle.style.scale = 1.3;
})