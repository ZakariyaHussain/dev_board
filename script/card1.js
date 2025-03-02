
let assignedNumber = getInputText("assigned-number");
let completedTask = getInputText("completed-task");
const div = document.getElementById("activity-history");
const p = document.createElement("p");

let today = new Date().toLocaleTimeString();

// card 1
document.getElementById("fixIssue-btn").addEventListener("click", function(event){
    
    document.getElementById("assigned-number").innerText = assignedNumber - 1;
    document.getElementById("completed-task").innerText = completedTask + 1;
    document.getElementById("fixIssue-btn").disabled = true;
    const cardTitle = document.getElementById("card1-title");
    p.innerText = `
        You have complete the task ${cardTitle.innerText} at ${today};
    `
    div.appendChild(p);

    document.getElementById("activity-history").style.display = "block";
    alert("Bord updated succesfully");
})

