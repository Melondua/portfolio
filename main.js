// pembuatan animasi klik more info about
function toggleDetail(e) {
    const target = $(e.target)

    if ($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("Lest Info").addClass("active")
    }

    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")
    $(detail).slideToggle()
}

// membuat validasi js
function onFormSubmit(e) {
    e.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#inp_message")

    if (!$(email).val()) {
        alert("Email is required")
    } else if (!$(subject).val()) {
        alert("Subject is required")
    } else if (!$(message).val()) {
        alert("Message is required")
    } else {
        alert("Form Submitted")
        $(email).val("")
        $(subject).val("")
        $(message).val("")
    }
}

//kalkulator

function sec(nomre) {
    reqem = document.getElementById("iphoneTotal").innerHTML;
    reqem = reqem + nomre;
    document.getElementById("iphoneTotal").innerHTML = reqem;

}

function menfi() {
    reqem = document.getElementById("iphoneTotal").innerHTML;
    reqem = "-" + reqem;
    document.getElementById("iphoneTotal").innerHTML = reqem;
}

function faiz() {
    reqem = document.getElementById("iphoneTotal").innerHTML;
    reqem = reqem * 1 / 100;
    document.getElementById("iphoneTotal").innerHTML = reqem;
}

function noqte() {
    reqem = document.getElementById("iphoneTotal").innerHTML
    reqem = reqem + "."
    document.getElementById("iphoneTotal").innerHTML = reqem;
}

function resetIphone() {
    reset = document.getElementById("iphoneTotal").innerHTML
    reset = "";
    document.getElementById("iphoneTotal").innerHTML = reset;
}

function azaltReqemi() {
    reqem = document.getElementById("iphoneTotal").innerHTML
    document.getElementById("iphoneTotal").innerHTML = reqem.substring(0, reqem.length - 1);


} function vurma() {
    reqem = document.getElementById("iphoneTotal").innerHTML
    reqem = reqem + "*"
    document.getElementById("iphoneTotal").innerHTML = reqem;
}

function bolme() {
    reqem = document.getElementById("iphoneTotal").innerHTML
    reqem = reqem + "/"
    document.getElementById("iphoneTotal").innerHTML = reqem;
}
function cixma() {
    reqem = document.getElementById("iphoneTotal").innerHTML
    reqem = reqem + "-"
    document.getElementById("iphoneTotal").innerHTML = reqem;

}
function toplama() {
    reqem = document.getElementById("iphoneTotal").innerHTML
    reqem = reqem + "+"
    document.getElementById("iphoneTotal").innerHTML = reqem;

}



function yoxlama() {
    if (isNaN(eval(neticemiz)) !== false) {
        alert("Səhflik var")
    }
}

function neticeIphone() {
    neticemiz = document.getElementById("iphoneTotal").innerHTML
    yoxlama();
    document.getElementById("iphoneTotal").innerHTML = eval(neticemiz)

}