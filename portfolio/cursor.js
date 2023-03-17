let circle = document.getElementById('custom-cursor');
const onMouseMove = (e) => {
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
}
const onscroll = (e) => {
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);
window.addEventListener('scroll', onscroll);