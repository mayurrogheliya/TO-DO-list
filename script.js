const inpbox = document.getElementById("inp-box");
const listcontainer = document.getElementById("list_container");

const addTask = () => {
    if (inpbox.value === "") {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inpbox.value;
        listcontainer.appendChild(li)

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inpbox.value = "";
    save();
}

listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        save();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        save();
    }
}, false)

// local storage
const save = () => {
    localStorage.setItem("data", listcontainer.innerHTML);
}

const show = () => {
    listcontainer.innerHTML = localStorage.getItem("data");
}

show();