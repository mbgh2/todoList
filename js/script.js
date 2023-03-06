let todoInput = document.querySelector('.todo-input');
let todoContent = document.querySelector('.todo-content');




document.querySelector('.todo-add').onclick = function() {
   if (todoInput.value != '') {
      let newLi = document.createElement('li');

      newLi.textContent = todoInput.value;
      newLi.classList.add('bg');
      
      todoContent.appendChild(newLi);
      todoInput.value = '';
      newLi.ondblclick = function removeItem(elem) {
         this.remove();
      }
   }
   else {
      alert('Строка не должна быть пустой');
   }
};

function createNewNote(note) {
   let newLi = document.createElement('li');
   let newSpan = document.createElement('span');
   newLi.textContent = note;
   todoContent.appendChild(newLi);
   newLi.appendChild(newSpan);

}

createNewNote('rrrrr');











