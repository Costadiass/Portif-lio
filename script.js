function toggleMenu(){
    let sideMenu = document.getElementById("sideMenu");
    sideMenu.classList.toggle("menu-open");
}

function toggleDarkmode(checkbox){
    if(checkbox.checked){
        document.body.classList.add('dark-mode');
    }
    else{
        document.body.classList.remove('dark-mode');
    }
}