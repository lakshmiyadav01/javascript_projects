const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
const btn = document.getElementById("btn");

btn.addEventListener("click", addTask);

function addTask() {
    if (inputbox.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.textContent = inputbox.value.trim();

    const span = document.createElement("span");
    span.textContent = "X";
    li.appendChild(span);

    listcontainer.appendChild(li);
    inputbox.value = "";

    gsap.from(li, { 
        opacity: 0, 
        x: -20, 
        duration: 0.5, 
        ease: "power1.out" });

    saveData();
}

listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        let li = e.target.parentElement;
        gsap.to(li, {
            opacity: 0,
            y: -10,
            duration: 0.5,
            ease: "power1.in",
            onComplete: () => {
                li.remove();
                saveData();
            }
        });
        return; 
    }
    saveData();
});

function saveData() {
    const tasks = [];
    document.querySelectorAll("#list-container li").forEach(li => {
        tasks.push({ text: li.firstChild.textContent, checked: li.classList.contains("checked") });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function showData() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.text;
        if (task.checked) li.classList.add("checked");

        const span = document.createElement("span");
        span.textContent = "X";
        li.appendChild(span);
        listcontainer.appendChild(li);
    });
}

showData();


gsap.from(".todo-app h2" , {
    duration: 1,
    delay: 1,
    y:30,
    opacity:0
});
gsap.from(".todo-app " , {
    duration: 1,
    delay: 0.5,
    rotate:25,
    opacity:0
});

