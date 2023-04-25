import * as Model from '../services/service.js';

function initListener(){
    let btnID;
    $("nav a").on("click", function(e){
        btnID = e.currentTarget.id;
    })
}

function initURLListener(){
    $(window).on("hashchange", Model.changeRoute);
    Model.changeRoute();

}

$(document).ready(function (){
    initListener();
    initURLListener();

})