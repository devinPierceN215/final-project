export function changeRoute(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    if (pageID != ""){
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