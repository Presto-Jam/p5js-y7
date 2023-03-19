let circle = document.getElementById('custom-cursor');

const onMouseMove = (e) => {
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
}
document.body.addEventListener("scroll", e => {
  circle.style.left = e.pageX + "px";
  circle.style.top = e.pageY + "px";
});
document.addEventListener('mousemove', onMouseMove);