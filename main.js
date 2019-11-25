function calcDifference (){
    var totalSale = document.getElementById("amount-due").value;
    var moneyRec = document.getElementById("amount-received").value;
    var remainingBalance = (totalSale - moneyRec);
    var dividers = [1.00,0.25,0.10,0.05,0.01]
    var balanceArray = []
    // The code below clears out the output boxes whenever the button is clicked
    document.getElementById("messageOutput").innerHTML = " ";
    document.getElementById("dollars-output").innerHTML = " ";
    document.getElementById("quarters-output").innerHTML = " ";
    document.getElementById("dimes-output").innerHTML = " ";
    document.getElementById("nickels-output").innerHTML = " ";
    document.getElementById("pennies-output").innerHTML = " ";
// The if statement will execute if the change is due
    if (Math.sign(remainingBalance) == -1){
        for(i=0; i < dividers.length; i++){
                var newBal = remainingBalance / dividers[i];
                balanceArray.push(newBal);
                remainingBalance = remainingBalance % dividers[i];
            }

            document.getElementById("dollars-output").innerHTML = Math.floor(Math.abs(balanceArray[0]));
            document.getElementById("quarters-output").innerHTML = Math.floor(Math.abs(balanceArray[1]));
            document.getElementById("dimes-output").innerHTML = Math.floor(Math.abs(balanceArray[2]));
            document.getElementById("nickels-output").innerHTML = Math.floor(Math.abs(balanceArray[3]));
            document.getElementById("pennies-output").innerHTML = Math.round(Math.abs(balanceArray[4]));
// the else if statement will execute if no change is due
    } else if (remainingBalance == 0){
        document.getElementById("messageOutput").innerHTML = ("No change due.")
// the else if statment below will execute if the person still owes money        
    } else if (Math.sign(remainingBalance) == 1){
        document.getElementById("messageOutput").innerHTML = ("I'm sorry you still owe " + remainingBalance + " dollars!");
// the else statment will run if someone manages to enter a non numerical value into the program        
    } else {
        document.getElementById("messageOutput").innerHTML = ("Ooooooh that doesnt seem to be money you entered! Please enter a valid dollar amounts.")
    }

}

