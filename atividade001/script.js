function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas` 
    if (hora >= 0 && hora < 12){
       img.src = 'fotomanha.png'
       document.body.style.background = '#C7B78B'
    }
    else if (hora >= 12 && hora <= 18){
       img.src = 'fototarde.png'
       document.body.style.background = '#A57864'
    }
    else {
       img.src = 'fototarde.png'
       document.body.style.background = '#4A4C4C'
    }
}
