"use strict";

window.addEventListener("DOMContentLoaded", ()=>{
//TABS
    let tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParrent = document.querySelector(".tabheader__items");

    function hideTabContent(){
        tabsContent.forEach((item)=>{
            item.classList.add("hide");
            item.classList.remove("show", "fade");
        });

        tabs.forEach(item=>{
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i=0){
        tabsContent[i].classList.add("show", "fade");
        tabsContent[i].classList.remove("hide");
        tabs[i].classList.add('tabheader__item_active');
    }

hideTabContent();
showTabContent();

    tabsParrent.addEventListener('click', (event)=>{
        const target = event.target;
        if(target && target.classList.contains("tabheader__item")){
            tabs.forEach((item,i)=>{
                if(target == item){
                    hideTabContent();
                    showTabContent(i); 
                }
            });
        }
    });
//TIMER//////////////////////////

const deadline = "2020-10-30";

function addZero(num){
    if(num>=0 && num < 10){
        return `0${num}`;
    }
    else{
        return num;
    }
}

function getTimeRemaining(endtime){
    const diff = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(diff/(1000*60*60*24)),
        hours = Math.floor((diff/(1000*60*60)%24)),
        mins = Math.floor((diff/1000/60)%60),
        seconds = Math.floor((diff/1000)%60);

    return {
        'total': diff,
        'days': days,
        'hours': hours,
        'minutes': mins,
        'seconds': seconds
    };    
}

function setClock(selector,endTime){
    const timer = document.querySelector(selector),
           days = timer.querySelector('#days'),
           hours = timer.querySelector('#hours'),
           minutes = timer.querySelector('#minutes'),
           seconds = timer.querySelector('#seconds'),
           
           timeInterval = setInterval(updateClock, 1000);

           updateClock();

    function updateClock(){
        const t = getTimeRemaining(endTime);
        days.innerHTML = addZero(t.days);
        hours.innerHTML = addZero(t.hours);
        minutes.innerHTML = addZero(t.minutes);
        seconds.innerHTML = addZero(t.seconds);
    
        if(t.total <= 0) {
            clearInterval(timeInterval);
            days.innerHTML = '00';
            hours.innerHTML = '00';
            minutes.innerHTML = '00';
            seconds.innerHTML = '00';
        }
    }
  
}
    setClock('.timer', deadline);

    ///////////MODAL WINDOW

    const modalBtn = document.querySelectorAll('[data-modal]'),
            modalClose = document.querySelector('[data-close]'),
            modal = document.querySelector(".modal");

    let hideModal = ()=>{
        modal.classList.remove('show');
        document.body.style.overflow = '';
    };

    let openModal = ()=>{
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    };
    
    modalBtn.forEach((item)=>{
        item.addEventListener('click',openModal);
    }); 

    modalClose.addEventListener('click', hideModal); 
    
    modal.addEventListener('click',(e)=>{
        if(e.target === modal){
            hideModal();
        }
    });

    document.addEventListener('keydown', (e)=>{
        if(e.code ==="Escape" && modal.classList.contains('show')){
            hideModal();
        }
    });

    const modalTimerId = setTimeout(openModal,3000);

    function showModalByScroll(){
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openModal();
            window.removeEventListener('scroll',showModalByScroll);
        }       
    }

    window.addEventListener('scroll',showModalByScroll);


    ////MANU__ITEM - Классы//////
        class MenuCard {
            constructor(image, alt, title, description, prise, parrentSelector, ...classes){
                this.parrentDiv = document.querySelector(parrentSelector);
                this.image = image;
                this.alt = alt;
                this.title = title;
                this.description = description;
                this.price = prise;
                this.transfer = 27;
                this.classes = classes; ///массив
            }
          
            changeToUAH(){
                this.price = this.price*this.transfer;
            }

            renderCard(){
                this.changeToUAH();
                let card = document.createElement('div');
                if(this.classes.length === 0){
                    this.cardClass = 'menu__item';
                    card.classList.add(this.cardClass);
                }
                else{
                    this.classes.forEach((item)=>{
                        card.classList.add(item);
                    });   
                }
                card.innerHTML =
                `<img src="${this.image}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.description}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>`;

            this.parrentDiv.append(card);            
            }
            
        }

        const cardFitness = new MenuCard(
            'img/tabs/vegy.jpg',
            'vegy',
            'Меню "Фитнес"',
            'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
            9,
            ".menu__field .container",
            );
        cardFitness.renderCard();
        const cardPremium = new MenuCard(
            'img/tabs/elite.jpg',
            'elite','Меню “Премиум”',
            'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
            15,
            ".menu__field>.container",
            "menu__item");
        cardPremium.renderCard();
        const cardPost = new MenuCard(
            'img/tabs/post.jpg',
            'post',
            'Меню "Постное"',
            'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
            12,
            ".menu__field>.container",
            "menu__item");
        cardPost.renderCard();
/////////FORMS//////////////////////////

const forms = document.querySelectorAll('form');
const message = {
    loading: 'Загрузка',
    success: 'Спасибо, скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так'
};

forms.forEach((item)=>{
    postData(item);
});

function postData(form){
    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        const statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        statusMessage.textContent = message.loading;
        form.append(statusMessage);

        const request = new XMLHttpRequest();
        request.open('POST', 'server.php');


        request.setRequestHeader('Content-type', 'application/json');

        const formData = new FormData(form); 

        const object = {};
        formData.forEach((value, key)=>{
            object[key] = value;
        });

        const json = JSON.stringify(object);
        request.send(json);

        request.addEventListener('load',()=>{
                if(request.status ===200){
                    console.log(request.response);
                    statusMessage.textContent = message.success;
                    form.reset();
                    setTimeout(()=>{
                        statusMessage.remove();
                    },2000);
                }
                else{
                    statusMessage.textContent = message.failure;
                }
        });

    });
}


});












