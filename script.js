/* Pop Up for Interactive map */

// Сохранение tooltip в переменную
const tooltip = document.querySelector('.tooltip');
// Массив штатов (все эл. класса state)
const states = document.querySelectorAll('.state');



// let popupBg = document.querySelector('.info__bg');
// let popup__photo = document.querySelector('.info__photo');
// let popup__title = document.querySelector('.info__title');
// let popup__text = document.querySelector('.info__text');
// let tooltip = document.querySelector('.tooltip');

states.forEach((state) => {
    // Обработчики событий для всех state
    // Вывод информации о штате при событии - клик
    state.addEventListener('mousemove', function() {
        tooltip.innerText = this.dataset.title;
        // popup__title.textContent = this.getAttribute('data-title');
        // popup__photo.setAttribute('src', this.getAttribute('data-photo'));
        // popup__text.textContent = this.getAttribute('data-text');
        // popupBg.classList.add('active');
    });

    // state.addEventListener('mouseenter', function() {
    //     tooltip.textContent = state.getAttribute('data-title');
    //     tooltip.style.display = 'block';
    // });

    // state.addEventListener('mouseleave', function() {
    //     tooltip.textContent = state.getAttribute('data-title');
    //     tooltip.style.display = 'none';
    // });

    // state.addEventListener('mousemove', function(e) {
    //     tooltip.style.top = (e.y + 20) + 'px';
    //     tooltip.style.left = (e.x + 20) + 'px';
    // });
});

// document.addEventListener('click', (e) => {
//     if(e.target === popupBg)
//     {
//         popupBg.classList.remove('active');
//     }
// });
