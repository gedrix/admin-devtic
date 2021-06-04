const showSidebar = (toggleClass, sidebar) =>{
    const toggle = document.getElementById(toggleClass),
    menu = document.getElementById(sidebar)

    if(toggle && menu){
        toggle.addEventListener('click',()=>{
            menu.classList.toggle('active')
        })
    }
}

showSidebar('btnCollapse','sidebar')