let inputTask = document.querySelector('.input__todo')
let btnAdd = document.querySelector('.btn__add')
let inputValidation = document.querySelector('.input__check')
let taskItem = document.querySelector('.task')
let listItem = document.querySelector('.list__item')

btnAdd.addEventListener('click', function () {
    if (inputTask.value.length > 0) {
        createItem(inputTask.value)
        inputTask.value = ""
    } else {
        console.log("Ta moscando brow");
    }
})
function validaCheck() {
    if (inputValidation.checked) {
        console.log("true");
        taskItem.classList.add("task__item")
        listItem.classList.add("opacity-80")

    } else {
        console.log("false");
    }
}

function createItem(task) {
    let taskList = document.querySelector('.list__todo')
    let li = document.createElement(`li`)
    li.classList.add('list__item')

    let input = document.createElement('input')
    input.classList.add('input__check')
    input.setAttribute('type', 'checkbox')
    // input.setAttribute('checked', "")

    let p = document.createElement('p')
    p.textContent = task

    li.appendChild(input)
    li.appendChild(p)
    taskList.prepend(li)
}