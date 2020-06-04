//Objective 1 Button not on the HTML with Alert when page opens 
document.addEventListener("DOMContentLoaded", button);
function button() {
    let button = document.createElement("button");
    let btnText = document.createTextNode("I am a button");
    button.className = "button";
    button.appendChild(btnText);
    document.body.appendChild(button);

    button.addEventListener('click', function () {
        alert("nice");
    })
}


//Objective 2 another button with an alert with the message within the text box

document.getElementById('box').value = "";
function getVal() {
    var box = document.getElementById('box').value;
    alert(box);
}


//Objective 3 Div change background color when moused over
let hoverDiv = document.getElementsByClassName("border")[0];
hoverDiv.addEventListener("mouseover", function(){
    hoverDiv.style.backgroundColor = "pink"
})
hoverDiv.addEventListener("mouseleave", function(){
    hoverDiv.style.backgroundColor = "white"
})


//Objective 4 change paragraph text red (done in HTML), and then to a random color on click
let color = ['lightcoral', 'lightblue', 'lightgrey', 'lightpink', 'lightcyan', 'lightyellow', 'lightgreen', 'lightseagreen'];

    function getchangeColor() {
        let changeColor = color[Math.floor(Math.random() * color.length)];
        return changeColor;
    }

    paragraph.addEventListener('click', function () {
        let changeColor = getchangeColor();
        paragraph.style.color = changeColor;
    });



//Objective 5 When a button is clicked it says your name to the span in the div
     
    let btn = document.getElementsByClassName("btn-info")[0];
    console.log(btn)
    btn.addEventListener("click", function(){
        let nameText = document.createTextNode("Stacey");
        let nameSpan = document.createElement("span");
        nameSpan.appendChild(nameText);
        document.getElementById("namediv").appendChild(nameSpan);
    
    //     document.appendChild(btn);
    //     btn.appendChild(btnText); 
    })
    


    //Objective 6 array of friends when a button is clicked (in the HTML) friends become a ul
    let friends = ["Zach Morris", "Kelly Kapowski", "A.C. Slater", "Lisa Turtle", "Jessie Spano", "Screetch", "Mr Belding", "Leanna Creel", "Leah Remini", "Max"];
    let bellbutton = document.getElementById("bell");
    let ul = document.getElementsByTagName("ul")[0];
    console.log(ul)
    bellbutton.addEventListener("click", function () {
        for (let i = 0; i < friends.length; i++) {
            let li = document.createElement("li");
            let liText = document.createTextNode(friends[i]);
            li.appendChild(liText);
            ul.appendChild(li);
        }
    });


