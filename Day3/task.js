// false , '',"",undefined
const vendingMachine = (email, money, drinkChoice) => {
    // cek jika money dan emailnya kosong
    if (!email && !money) return "Please check your input";
    // cek tipe dari input parameter
    if (typeof email !== 'string' || typeof money !== 'number') return "Invalid input";
    // cek jika emailnya kosong
    if (!email) return "Sorry can't process it until your email filled";
    // cek jika moneynya kosong
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
        You need ${price - money} more to buy this drink <br>
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

document.getElementById("content").innerHTML = vendingMachine('taufik@gmail.com', 15000, "Coffee");