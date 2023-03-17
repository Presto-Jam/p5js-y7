let circle = document.getElementById('custom-cursor');
const onMouseMove = (e) =>{
  circle.style.left = e.mouseX + 'px';
  circle.style.top = e.mouseY + 'px';
}
document.addEventListener('mousemove', onMouseMove);