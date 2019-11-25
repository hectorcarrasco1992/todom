// const clearList = function() {
//     let current = document.querySelector('.todo-input').value
//     while(current !== null) {
//       current.remove();
//       current = document.querySelector('.todo-input').value
//     }
//   }


document.querySelector('.add-todo').addEventListener('click', function(){
    
    const newList = document.createElement('li')
    newList.innerText = document.querySelector('.todo-input').value
    document.querySelector('.todo-list').appendChild(newList)
    
    // clearList()
    
    
    
    
    
    
})