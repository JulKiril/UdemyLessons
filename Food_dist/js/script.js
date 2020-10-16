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



const deadline = "2020-10-17";

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
    
        if(t.total <=0) {
            clearInterval(timeInterval);
        }
    }
  
}
    setClock('.timer', deadline);
});







