var input = document.querySelector("#inputText")
var add = document.querySelector(".add")
var list = document.querySelector(".task-list")


// after reloading the window the first job is to display the localStorage data saved
var showTask = localStorage.getItem('task');
list.innerHTML = showTask

// function to save tasks in the browser's localstorage
function setInLocalStorage() {
    localStorage.setItem("task", list.innerHTML)
}


add.addEventListener("click", function() {
    if (input.value == '') {
        alert("empty task is not valid")
    }
    else {
        var li = document.createElement("li")
        li.innerHTML = ` ` + input.value  + `<i class="ri-close-line cut" > </i>`
        list.appendChild(li)
        setInLocalStorage();
    }
    input.value = ''
})

list.addEventListener("click", function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle("strike")
    }
    else if(event.target.tagName === 'I'){
        event.target.parentElement.remove();
    }
    setInLocalStorage()
})

