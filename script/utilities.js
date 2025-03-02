
function getInputText(id){
    let text = document.getElementById(id).innerText;
    let value = parseInt(text);
    return value;
}
// current date in html file
let todayDate = new Date().toDateString("Fri Feb 28 2025 10:55:20 pm");
        document.getElementById("date").innerHTML = todayDate;

// discover new page

document.getElementById("discover").addEventListener("click", function(event){
    window.location.href = "./discover.html";
})


// background color change
document.getElementById("bgColor").addEventListener("click", function(event){
    
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    let randomcolor = "rgb(" + R + "," + G + "," + B + ")"; 
    document.getElementById("body").style.backgroundColor = (randomcolor);
    
})