const showSidebar = (toogleClass, sidebar, navbar) =>{
    const toggle = document.getElementById(toogleClass),
    sideMenu = document.getElementById(sidebar),
    menu = document.getElementById(navbar)

    if(toggle && sideMenu && menu){
        toggle.addEventListener('click',()=>{
            sideMenu.classList.toggle('active')
            menu.classList.toggle('navbarActive')
        })
    }
}

showSidebar('btnCollapse','sidebar', 'menunav')