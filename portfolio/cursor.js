let circle = document.getElementById('custom-cursor');

const onMouseMove = (e) => {
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';;
}
document.body.addEventListener("scroll", e => {
  root.style.setProperty('--mouse-x', e.clientX + "px");
  root.style.setProperty('--mouse-y', window.scrollY + e.clientY + "px");
});
document.addEventListener('mousemove', onMouseMove);