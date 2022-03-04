let descTarefa = document.querySelector("#desc");
let dateTarefa = document.querySelector("#date");
let btnAdiciona = document.querySelector(".btnAdd")


btnAdiciona.addEventListener("click", function(e){
    e.preventDefault();
    // validaInput()
    let form = document.querySelector("#form-lista")
    let tarefa = obtemTarefa(form)
    tarefaNaTabela(tarefa);

})

function validaInput(){
    let valorInput = descTarefa.value
    let dataInput = new Date(dateTarefa.value)
    let valorDate = dataInput.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
    
    if(valorInput.length > 0 && dataInput != "Invalid Date"){
        console.log(valorInput);
        console.log(valorDate);
    }else {
        console.log("campos vazios");
    }
}

function obtemTarefa(form){

    let tarefa = {
        tarefa: form.desc.value,
        data: form.data.value
    }
    return tarefa;

}
function montaTr(tarefa){
    let tarefaTr = document.createElement("tr")
    tarefaTr.classList.add("tarefa")

    let inputTr = document.createElement("input")
    inputTr.setAttribute("type", "checkbox")
    inputTr.classList.add("form-check-input")
    
    
    let checkTd = montaTd(tarefa.check, "info-check")
    let tarefaTd = montaTd(tarefa.tarefa, "info-desc")
    let dataTd = montaTd(tarefa.data, "info-data")

    checkTd.appendChild(inputTr)

    tarefaTr.appendChild(checkTd)
    tarefaTr.appendChild(dataTd)
    tarefaTr.appendChild(tarefaTd)

    return tarefaTr
}

function montaTd(dado, classe){
    let td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function tarefaNaTabela(tarefa){
    let tarefaTr =  montaTr(tarefa)
    let tabela = document.querySelector("#tabela-todo")
    tabela.appendChild(tarefaTr)
}

