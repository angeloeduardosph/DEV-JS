 const convertButton = document.querySelector(".convert-button")
 const currencySelect = document.querySelector(".currency-select")

 function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em real 
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas



    const dolarToday = 5.8
    const euroToday = 6.2
    const libraToday = 6.9
    

if(currencySelect.value == "dolar"){
   
   // Se o selest tiver selecionado o valor de dolar,entre aqui 
   currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
      style:"currency",
      currency:"USD"
   }).format(inputCurrencyValue / dolarToday)


}

if(currencySelect.value == "euro"){
   // Se o selest tiver selecionado o valor de euro,entre aqui 
   currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
      style:"currency",
      currency:"EUR"
   }).format(inputCurrencyValue / euroToday)


}





   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
      style:"currency",
      currency:"BRL"
   }).format(inputCurrencyValue)

   if(currencySelect.value == "libra"){
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
         style:"currency",
         currency:"GBP"
      }).format(inputCurrencyValue / libraToday)
   }
   




   
   

 
    

   
 }

 function changeCurrency (){
const currencyName = document.getElementById("currency-name")
const currencyImage = document.querySelector(".currency-img")


if (currencySelect.value == "dolar"){
   currencyName.innerHTML = "Dólar americano"
   currencyImage.src = "./assets/estados-unidos (1) 1.png"

}

if (currencySelect.value == "euro"){
   currencyName.innerHTML = "Euro"
   currencyImage.src = "./assets/euro1.png"

}


if (currencySelect.value == "libra"){
   currencyName.innerHTML = "Libra esterlina"
   currencyImage.src = "./assets/libra1.png"
}
convertValues()


 }

 currencySelect.addEventListener("change",changeCurrency)

 convertButton.addEventListener("click",convertValues)