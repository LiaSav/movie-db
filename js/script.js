/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        'Логан',
        'Лига справедливости',
        'Ла-ла лэнд',
        'Одержимость',
        'Скотт Пилигрим против...'
    ]
};

const promoAdvImg = document.querySelectorAll('.promo__adv img'),
    promoBg = document.querySelector('.promo__bg'),
    promoGenre = promoBg.querySelector('.promo__genre'),
    promoInteractiveList = document.querySelector('.promo__interactive-list');

promoAdvImg.forEach(img => {
    img.remove();
});

promoGenre.textContent = 'драма';

// путь к картинке прописываем относительно html потому, что
// js код исполняется на html странице
promoBg.style.backgroundImage = 'url("img/bg.jpg")';

promoInteractiveList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    promoInteractiveList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>
    `;
});