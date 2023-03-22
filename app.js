let amountElement=document.getElementById("amount");
let firstSelect=document.getElementById("firstCurrency");
let secondSelect=document.getElementById("secondCurrency");
let currency=new Currency("USD","TRY");
let ui=new UI(firstSelect,secondSelect);
eventListeners();
function eventListeners(){
    amountElement.addEventListener("input",amountCurrency);
    firstSelect.onchange=function(){
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.changeFirst();
    };
    secondSelect.onchange=function(){
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond();
    };
}
function amountCurrency(){
    currency.changeAmount(amountElement.value);
    console.log(currency);
    currency.exchange()
    .then(result=>{
        ui.changeResult(result);
    })
    .catch(err=>console.log(err));
}
