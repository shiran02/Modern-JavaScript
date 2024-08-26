class Wallet{
    constructor(){
        this._balance = 0;
        this._transaction = [];
    }


    deposite(amount){
        this._processDeposit(amount);
        this._balance += amount;
    }

    withdraw(amount){
        if(amount > this._balance){
            console.log('Not enough Founds');
            return;
        }
        this._processWithDraw(amount);
        this._balance -= amount;
    }

    get Balance(){
        return this._balance;
    }



    _processDeposit(amount){
        console.log(`Depositing ${amount}`);

        this._transaction.push({
            type:'depost',
            amount,
        });
    }
    _processWithDraw(amount){
        console.log(`Withdrawing ${amount}`);

        this._transaction.push({
            type:'Withdraw',
            amount,
        });
    }
}


const wallet = new Wallet();

wallet.deposite(300);
wallet.withdraw(30);

console.log(wallet._balance);
console.log(wallet._transaction);