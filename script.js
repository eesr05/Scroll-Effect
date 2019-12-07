// $('.navbar a').on('click', function(e){
//     if(this.hash !== ''){
//         e.preventDefault();

//         const hash = this.hash;

//         $('html, body').animate({
//             scrollTop: $(hash).offset().top

//         }, 
//         800);
//     }
// });

//Using the Smooth effect cdn
//Only add the .navbar and the speed in the const
const scroll = new SmoothScroll('.navbar a[href*="#"]',{
    speed: 800
});

