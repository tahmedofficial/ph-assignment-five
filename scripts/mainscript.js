
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

// set html unused
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
    const finishFour = getTextElementValueById("select_seat");
    if(finishFour<=3){
        if ("bg-primary_color" != checkDouble(elementId)) {
            const id = getElementTextById(elementId);
            setBackgroundColorById(id);
            minusNumber("current_set");
            plusNumber("select_seat");
            // setHtmlElementValueById("set_html");
            setTextElementValueById("seat_name", elementId);
        }
    }
}

// Utlity function end


function ticketA1() {

    // mainCode("A1");

    const four = getTextElementValueById("select_seat");
    if(four<=3){
        if ("bg-primary_color" != checkDouble("A1")) {
            const id = getElementTextById("A1");
            setBackgroundColorById(id);
            minusNumber("current_set");
            plusNumber("select_seat");
            setTextElementValueById("seat_name", "A1")
    
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
