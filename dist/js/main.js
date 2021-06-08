const showSidebar = (toggleClass, sidebar, btnMenu) =>{
    const toggle = document.getElementById(toggleClass),
    sideMenu = document.getElementById(sidebar),
    btn = document.getElementById(btnMenu)

    if(toggle && sideMenu && btn){
        toggle.addEventListener('click',()=>{
            sideMenu.classList.toggle('active')
            btn.classList.toggle('bx-x')
            btn.classList.toggle('navbar-active')
        })
    }
}

const showMenuNotification = (btn,itemsList,content) =>{
    const toggle = document.getElementById(btn),
    listItems = document.getElementById(itemsList),
    contents = document.getElementById(content)

    if(toggle && listItems && contents){
        toggle.addEventListener('click',()=>{
            contents.classList.toggle('activar-menu-notificacion')
            listItems.classList.remove('show-items-perfil')
        })
    }
}

const showMenuPerfil = (btn,itemsList,content) =>{
    const toggle = document.getElementById(btn),
    listItems = document.getElementById(itemsList),
    contents = document.getElementById(content)

    if(toggle && listItems && contents){
        toggle.addEventListener('click',()=>{
            listItems.classList.toggle('show-items-perfil')
            contents.classList.remove('activar-menu-notificacion')
        })
    }
}

showSidebar('btnCollapse', 'sidebar', 'btnCollapse')
showMenuNotification('dropbtn', 'items-perfil', 'dropdown-content')
showMenuPerfil('imgBtn', 'items-perfil', 'dropdown-content')