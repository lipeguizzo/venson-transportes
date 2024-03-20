const toggleNavbarMenu = ()=>{
    const navbarMenu = document.getElementById('menu');
    const navbar = document.getElementById('navbar');

    if(navbarMenu.checked){
        navbar.classList.remove('navbar-expanded');
    }else{
        navbar.classList.add('navbar-expanded');
    }
}

const scrollToElement = (elementId, event)=>{
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: "smooth" });
    event.preventDefault();
}

document.addEventListener('scroll', scrollToUp = () => {
    const button = document.getElementById('arrow-button');
    const position = window.scrollY;

    // 165 é o tamanho do meu header
    if (position > 165) {
        console.log(position)
        button.classList.remove('hide-button');
    }else{
        button.classList.add('hide-button');
    }
});