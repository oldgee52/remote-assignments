const headline = document.querySelector('.headline');
const startLearning = document.querySelector('.button');
const menuOpen = document.querySelector('.icon');
const menuClose = document.querySelector('.close');
const menu = document.querySelector('.menu')


headline.addEventListener('click', function() {
    headline.innerHTML = 'Have a Good Time!';
})

startLearning.addEventListener('click', function() {
    const learningContect = document.querySelector('.down-section');
    // learningContect.style.display = 'block';
    if ( learningContect.style.display !== 'block') {
    	startLearning.textContent = 'Week2 Learning';
    	learningContect.style.display = 'block'; 
    } else {
    	learningContect.removeAttribute('style') ;
    	startLearning.textContent = 'Star to Learn';
    }
})

menuOpen.addEventListener('click', function() {
    menu.style.right = '0px';
    menu.style.zIndex = '1';//讓menu可以在最上層
})

menuClose.addEventListener('click', function() {
    menu.removeAttribute('style');
})


/* 用display試試
menuOpen.addEventListener('click', function () {
	menu.style.display = 'block';
})

menuClose.addEventListener('click', function () {
	menu.removeAttribute('style');
})
*/