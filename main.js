const topbar = document.querySelector(`.topbar`)

/**
 * Event listner of Navbar
 */
window.addEventListener(`wheel`, function(){
    if(scrollY > 0){
        topbar.style.visibility = `visible`
        topbar.style.top = `0`
    } else{
        topbar.style.visibility = `hidden`
        topbar.style.top = `-50px`
        
    }
})
    