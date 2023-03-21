let amountElement=document.querySelector("#amount");
let firstSelect=document.querySelector("#firstCurrency");
let secondSelect=document.querySelector("#secondCurrency");
let currency=new Currency("USD","TRY");
 eventListeners();
 function eventListeners(){
    amountElement.addEventListener("input",exchangeCurrency);
    firstSelect.onchange=function(){
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
    };
    secondSelect.onchange=function(){
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
    };
 }
 function exchangeCurrency(){
    currency.changeAmount(amountElement.value);
    currency.exchange()
    .then(result=>console.log(result))
    .catch(err=>console.log(err));
 }