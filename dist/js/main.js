const showSidebar = (toogleClass, sidebar, btnMenu) =>{
    const toggle = document.getElementById(toogleClass),
    sideMenu = document.getElementById(sidebar),
    menu = document.getElementById(btnMenu)

    if(toggle && sideMenu && menu){
        toggle.addEventListener('click',()=>{
            sideMenu.classList.toggle('active')
            menu.classList.toggle('bx-x')

            menu.classList.toggle('navbarActive')
        })
    }
}

const showNotificacion = () =>{
    const toggle = document.getElementById('dropbtn'),
    content2 = document.getElementById('items-perfil'),
    content = document.getElementById('dropdown-content')
    if(toggle){
        toggle.addEventListener('click',()=>{
            content.classList.toggle('activarMenuNoti')
            content2.classList.remove('showPerfil')
        })
    }
}
const showPerfil = () =>{
    const toggle = document.getElementById('imgBtn'),
    content = document.getElementById('items-perfil'),
    content2 = document.getElementById('dropdown-content')
    if(toggle){
        toggle.addEventListener('click',()=>{
            content.classList.toggle('showPerfil')
            content2.classList.remove('activarMenuNoti')
        })
    }
}

showSidebar('btnCollapse','sidebar', 'btnCollapse')
showNotificacion()
showPerfil()