/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', ()=>{
    const movieDB = {
        movies: [
            "логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
            
    
        ]
    };
    
    let adv = document.querySelectorAll(".promo__adv img").forEach((item) => { item.remove();});
    document.querySelector(".promo__genre").innerHTML = "Драма";
    document.querySelector(".promo__bg").style.cssText = "background: url(../img/bg.jpg) center center no-repeat";
    
    let input = document.querySelector(".adding__input");
    let btn = document.querySelector("button");
    let movieList = document.querySelector(".promo__interactive-list");
    
    btn.addEventListener('click', (event) =>{
        event.preventDefault();
        let newFilm = input.value;
        if(newFilm){
            movieDB.movies.push(newFilm);
            console.log(movieDB);
            renderList(movieDB.movies, movieList);
        }
        input.value = "";
    });
    
    function sortArray(arr){
            arr.forEach((item,i)=>{
            arr[i] = item.toUpperCase();
            arr.sort();  
        });
    }
    
    function renderList(array, parrent){
        parrent.innerHTML = "";
        sortArray(array);
        array.forEach((item,i) => {
            if(item.length > 21){
                item = `${item.slice(0,21)}...`;
            }
            parrent.innerHTML +=  `<li class="promo__interactive-item">${i+1} - ${item}
                                        <div class="delete"></div>
                                    </li>`;
                                    console.log(typeof(item));
        });

        document.querySelectorAll(".delete").forEach((item,i)=>{
            item.addEventListener('click',()=>{
                item.parentElement.remove();
                movieDB.movies.splice(i, 1);
                renderList(array,parrent);
            });
        });
        
    }
    
    renderList(movieDB.movies,movieList); 

    
    document.querySelector('[type="checkbox"]').addEventListener('click', ()=>{
        if(document.querySelector('[type="checkbox"]').checked) {
            console.log('checked');
        }
        else{
            console.log('не добавлять в любимые'); 
        }
        
    });
    

});











  





