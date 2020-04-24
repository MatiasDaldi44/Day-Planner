$("#currentDay").text(moment().format('dddd, MMMM Do'));
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
    $("#9").text(nineAm)
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
        firstHour.removeClass("present")
        firstHour.addClass("past")
    } else if (currentHour < 9) {
        firstHour.removeClass("present")
        firstHour.addClass("future")
    }
    var secondHour = $("#10")
    if (currentHour > 10) {
        secondHour.removeClass("present")
        secondHour.addClass("past")
    } else if (currentHour < 10) {
        secondHour.removeClass("present")
        secondHour.addClass("future")
    }
    var thirdHour = $("#11")
    if (currentHour > 11) {
        thirdHour.removeClass("present")
        thirdHour.addClass("past")
    } else if (currentHour < 11) {
        thirdHour.removeClass("present")
        thirdHour.addClass("future")
    }
    var fourthHour = $("#12")
    if (currentHour > 12) {
        fourthHour.removeClass("present")
        fourthHour.addClass("past")
    } else if (currentHour < 12) {
        fourthHour.removeClass("present")
        fourthHour.addClass("future")
    }
    var fifthHour = $("#13")
    if (currentHour > 13) {
        fifthHour.removeClass("present")
        fifthHour.addClass("past")
    } else if (currentHour < 13) {
        fifthHour.removeClass("present")
        fifthHour.addClass("future")
    }
    var sixthHour = $("#14")
    if (currentHour > 14) {
        sixthHour.removeClass("present")
        sixthHour.addClass("past")
    } else if (currentHour < 14) {
        sixthHour.removeClass("present")
        sixthHour.addClass("future")
    }
    var seventhHour = $("#15")
    if (currentHour > 15) {
        seventhHour.removeClass("present")
        seventhHour.addClass("past")
    } else if (currentHour < 15) {
        seventhHour.removeClass("present")
        seventhHour.addClass("future")
    }
    var eigthHour = $("#16")
    if (currentHour > 16) {
        eigthHour.removeClass("present")
        eigthHour.addClass("past")
    } else if (currentHour < 16) {
        eigthHour.removeClass("present")
        eigthHour.addClass("future")
    }
    var ninthHour = $("#17")
    if (currentHour > 17) {
        ninthHour.removeClass("present")
        ninthHour.addClass("past")
    } else if (currentHour < 17) {
        ninthHour.removeClass("present")
        ninthHour.addClass("future")
    }
};
