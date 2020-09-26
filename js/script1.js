
//variable for left side bar
var rightMenuButton = document.getElementById("rightcirclebutton"),
    rightNav = document.querySelector(".right-nav");

//left side bar animation => change left value to open and close
rightMenuButton.addEventListener('click', function () {
    if (rightNav.style.right == "-120%") {
        rightNav.style.right = " -50%";
    } else {
        rightNav.style.right = "-120%";
    }
});
