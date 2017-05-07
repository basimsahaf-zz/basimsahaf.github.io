function changeIcon (){
    if($("#searchButton".click)){
        $("#logo").hide();
        $("#tagLine").hide();
        $("#searchBar").addClass("animated fadeInUp");
        $("#searchButton").addClass("animated fadeInUp");
        $("#logoAfter").text("Earthy");
        $("#logoAfter").addClass("animated zoomIn");
        $("#tagLineAfter").text("A Bucketful Of Science");
        $("#tagLineAfter").addClass("animated zoomIn");
    }
    return false;
}

function checkEnter(event){
    if(event.keyCode==13){
        changeIcon();
    }
}