// ==UserScript==
// @name         PlayThroughCanvasLectures
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  skip through the lectures, pause at the quizzes
// @author       Anngelyque
// @match        https://*.gatech.instructure.com/courses*pages*
// @grant        none
// @run-at document-end
// ==/UserScript==

window.addEventListener("load", function()
{
    var delayInMiliseconds = 1000;
    var button = document.getElementsByClassName("Button")[3];

    setInterval(function(){
        button.click();
    }, delayInMiliseconds);
});
