let buttonOn = document.querySelector('.button-pp_mode_on');
let buttonOff = document.querySelector('.button-pp_mode_off');
let image = document.querySelector('.mondrian__image')

let notClicked = 'button-pp_status_not-clicked';
let clicked = 'button-pp_status_clicked'

buttonOn.onclick = function() {
   console.log(buttonOff.classList);
    if (buttonOn.classList.contains(notClicked) && buttonOff.classList.contains(clicked)) {
        image.style.display = 'block';
        buttonOn.classList.replace(notClicked, clicked);
        buttonOff.classList.replace(clicked, notClicked);
        buttonOn.textContent = 'Вот и оригинал!';
        buttonOff.textContent = 'Хочу обратно верстку';
     }
    }


buttonOff.onclick = function() {
   if (buttonOn.classList.contains(clicked) && buttonOff.classList.contains(notClicked)) {
            image.style.display = 'none';
            buttonOff.classList.replace(notClicked, clicked);
            buttonOn.classList.replace(clicked, notClicked);
            buttonOn.textContent = 'Включить оригинал';
            buttonOff.innerHTML = 'Верстка c' + '&nbsp;' + 'CSS Grid';
         }
        }