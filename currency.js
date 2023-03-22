class Currency{
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency=firstCurrency;
        this.secondCurrency=secondCurrency;
        this.url="https://api.apilayer.com/exchangerates_data/latest?apikey=K6UuwOnj1G1klNVjYEZmTIF1A0zhHXS1&base=";
        this.amount=null;       
    }
    exchange(){    
        return new Promise((resolve,reject)=>{
            fetch(this.url+this.firstCurrency)
            .then(response=>response.json())
            .then(data=>{
                let second=data.rates[this.secondCurrency];
                let amount2=Number(this.amount);
                let total=second*amount2;
                resolve(total);
            })
            .catch(err=>reject(err));
        });
                   
    }
    changeAmount(newamount){
        this.amount=newamount;
    }
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency=newFirstCurrency;
    }
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency=newSecondCurrency;
    }

}
