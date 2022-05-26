let inputTask = document.querySelector('.input__todo')
let btnAdd = document.querySelector('.btn__add')
let listTodo = document.querySelector('.list__todo')
let warning = document.querySelector('.input__warning')

btnAdd.addEventListener('click', function () {
    if (inputTask.value.length > 0) {
        createItem(inputTask.value)
        inputTask.value = ""
        warning.classList.add('hidden')
    } else {
        warning.classList.remove('hidden')
    }
})

listTodo.addEventListener("click", function (e) {
    if (e.target.checked) {
        e.target.parentNode.classList.add("task__item")
    } else {
        e.target.parentNode.classList.remove("task__item")
    }
})

function createItem(task) {
    let taskList = document.querySelector('.list__todo')
    let li = document.createElement(`li`)
    li.classList.add('list__item')

    let input = document.createElement('input')
    input.classList.add('input__check')
    input.setAttribute('type', 'checkbox')

    let p = document.createElement('p')
    p.classList.add('task')
    p.textContent = task

    li.appendChild(input)
    li.appendChild(p)
    taskList.prepend(li)
}