
// Utlity function start

// set background color
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("bg-primary_color");
    element.classList.add("text-white");
}

// remove background color
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("bg-primary_color");
    element.classList.remove("text-white");
}

function removeHtmlElement(elementId) {
    let div = document.getElementById(elementId);
    div.remove();
}

// hide element
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
}

// show element
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
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

// set input value
function setInputValue(elementId, text) {
    const inputField = document.getElementById(elementId);
    inputField.value = text;
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
    <div id="get_html" class="flex justify-between mt-2 text-[#0000007e]">
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
    <div id="get_html" class="flex justify-between mt-2 text-[#0000007e]">
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
    <div id="get_html" class="flex justify-between mt-2 text-[#0000007e]">
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
        let grandTotal = 0;
        if (coupon == "NEW15") {
            discount = (2200 / 100) * 15;
            grandTotal = 2200 - discount;
            setTextElementValueById("discount", discount);
            hideElementById("input_field");
            hideElementById("invalid_coupon");
            setTextElementValueById("grand_total", grandTotal);
            showElementById("discount_box");
        }
        else if (coupon == "Couple 20") {
            discount = (2200 / 100) * 20;
            grandTotal = 2200 - discount;
            setTextElementValueById("discount", discount);
            hideElementById("input_field");
            hideElementById("invalid_coupon");
            setTextElementValueById("grand_total", grandTotal);
            showElementById("discount_box");
        }
        else {
            showElementById("invalid_coupon");
        }

    }

}

// remove seat
function removeSeat(elementId) {

    const seatNumber = getTextElementValueById("select_seat");

    if (seatNumber < 2) {
        const seatName1 = getElementTextById("seat_name");
        removeBackgroundColorById(seatName1);
        setTextElementValueById("select_seat", "0");
        setTextElementValueById("total_price", "0");
        setTextElementValueById("grand_total", "0");
        setTextElementValueById("current_set", "40");
        setInputValue("phone_number", "");
        removeHtmlElement("get_html");
    }
    if (seatNumber < 3) {
        const seatName1 = getElementTextById("seat_name");
        removeBackgroundColorById(seatName1);
        const seatName2 = getElementTextById("seat_name2");
        removeBackgroundColorById(seatName2);
        setTextElementValueById("select_seat", "0");
        setTextElementValueById("total_price", "0");
        setTextElementValueById("grand_total", "0");
        setTextElementValueById("current_set", "40");
        setInputValue("phone_number", "");
        removeHtmlElement("get_html");
        removeHtmlElement("get_html");
    }
    if (seatNumber < 4) {
        const seatName1 = getElementTextById("seat_name");
        removeBackgroundColorById(seatName1);
        const seatName2 = getElementTextById("seat_name2");
        removeBackgroundColorById(seatName2);
        const seatName3 = getElementTextById("seat_name3");
        removeBackgroundColorById(seatName3);
        setTextElementValueById("select_seat", "0");
        setTextElementValueById("total_price", "0");
        setTextElementValueById("grand_total", "0");
        setTextElementValueById("current_set", "40");
        setInputValue("phone_number", "");
        removeHtmlElement("get_html");
        removeHtmlElement("get_html");
        removeHtmlElement("get_html");
    }
    if (seatNumber < 5) {
        const seatName1 = getElementTextById("seat_name");
        removeBackgroundColorById(seatName1);
        const seatName2 = getElementTextById("seat_name2");
        removeBackgroundColorById(seatName2);
        const seatName3 = getElementTextById("seat_name3");
        removeBackgroundColorById(seatName3);
        const seatName4 = getElementTextById("seat_name4");
        removeBackgroundColorById(seatName4);
        setTextElementValueById("select_seat", "0");
        setTextElementValueById("total_price", "0");
        setTextElementValueById("grand_total", "0");
        setTextElementValueById("current_set", "40");
        setInputValue("phone_number", "");
        removeHtmlElement("get_html");
        removeHtmlElement("get_html");
        removeHtmlElement("get_html");
        removeHtmlElement("get_html");
    }

}


// check double
function checkDouble(elementId) {
    const getClass = document.getElementById(elementId);
    const myClass = getClass.classList;

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
    countDiscountPrice(copuponCode, seat);
}

// next button
function nextButton() {

    const phoneNumber = getInputValue("phone_number");
    if (phoneNumber.length == 11) {
        const seatName = getElementTextById("seat_name");
        if (seatName != null) {

            hideElementById("header_container");
            hideElementById("main_container");
            hideElementById("footer_container");
            showElementById("success_container");

        }
    }
    else {
        showElementById("invalid_input");
    }

}

// continue button
function continueButton() {
    hideElementById("success_container");
    hideElementById("invalid_input");
    hideElementById("discount_box");
    showElementById("header_container");
    showElementById("main_container");
    showElementById("footer_container");
    showElementById("input_field");
    removeSeat(1);
    setInputValue("copupon_code", "");
    setTextElementValueById("discount", "0");

}


// seat function start

function ticketA1() {
    mainCode("A1")
}

function ticketA2() {
    mainCode("A2")
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

function ticketC1() {
    mainCode("C1")
}

function ticketC2() {
    mainCode("C2")
}

function ticketC3() {
    mainCode("C3")
}

function ticketC4() {
    mainCode("C4")
}

function ticketD1() {
    mainCode("D1")
}

function ticketD2() {
    mainCode("D2")
}

function ticketD3() {
    mainCode("D3")
}

function ticketD4() {
    mainCode("D4")
}

function ticketE1() {
    mainCode("E1")
}

function ticketE2() {
    mainCode("E2")
}

function ticketE3() {
    mainCode("E3")
}

function ticketE4() {
    mainCode("E4")
}

function ticketF1() {
    mainCode("F1")
}

function ticketF2() {
    mainCode("F2")
}

function ticketF3() {
    mainCode("F3")
}

function ticketF4() {
    mainCode("F4")
}

function ticketG1() {
    mainCode("G1")
}

function ticketG2() {
    mainCode("G2")
}

function ticketG3() {
    mainCode("G3")
}

function ticketG4() {
    mainCode("G4")
}

function ticketH1() {
    mainCode("H1")
}

function ticketH2() {
    mainCode("H2")
}

function ticketH3() {
    mainCode("H3")
}

function ticketH4() {
    mainCode("H4")
}

function ticketI1() {
    mainCode("I1")
}

function ticketI2() {
    mainCode("I2")
}

function ticketI3() {
    mainCode("I3")
}

function ticketI4() {
    mainCode("I4")
}

function ticketJ1() {
    mainCode("J1")
}

function ticketJ2() {
    mainCode("J2")
}

function ticketJ3() {
    mainCode("J3")
}

function ticketJ4() {
    mainCode("J4")
}

// seat function end