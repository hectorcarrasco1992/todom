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


const myNewDiv = document.createElement('div')
const myImg = document.createElement('img').src = 'https://media.giphy.com/media/z7TEZaSJ6YF8c/source.gif'

document.querySelector('.app').appendChild(myImg)

