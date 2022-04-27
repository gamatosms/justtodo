let input = document.querySelector('.input__todo')
let btn = document.querySelector('.btn__add')
let title = document.querySelector('.title__test')
let message = document.querySelector('.input__warning')
let section = document.querySelector('.todo__conteudo')

btn.addEventListener("click", function (e) {
    e.preventDefault()

    if (input.value.length <= 0) {
        message.textContent = 'Adicione alguma tarefa antes de salvar'
        console.log(message.textContent);
    } else {
        message.textContent = ''
        divCreate()
    }

})

const divCreate = () => {

    section.appendChild(document.createElement("div"))
    const div = section.getElementsByTagName('div')
    div.classList.add('.todo__item')

    // createDiv.classList.add("todo__item")
    // let div = document.querySelector('.todo__item')
    // console.log(section);


    // let inputElement = document.createElement("input")
    // let p = document.createElement("p")
    // div.appendChild(inputElement)
    // div.appendChild(p)
    // inputElement.setAttribute("type", "checkbox")
    // p.textContent = input.value
}

const montaDiv = () => {
    let inputElement = document.createElement("input")
    let p = document.createElement("p")
    div.appendChild(inputElement)
    div.appendChild(p)

    inputElement.setAttribute("type", "checkbox")
    p.textContent = input.value
}