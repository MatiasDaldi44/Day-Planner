$("#currentDay").text(moment().format('dddd, MMMM Do'));

setTextareaClass();

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
    console.log(moment().hour());
};
