/**
 * métodos de recuperação de e elementos HTML
 */

/*recupera elementos HTML a partir do nome da tag
const todoForm = document.getElementsByTagName('form')*/

const todoForm = document.getElementById("todo-form")
const todos = []

//addEventListener server para ouvir eventos de elementos
todoForm.addEventListener(`submit`, function (event) {
    event.preventDefault()//para o comportamento padrão do evento
    event.stopPropagation()//
    const todoInput = document.querySelector(`#todo`)
    todos.push(todoInput.value)
    todoInput.value = ''
   renderizarTodos()
   
})
function renderizarTodos(){
   let todoListSection=document.querySelector(`#todos-list`)
   todoListSection.innerHTML = ''
    for(let tarefa  of todos){
        let divCard=document.createElement('div')
        divCard.classList.add('card','bg-warning')

        let divCardBody=document.createElement(`div`)
        divCardBody.classList.add(`card-body`,`d-flex`,`align-items-center`)
        let ptodoTexto=document.createElement(`p`)
        ptodoTexto.classList.add(`todo-text`,`flex-grow-1`,`flex-truncate`)
        ptodoTexto.innerText=tarefa
        let btnDelete=document.createElement('button')
        btnDelete.classList.add('btn','delete-todo')
        btnDelete.addEventListener('click', () => {
            /**
             * descobrir o índice do elemento dentro do array
             */
            /**
             * indexOf informa em qual índice se encontra um determinado valor dentro
             * do seu array
             * se ele não achar o valor dentro do array, ele retorna -1
             */
            const index = todos.indexOf(tarefa)
            /**
             * splice serve para excluir um determinado valor do seu array a partir do seu índice
             */
            todos.splice(index, 1)
            renderizarTodos()
          })
          let spanIcon = document.createElement('span')
          spanIcon.classList.add('material-symbols-outlined')
          spanIcon.innerText = 'delete'
      
          /**
           * appendChild serve para colocar um novo elemento HTML dentro de outro
           */
          btnDelete.appendChild(spanIcon)
          /** 
           * append serve para colocar um ou mais elementos HTML dentro de outro
          */
          divCardBody.append(ptodoTexto, btnDelete)
          divCard.appendChild(divCardBody)
          todoListSection.appendChild(divCard)
        }
      }
