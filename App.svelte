<script>
    let display = 0;
    let firstOperand = null;
    let secondOperand = false;
    let operator = null;
    let operatorClicked = false;

    const addDisplay = (num) => {
        if (display === 0 || operatorClicked) {
            display = "";
        }
        //Up to 13 digits can be added to the display.
        if (display.length <= 13) {
            display += String(num);
        }
        operatorClicked = false;
    };

    const dot = () => {
        if (display == 0) {
            display = "0.";
            //Should not be new dot added while there is a dot on the screen
        } else if (!display.includes(".")) {
            display += ".";
        }
    };
    //should be display value 0
    const resetDisplay = () => {
        display = 0;
        secondOperand = false;
    };

    const deleteNum = () => {
        display = String(display);
        //should be display value 0 when you delete the single digit on the screen
        if (display.length <= 1) {
            display = 0;
            //The numbers on the display should be deleted starting from the last digit.
        } else {
            display = display.slice(0, -1);
        }
    };

    const equal = () => {
        secondOperand = Number(display);
        if (operator === "+") {
            display = firstOperand + secondOperand;
        } else if (operator === "-") {
            display = firstOperand - secondOperand;
        } else if (operator === "*") {
            display = firstOperand * secondOperand;
        } else if (operator === "/") {
            display = firstOperand / secondOperand;
        }
        //There should be only 7 digits after the dot and the repeating 0 digits should be discarded
        //The result should not be a dot at the end of the integer
        display = display.toFixed(7).replace(/0+$/, "").replace(/[.]$/, "");
    };

    //Clicking on Operation should run the equals function.
    const operationsState = (operation) => {
        if (operator && secondOperand) {
            equal();
        }
        operator = operation;
        firstOperand = Number(display);
        operatorClicked = true;
        secondOperand = true;
    };

    //switch theme
    const changeTheme = (e) => {
        let oldlink = document.getElementsByTagName("link")[0];
        oldlink.setAttribute("href", `./themes/theme${e.target.value}.css`);
    };
</script>
