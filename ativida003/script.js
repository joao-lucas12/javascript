function contar() {
    var i = document.getElementById('txti')
    var f = document.getElementById('txtf')
    var p = document.getElementById('txtp')
    var res = document.getElementById('res')
    
    if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
        window.alert('ERRO Confira os dados e tente novamente')
    } else {
        res.innerHTML = 'Contando...'
        let ini = Number(i.value)
        let fim = Number(f.value)
        let pas = Number(p.value)
        if (pas <= 0){
            window.alert('Passo invalido! Considerando passo 1')
            pas = 1
        }

        if(ini < fim){
            for(let c = ini; c <= fim; c += pas) {
                res.innerHTML += ` ${c} \u{1F449}`
    
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            for(let c = ini; c >= fim; c -= pas){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }

        }

        


}