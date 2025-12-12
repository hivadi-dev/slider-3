const circles = document.querySelectorAll('.circle')
const moves = document.querySelectorAll('.move');
const images = document.querySelectorAll('.image');
const box = document.querySelector('.box')
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');


//arrow//

circles.forEach((circle) =>{
    circle.addEventListener('click' , ()=>{
        circles.forEach((item) =>{
            item.classList.remove('active')
        })
        circle.classList.add('active')
    })
} )


//picture in box with mouse movement//

moves.forEach((moveBox, index) => {

    const img = images[index];

    moveBox.addEventListener('mousemove', (e) => {

        const rect = moveBox.getBoundingClientRect();

        let x = e.clientX - rect.left;   // مختصات موس داخل همون باکس
        let y = e.clientY - rect.top;
        ////شدت حرکت عکس
        let moveX = (x - rect.width / 2) /50;
        let moveY = (y - rect.height / 2) /50 ;

        img.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    moveBox.addEventListener('mouseleave', () => {
        img.style.transform = `translate(0px, 0px)`;
    });

});



//picture movement//

let currentIndex = 0;
const totalSlides = moves.length;

function goToSlide(index){
    if(index < 0 || index >= totalSlides ) return ;
    currentIndex = index
    box.style.transform = ` translateX(-${currentIndex * 400}px)`
}


rightArrow.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
});


leftArrow.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
});
