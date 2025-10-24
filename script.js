fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(resposta => {
    return resposta.json()
}).then(economia => {
    console.log(economia)
    document.getElementById('valorDolar').innerHTML = "R$"+ economia.USDBRL.bid +" maior de hoje"
    document.getElementById('valorDolar2').innerHTML = "R$ "+ economia.USDBRL.low +" menor de hoje"
})