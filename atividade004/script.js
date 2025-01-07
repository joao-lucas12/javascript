function gerar() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else{
        let n = Number(num.value)
        let t = 1
        tab.innerHTML = ''
        while (t <=10){
            var item = document.createElement('Option')
            item.text = `${n} x ${t} = ${n*t}`
            tab.appendChild(item)
            t++
        }
    }
    
    
    
}