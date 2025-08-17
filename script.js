let screen = "";

document.getElementById("zero").addEventListener("click", function() {
    screen += "0";
    document.getElementById("screen").textContent = screen;
});
document.getElementById("clear").addEventListener("click", function() {
    screen = "";
    document.getElementById("screen").textContent = screen;
});
document.getElementById("one").addEventListener("click", function() {
    screen += "1";
    document.getElementById("screen").textContent = screen;
});
document.getElementById("two").addEventListener("click", function() {
    screen += "2";
    document.getElementById("screen").textContent = screen;
});
document.getElementById("three").addEventListener("click", function() {
    screen += "3";
    document.getElementById("screen").textContent = screen;
});
document.getElementById("four").addEventListener("click", function() {
    screen += "4";
    document.getElementById("screen").textContent = screen;
});
document.getElementById("five").addEventListener("click", function() {
    screen += "5";
    document.getElementById("screen").textContent = screen;
});
document.getElementById("six").addEventListener("click", function() {
    screen += "6";
    document.getElementById("screen").textContent = screen;
});
document.getElementById("seven").addEventListener("click", function() {
    screen += "7";
    document.getElementById("screen").textContent = screen;
});
document.getElementById("eight").addEventListener("click", function() {
    screen += "8";
    document.getElementById("screen").textContent = screen;
});
document.getElementById("nine").addEventListener("click", function() {
    screen += "9";
    document.getElementById("screen").textContent = screen;
});
document.getElementById("divide").addEventListener("click", function() {
    screen += "/";
    document.getElementById("screen").textContent = screen;
});
document.getElementById("multiply").addEventListener("click", function() {
    screen += "*";
    document.getElementById("screen").textContent = screen;
});
document.getElementById("subtract").addEventListener("click", function() {
    screen += "-";
    document.getElementById("screen").textContent = screen;
});
document.getElementById("add").addEventListener("click", function() {
    screen += "+";
    document.getElementById("screen").textContent = screen;
});
document.getElementById("percent").addEventListener("click", function() {
    screen = screen/100;;
    document.getElementById("screen").textContent = screen;
});
document.getElementById("point").addEventListener("click", function() {
    if (screen === "") {
        screen = "0.";
    } else if (!screen.includes(".")) {
        screen += ".";
    }
    document.getElementById("screen").textContent = screen;
});
document.getElementById("negative").addEventListener("click", function() {
    if (screen.startsWith("-")) {
        screen = screen.substring(1);
    } else {
        screen = "-" + screen;
    }
    document.getElementById("screen").textContent = screen;
});
document.getElementById("equals").addEventListener("click", function() {
    screen = eval(screen);
    document.getElementById("screen").textContent = screen;
});