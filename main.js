clearLocalStorage();

$("#currentDay").text(moment().format('dddd, MMMM Do'));
var currentDate = $("#currentDay").text();
var nineAm = "";
var tenAm = "";
var elevenAm = "";
var twelvePm = "";
var onePm = "";
var twoPm = "";
var threePm = "";
var fourPm = "";
var fivePm = "";

setTextareaClass();

maintainText();

$(".firstHour").on("click", "button", function(){
    nineAm = ($("#9").val().trim())
    localStorage.setItem("9am", nineAm)
});

$(".secondHour").on("click", "button", function(){
    tenAm = ($("#10").val().trim())
    localStorage.setItem("10am", tenAm)
});

$(".thirdHour").on("click", "button", function(){
    elevenAm = ($("#11").val().trim())
    localStorage.setItem("11am", elevenAm)
});

$(".fourthHour").on("click", "button", function(){
    twelvePm = ($("#12").val().trim())
    localStorage.setItem("12pm", twelvePm)
});

$(".fifthHour").on("click", "button", function(){
    onePm = ($("#13").val().trim())
    localStorage.setItem("1pm", onePm)
});

$(".sixthHour").on("click", "button", function(){
    twoPm = ($("#14").val().trim())
    localStorage.setItem("2pm", twoPm)
});

$(".seventhHour").on("click", "button", function(){
    threePm = ($("#15").val().trim())
    localStorage.setItem("3pm", threePm)
});

$(".eigthHour").on("click", "button", function(){
    fourPm = ($("#16").val().trim())
    localStorage.setItem("4pm", fourPm)
});

$(".ninthHour").on("click", "button", function(){
    fivePm = ($("#17").val().trim())
    localStorage.setItem("5pm", fivePm)
});

function maintainText() {
    $("#9").text(localStorage.getItem("9am"));
    $("#10").text(localStorage.getItem("10am"));
    $("#11").text(localStorage.getItem("11am"));
    $("#12").text(localStorage.getItem("12pm"));
    $("#13").text(localStorage.getItem("1pm"));
    $("#14").text(localStorage.getItem("2pm"));
    $("#15").text(localStorage.getItem("3pm"));
    $("#16").text(localStorage.getItem("4pm"));
    $("#17").text(localStorage.getItem("5pm"));
}

function setTextareaClass() {
    var currentHour = moment().hour()
    var firstHour = $("#9")
    if (currentHour > 9) {
        firstHour.addClass("past")
    } else if (currentHour < 9) {
        firstHour.addClass("future")
    } else {
        firstHour.addClass("present")
    }
    var secondHour = $("#10")
    if (currentHour > 10) {
        secondHour.addClass("past")
    } else if (currentHour < 10) {
        secondHour.addClass("future")
    } else {
        secondHour.addClass("present")
    }
    var thirdHour = $("#11")
    if (currentHour > 11) {
        thirdHour.addClass("past")
    } else if (currentHour < 11) {
        thirdHour.addClass("future")
    } else {
        thirdHour.addClass("present")
    }
    var fourthHour = $("#12")
    if (currentHour > 12) {
        fourthHour.addClass("past")
    } else if (currentHour < 12) {
        fourthHour.addClass("future")
    } else {
        fourthHour.addClass("present")
    }
    var fifthHour = $("#13")
    if (currentHour > 13) {
        fifthHour.addClass("past")
    } else if (currentHour < 13) {
        fifthHour.addClass("future")
    } else {
        fifthHour.addClass("present")
    }
    var sixthHour = $("#14")
    if (currentHour > 14) {
        sixthHour.addClass("past")
    } else if (currentHour < 14) {
        sixthHour.addClass("future")
    } else {
        sixthHour.addClass("present")
    }
    var seventhHour = $("#15")
    if (currentHour > 15) {
        seventhHour.addClass("past")
    } else if (currentHour < 15) {
        seventhHour.addClass("future")
    } else {
        seventhHour.addClass("present")
    }
    var eigthHour = $("#16")
    if (currentHour > 16) {
        eigthHour.addClass("past")
    } else if (currentHour < 16) {
        eigthHour.addClass("future")
    } else {
        eigthHour.addClass("present")
    }
    var ninthHour = $("#17")
    if (currentHour > 17) {
        ninthHour.addClass("past")
    } else if (currentHour < 17) {
        ninthHour.addClass("future")
    } else {
        ninthHour.addClass("present")
    }
    localStorage.setItem("Current Day", currentDate)
};

function clearLocalStorage() {
    var compareDate = localStorage.getItem("Current Day")
    if (compareDate != moment().format('dddd, MMMM Do')) {
        localStorage.clear()
    }
}
