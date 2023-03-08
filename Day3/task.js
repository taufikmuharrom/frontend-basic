const vendingMachine = (email, money, drinkChoice) => {
    if (!email && !money) return "Please check your input";
    if (!email) return "Sorry can't process it until your email filled";
    if (typeof email !== 'string' || typeof money !== 'number') return "Invalid input";
    if (!money) return "Sorry can't process it until you put your money";
    let price = 0
    switch (drinkChoice) {
        case "Mineral Water":
            price = 5000
            break;
        case "Cola":
            price = 7500
            break;
        default:
            drinkChoice = "Coffee"
            price = 12250
            break;
    }
    let result = ''
    if (money < price) {
        result = `Welcome ${email} to May's Vending Machine <br>
        Sorry, insufficient balance we can't process your ${drinkChoice} <br>
        You need ${5000 - money} more to buy this drink <br>
        Thank you
        `
        return result
    }

    result =
        `Welcome ${email} to May's Vending Machine <br>
        Your choice is ${drinkChoice}, here's your drink <br>
        Your changes are ${money - price} <br>
        Thank you.
        `
    return result
}

document.getElementById("content").innerHTML = vendingMachine('taufik', 20000, "Cola-COla");