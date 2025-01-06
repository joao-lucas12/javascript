function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0  || fano.value > ano){
        window.alert('ERRO Verifique os dados e tente novamente')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 18){
                // criança
                img.setAttribute('src', 'homem-criança.png')
            } else if (idade > 18 && idade <= 60){
                // adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                // idoso
                img.setAttribute('src', 'homem-idoso.png')
            }
        }
        else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 18){
                // criança
                img.setAttribute('src', 'mulher-criança.png')
            } else if (idade > 18 && idade < 60){
                // adulto
                img.setAttribute('src', 'mulher-jovem.png')
            } else {
                // idoso
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}