let circle = document.getElementById('custom-cursor');
circle.style.left = e.mouseX + 'px';
circle.style.top = e.mouseY + 'px';

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  gsap.to(cursor, 0.5, {x: mouseX, y:mouseY})
})
document.addEventListener('mousemove', onMouseMove);