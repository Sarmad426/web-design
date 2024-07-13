document.addEventListener('mousemove', (e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;


    const anchor = document.getElementById('anchor');
    const rect = anchor.getBoundingClientRect();
    const anchorX = rect.left + rect.width / 2;
    const anchorY = rect.top + rect.height / 2;

    const angleDeg = angle(mouseX, mouseY,anchorX, anchorY);

    const eyes = document.querySelectorAll('.eye');
    eyes.forEach((eye)=>{
        eye.style.transform = `rotate(${90 + angleDeg}deg)`
    })

})


function angle(cx,cy,ex,ey){
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy,dx) // range (-PI, PI)
    const deg = rad * 180 / Math.PI;
    return deg;
}