// State important DOMs as variable
/*
==================================================
**Part 1**
// Each DOM 2 marks, one typo reduce 0.5 marks.
==================================================
*/
var pressButton = document.getElementById("pressButton");
var clickNumber = document.getElementById("clickNumber");
var timeLeft = document.getElementById("timeLeft");
var quoteText = document.getElementById("quoteText")

// State the important variables
/*
==================================================
**Part 1**
// Each variable 1.5 marks, one typo reduce 0.5 marks.
==================================================
*/
var click = 0;
var isGame = 0;
var timeRemain = 30;
var counter;

// Click event on Press button
/*
==================================================
**Part 1**
// Correct combination of DOM and Event (including anonymous function) 4 marks;
// increase click (1 mark), display text content (1 mark)
**Part 2**
// if condition from isGame = 0 to isGame = 1 (3 marks)
// display time (1 mark), call count function (1 mark)
==================================================
*/
pressButton.onclick = function() {
    if (isGame === 0) {
        isGame = 1;
        timeLeft.textContent = timeRemain;
        count();
    }
    click++;
    clickNumber.textContent = click;
}

//Count function
/*
==================================================
**Part 2**
// copy the same as Typing Master (5 marks)
// change myTime to counter (1 marks), change to timeRemain (3 marks, each 1 mark), change to timeLeft (1 marks)
==================================================
*/
function count() {
    counter = setInterval(function () {
        timeRemain--;
        timeLeft.textContent = timeRemain;
        if (timeRemain <= 0) {
            stopGame();
        }
    }, 1000)
}

//Stop game function
/*
==================================================
**Part 2**
// stopGame function with keyword, name, (), {}. 2 marks
// Each goal 2 marks. In each goal typo deduct 1 marks. (total 10)
==================================================
*/
function stopGame () {
    clearInterval(counter);
    pressButton.onclick = null;
    clickNumber.style.color = "red";
    generateQuote();
}

//Generate quote function
/*
==================================================
**Part 2**
// generateQuote function with keyword, name, (), {}. 2 marks
// var Quotes in array (2 marks)
// Each quote as string (1 mark, total 6)
// var selectedNumber (1 mark), click%6 (2 marks)
// DOM (1 mark), Quotes[selectedNumber] (1 marks)
==================================================
*/
function generateQuote (){
    var Quotes = ["The struggle you’re in today is developing the strength you need tomorrow.", "Wherever you go, no matter what the weather, always bring your own sunshine.", "No one is perfect - that’s why pencils have erasers.", "You’re braver than you believe, and stronger than you seem, and smarter than you think.", "Once you replace negative thoughts with positive ones, you’ll start having positive results.", "It’s not whether you get knocked down, it’s whether you get up."] 
    var selectedNumber = click%6;
    quoteText.textContent = Quotes[selectedNumber];
}