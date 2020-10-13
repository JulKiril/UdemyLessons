/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
const mainBlock = document.querySelector(".promo");
let adv = document.querySelectorAll(".promo__adv img").forEach((item) => { item.remove();});
mainBlock.querySelector(".promo__genre").innerHTML = "Драма";
mainBlock.querySelector(".promo__bg").style.cssText = "background: url(../img/bg.jpg) center center no-repeat";


const movieDB = {
    movies: [
        "логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
        

    ]
};
let movieList = document.querySelector(".promo__interactive-list");
    movieList.innerHTML = "";

movieDB.movies.forEach((item, i , arr) =>{
    arr[i] = item.toUpperCase();    
    });
    movieDB.movies.sort().forEach((item,i) => {
        movieList.innerHTML +=  `<li class="promo__interactive-item">${i+1} - ${item}
                                    <div class="delete"></div>
                                </li>`;
    });


  





