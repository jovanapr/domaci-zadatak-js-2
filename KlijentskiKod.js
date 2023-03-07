function myFunction(a) {
    var broj = prompt("Insert number between 1 and 999!");
    var brojInt = parseFloat(broj);

    if (brojInt >= 1 && brojInt <= 999) {
        switch (a) {
            case "sqrt":
                alert(Math.sqrt(brojInt));
                break;
            case "sin":
                alert(Math.sin(brojInt));
                break;
            case "cos":
                alert(Math.cos(brojInt));
                break;
            case "round":
                alert(Math.round(brojInt));
                break;
        }
    }

    else if (brojInt < 1 || brojInt > 999) {
        alert("Number must be between 1 and 999");
    }

    else {
        alert("This is not a number");
    }
    
}
