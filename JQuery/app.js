//Objective 1 create a button in JS that says nice when clicked
let $button = $("<button>Nice!</button>");
$button.appendTo("body");
$button.click(function () {
    alert("nice")
});


//Objective 2 another button(in HTML) that when clicked will pop up with text in form. 
$("#another-button").click(function () {
    var str = $("#box").val();
    alert(str);
});


//Objective 3 Div change background color when moused over
$(".border").mouseover(function () {
    $(".border").css({
        backgroundColor: randomColor()
    });
    function randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return 'rgb(' + r + ' , ' + g + ' , ' + b + ')';
    }
})


//Objective 4 change paragraph text red (done in HTML), and then to a random color on click
$(document).ready(function () {
    $("#paragraph").click(function () {
        $('#paragraph').css({
            color: randomColor()
        });
    })
    function randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return 'rgb(' + r + ' , ' + g + ' , ' + b + ')';
    }
});


//Objective 5 When a button is clicked it says your name to the span in the div
$(".btn-info").on("click", function () {
    $("#namediv").append("<span>Stacey</span>")
});


//Objective 6 array of friends when a button is clicked (in the HTML) friends become a ul
    let friends = ["Zach Morris", "Kelly Kapowski", "A.C. Slater", "Lisa Turtle", "Jessie Spano", "Screetch", "Mr Belding", "Leanna Creel", "Leah Remini", "Max"];
    let bellbutton = $("#bell");
    let ul = $("ul");
    bellbutton.click(function () {
        for (let i = 0; i < friends.length; i++) {
            let li = $("<li>" + friends[i] + "</li>");
            ul.append(li);
        }
    })
