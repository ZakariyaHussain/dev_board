document.getElementById("fixIssue-btn").addEventListener("click", function(event){
    
    let assignedNumber = getInputText("assigned-number");
    document.getElementById("assigned-number").innerText = assignedNumber - 1;
    let completedTask = getInputText("completed-task");
    document.getElementById("completed-task").innerText = completedTask + 1;
    document.getElementById("fixIssue-btn").disabled = true;
    const div = document.getElementById("activity-history");
    const p = document.createElement("p");
    const cardTitle = document.getElementById("card1-title");
    let today = new Date();
    
    p.innerText = `
        You have complete the task ${cardTitle.innerText} at ${today};
    `
    div.appendChild(p);

    document.getElementById("activity-history").style.display = "block";
    alert("Bord updated succesfully");
})