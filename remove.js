// let listItem = document.querySelector('.todo-list').value
document.querySelector('.remove-todo').addEventListener('click', function(){
    let num = document.querySelector('.index-input').value
   console.log(num)
 const list = document.querySelector('.todo-list')
 console.log(list)
   
        list.removeChild(list.childNodes[num])


    
    
})