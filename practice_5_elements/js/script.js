'use strict';

    const box = document.getElementById("box");
    box.style.backgroundColor = "green";
    box.style.cssText = "background-color: pink; border-radius: 100px";

    const btns = document.getElementsByTagName('button');
    btns[0].style.borderRadius = "100%";

    const circles = document.getElementsByClassName("circle");
    circles[0].style.backgroundColor = "olive";


