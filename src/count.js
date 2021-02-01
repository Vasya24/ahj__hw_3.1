let counter = document.getElementById('kill-counter');
let missed = document.getElementById('missed-counter')

let field = document.getElementsByClassName('field');

function count() {

        if (counter.textContent == 5) {
            alert("Победа!");
            document.querySelector('.fields').remove();
            counter.textContent = 'достаточно.';
            missed.textContent = 'совсем чуть-чуть, либо вообще нисколько.'
        }


        if (missed.textContent == 5) {
            alert("Проиграль... :(");
            document.querySelector('.fields').remove();
            counter.textContent = 'недостаточно.';
            missed.textContent = 'слишком много. Молодец, блин.'
        }
}

for (let i = 0; i<field.length; i++) {

    field[i].addEventListener('click', () => {
        if (field[i].classList.contains('has_goblin')) {
            counter.textContent++;
        count();
        } else if (!field[i].classList.contains('has_goblin')) {
            missed.textContent++;
            count();
        }
    })
}
