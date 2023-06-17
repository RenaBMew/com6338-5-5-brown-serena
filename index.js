// add-todo, todo-list, input

var form = document.getElementById('add-todo')
var input = document.querySelector('input')
var todoList = document.getElementById('todo-list')

// Typed word generates below form box - Submit Form Event

form.onsubmit = function(e) {
    e.preventDefault()
    var inputList = document.querySelector('input').value
    // SIDENOTE: var data = this(or e.target).NAMEATTRITBUTE.value
    // No input w/o value/space
    if(inputList == "" || inputList.trim().length === 0){
        form.reset()
        return
    } else {
        // Item added needs to be <button> el nested in <li>
        var li = document.createElement('li')
        var btn = document.createElement('button')
        btn.textContent = inputList
        todoList.appendChild(li)
        li.appendChild(btn)
        // Added items need strike-through on click, removal on second click
        btn.addEventListener('click',function handleClick(e){
            if(this.style.textDecoration == 'line-through'){
                this.parentNode.remove()
            } else {
                this.style.textDecoration = 'line-through'
            }
        })
            // Input empty on page load
            input.value = "";
    }
}

