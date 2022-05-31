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
    if (e.target.textContent == 'x') {
        // console.log("deletado");
        setInterval(() => {
            e.target.parentNode.remove();
        }, 150)
    }
    else if (e.target.checked) {
        // console.log("e.target"); quem disparou o evento
        // console.log(e.target);
        // console.log("e.target.parentNode"); o elemento pai de quem disparou o evento
        // console.log(e.target.parentNode);
        // console.log("this"); o elemento onde o elemento que foi disparado está construido
        // console.log(this);
        e.target.parentNode.classList.add("task__item")
    } else {
        e.target.parentNode.classList.remove("task__item")
    }
})

function createItem(task) {
    let taskList = document.querySelector('.list__todo')
    let li = document.createElement(`li`)
    li.classList.add('list__item')

    //create checkbox
    let input = document.createElement('input')
    input.classList.add('input__check')
    input.setAttribute('type', 'checkbox')

    //create text
    let p = document.createElement('p')
    p.classList.add('task')
    p.setAttribute('contenteditable', '')
    p.classList.add('p-2')
    p.classList.add('w-5/6')
    p.textContent = task

    //create delete button
    let btn = document.createElement('button')
    btn.classList.add('btn__delete')
    btn.textContent = 'x'

    li.appendChild(input)
    li.appendChild(p)
    li.appendChild(btn)
    taskList.prepend(li)
}