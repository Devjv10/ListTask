let button= document.querySelector('.button-addtask')
let input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks ')

let minhaListaDeItens = []

function addTask(){
    minhaListaDeItens.push( {
        tarefa: input.value,
        concluida:false
    })
    input.value = ''

    mostrarTarefas()
}


function mostrarTarefas(){

    let novaLi =''

    minhaListaDeItens.forEach(( item, posicao) => {

        novaLi = novaLi + `  

         <li class="task ${item.concluida && "done"}">
            
          <img  src="checked.png" alt="check" onclick ="concluirTarefa(${posicao})">
          <p>${item.tarefa}</p>
          <img src="trash.png" alt="lixo"  onclick ="deletarItem(${posicao})">

        </li>`
    })
listaCompleta.innerHTML = novaLi



   localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}
function concluirTarefa(posicao){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida 
    mostrarTarefas()

}

function deletarItem(posicao){
    minhaListaDeItens.splice(posicao, 1)
   mostrarTarefas()
}

function recarregarTela(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    if(tarefasDoLocalStorage){
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }
    mostrarTarefas()
}
recarregarTela()

button.addEventListener('click', addTask)