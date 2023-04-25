export function changeRoute(){
    let navbar = document.getElementById("navigation");
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    if (pageID != ""){
        if(pageID == "home"){
            $("nav").addClass("nav-white");
            $("nav").removeClass("nav-black");
            $("nav img").attr("src", "images/logo/logo-white.png");
        }else{
            $("nav").addClass("nav-black");
            $("nav").removeClass("nav-white");
            $("nav img").attr("src", "images/logo/logo-black.png");
        }
        console.log(pageID);
        $.get(`pages/${pageID}.html`, function(data){
            console.log("data" + data);
            $("#app").html(data);

        })
    } else{
        $.get(`pages/home.html`, function(data){
            console.log("data" + data);
            $("#app").html(data);
        });
        console.log("home");
    }
}