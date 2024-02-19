
// Utlity function start

// set background color
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("bg-primary_color");
    element.classList.add("text-white");
}

// get element text
function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

// get input value
function getInputValue(elementId) {

    const inputField = document.getElementById(elementId);
    const inputValueText = inputField.value;
    return inputValueText;

}

// convert to int
function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

// set text
function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// set html
function setHtmlElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const div = document.createElement("div");
    div.innerHTML = `
    <div id="get_html" class="flex justify-between text-[#0000007e]">
         <P id="seat_name" class="text-xl"></P>
         <P class="text-xl">Economoy</P>
         <P class="text-xl">550</P>
    </div>
    `
    element.appendChild(div);
}
// set html 2
function setHtmlElementValueById2(elementId) {
    const element = document.getElementById(elementId);
    const div = document.createElement("div");
    div.innerHTML = `
    <div id="get_html" class="flex justify-between text-[#0000007e]">
         <P id="seat_name2" class="text-xl"></P>
         <P class="text-xl">Economoy</P>
         <P class="text-xl">550</P>
    </div>
    `
    element.appendChild(div);
}
// set html 3
function setHtmlElementValueById3(elementId) {
    const element = document.getElementById(elementId);
    const div = document.createElement("div");
    div.innerHTML = `
    <div id="get_html" class="flex justify-between text-[#0000007e]">
         <P id="seat_name3" class="text-xl"></P>
         <P class="text-xl">Economoy</P>
         <P class="text-xl">550</P>
    </div>
    `
    element.appendChild(div);
}
// set html 4 
function setHtmlElementValueById4(elementId) {
    const element = document.getElementById(elementId);
    const div = document.createElement("div");
    div.innerHTML = `
    <div id="get_html" class="flex justify-between text-[#0000007e]">
         <P id="seat_name4" class="text-xl"></P>
         <P class="text-xl">Economoy</P>
         <P class="text-xl">550</P>
    </div>
    `
    element.appendChild(div);
}

// set seat name and price
function setSeatNameAndPrice(elementId) {

    let finishFour = getTextElementValueById("select_seat");

    if (finishFour < 2) {
        setHtmlElementValueById("set_html");
        setTextElementValueById("seat_name", elementId);
    }
    else if (finishFour < 3) {
        setHtmlElementValueById2("set_html");
        setTextElementValueById("seat_name2", elementId);
    }
    else if (finishFour < 4) {
        setHtmlElementValueById3("set_html");
        setTextElementValueById("seat_name3", elementId);
    }
    else if (finishFour < 5) {
        setHtmlElementValueById4("set_html");
        setTextElementValueById("seat_name4", elementId);
    }

}

// minus number
function minusNumber(elementId) {
    const currentSeat = getTextElementValueById(elementId);
    const seat = currentSeat - 1;
    setTextElementValueById(elementId, seat);
}

// plus number
function plusNumber(elementId) {
    const selectSeat = getTextElementValueById(elementId);
    const seat = selectSeat + 1;
    setTextElementValueById(elementId, seat);
}

// count total price
function countTotalPrice(elementId) {
    const ticketNumber = getTextElementValueById(elementId);

    let totalPrice = 0;

    if (ticketNumber < 2) {
        totalPrice = 550
    }
    else if (ticketNumber < 3) (
        totalPrice = 1100
    )
    else if (ticketNumber < 4) (
        totalPrice = 1650
    )
    else if (ticketNumber < 5) (
        totalPrice = 2200
    )

    setTextElementValueById("total_price", totalPrice);
    setTextElementValueById("grand_total", totalPrice);

}

// count discount price
function countDiscountPrice(coupon, value) {

    if (value == 4) {

        let discount = 0;
        if (coupon == "NEW15") {
            discount = (2200 / 100) * 15;
            setTextElementValueById("discount", discount);
        }
        else if (coupon == "Couple 20") {
            discount = (2200 / 100) * 20;
            setTextElementValueById("discount", discount);
        }

    }

}


// check double
function checkDouble(elementId) {
    const getClass = document.getElementById(elementId);
    const myClass = getClass.classList

    for (const c of myClass) {
        if (c == "bg-primary_color") {
            return c;
        }
    }
}

// main code
function mainCode(elementId) {
    let finishFour = getTextElementValueById("select_seat");
    if (finishFour <= 3) {
        if ("bg-primary_color" != checkDouble(elementId)) {
            const id = getElementTextById(elementId);
            setBackgroundColorById(id);
            minusNumber("current_set");
            plusNumber("select_seat");
            setSeatNameAndPrice(elementId);

            countTotalPrice("select_seat");

        }
    }
}

// Utlity function end


// apply discount
function applyDiscount() {

    const copuponCode = getInputValue("copupon_code");
    const seat = getTextElementValueById("select_seat");
    console.log(seat);
    countDiscountPrice(copuponCode,seat);

}



function ticketA1() {

    // mainCode("A1");

    let four = getTextElementValueById("select_seat");
    if (four <= 3) {
        if ("bg-primary_color" != checkDouble("A1")) {
            const id = getElementTextById("A1");
            setBackgroundColorById(id);
            minusNumber("current_set");
            plusNumber("select_seat");
            setSeatNameAndPrice("A1");
            countTotalPrice("select_seat");

        }
    }


}





function ticketA2() {
    mainCode("A2");
}

function ticketA3() {
    mainCode("A3")
}

function ticketA4() {
    mainCode("A4")
}

function ticketB1() {
    mainCode("B1")
}

function ticketB2() {
    mainCode("B2")
}

function ticketB3() {
    mainCode("B3")
}

function ticketB4() {
    mainCode("B4")
}
