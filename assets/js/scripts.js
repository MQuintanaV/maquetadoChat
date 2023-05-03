let mostrarMenuPagina= ()=>{

    let elContenedor = document.getElementsByClassName('nav__listContainer');
    let estadoContenedor = elContenedor[0].style.display;

    if(estadoContenedor == 'block'){
        elContenedor[0].style.display = 'none';       
    }

    else{
        elContenedor[0].style.display = 'block';       
    }


}