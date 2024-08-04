
// data to paste
let giveAmount = localStorage.getItem("giveAmount");
let receiveAmount = localStorage.getItem("receiveAmount")
let networkSend = localStorage.getItem("networkSend");
let networkReceive = localStorage.getItem("networkReceive");
let receive_wallet = localStorage.getItem("walletReceive");
let orderNumber = localStorage.getItem("orderNumber");
const paymentWallet = "x0111111111111111111111111";

// elements to paste in
let payDataEl = document.getElementById("pay_data");
let payWAlletEl = document.getElementById("address_input");
let receiveDataEl = document.getElementById("receive_data");
let receiveWAlletEl = document.getElementById("receive_wallet");
let orderNumberEl = document.getElementById("order_number");
let payTextEl = document.getElementById("to_pay_text");
let receiveTextEl = document.getElementById("to_receive_text");

let payDataText = giveAmount + " | " + networkSend.toUpperCase();
let receiveDataText = receiveAmount + " | " + networkReceive.toUpperCase();
payDataEl.innerHTML = payDataText;
payWAlletEl.innerHTML = paymentWallet;
receiveDataEl.innerHTML = receiveDataText;
receiveWAlletEl.innerHTML = receive_wallet;
orderNumberEl.innerHTML = "#" + orderNumber;
payTextEl.innerHTML = "<b>" + giveAmount + " " + networkSend.toUpperCase() + "</b>";
receiveTextEl.innerHTML = receiveAmount + " " + networkReceive.toUpperCase()

function copyThisAddress(){
    navigator.clipboard.writeText(paymentWallet);
    alert("Вы скопировали адрес кошелька!");
}

