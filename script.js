/*Pop Up for Interactive map*/

//Save all tags of class state
let states = document.querySelectorAll('.state');

//Saving data of tags with different classes
let popup__title = document.querySelector('.info__title');
let popup__photo = document.querySelector('.info__photo');
let popup__text = document.querySelector('.info__text');
let popupBg = document.querySelector('.info__bg');

let tooltip = document.querySelector('.tooltip');

states.forEach((state) => {
    //Call Pop-up
    state.addEventListener('click', function() {
        //Changing data of tags attributes //Insreting needed values
        popup__title.textContent = this.getAttribute('data-title');
        popup__photo.setAttribute('src', this.getAttribute('data-photo'));
        popup__text.textContent = this.getAttribute('data-text');
        popupBg.classList.add('active');
    });

    /*Hint near mouse events*/

    //Hint following mouse
    state.addEventListener('mousemove', function(e) {
        tooltip.innerText = this.dataset.title;
        tooltip.style.top = (e.y - 40) + 'px';
        tooltip.style.left = (e.x - 25) + 'px';
    });

    //Mouse enters area
    state.addEventListener('mouseenter', function() {
        tooltip.textContent = state.getAttribute('data-title');
        tooltip.style.display = 'block';
    });

    //Mouse leaves area
    state.addEventListener('mouseleave', function() {
        // tooltip.textContent = state.getAttribute('data-title');
        tooltip.style.display = 'none';
    });
});

//Close Pop-up
document.addEventListener('click', (e) => {
    if(e.target === popupBg)
    {
        popupBg.classList.remove('active');
    }
});
