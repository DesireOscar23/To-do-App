/****************** DARK AND LIGHT THEME ********** */
var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    /******** CHANGE BG-IMAGE ON SMALL SCREENS *****************/
    if(window.innerWidth <= 375){
        document.body.classList("--secondary-background-image");
    }
    document.body.style.transition = '2s';

    /******** CHANGE SUN/MOON ICON ON CLICK ************/
    if(document.body.classList.contains("dark-theme")){
        icon.innerHTML = '<path fill="#fff" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/>';
       
    }else{
        icon.innerHTML = '<path fill="#fff" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/>';
    }
}

/********** ADD A NEW TO DO ********************* */
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

function add(){
   
    if(inputBox.value == ''){
        window.alert("Please write a task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        li.draggable="true";
        listContainer.appendChild(li);
        
        
        let span = document.createElement('span');
        span.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>';
        li.appendChild(span);

        inputBox.value = '';
        updateItemCount();
        saveData();
    }
}

/****************** SAVE DATA IN LOCAL BROWSER STORAGE ****************** */
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();

/********************** DELETE AN ITEM FROM THE LIST *****************/
var i = 1;
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    e.target.parentElement.remove();
    updateItemCount();
    saveData();
}, false);

function clearCompleted(){
   
        if(listContainer == this.classList.toggle("checked")){
          this.classList.toggle("checked").remove();
            updateItemCount();
            saveData();
        
    };
    }
  
// *********** DRAG AND DROP, AND COUNT ITEMS *****************

const itemCount = document.getElementById('itemCount');

let dragSrcElement = null;

function handleDragStart(e) {
  dragSrcElement = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
  saveData();
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
    saveData();
  }
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
    saveData();
  }
  if (dragSrcElement !== this) {
    dragSrcElement.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
    saveData();
  }
  updateItemCount();
  return false;
}

function handleDragEnd() {
  Array.from(listContainer.children).forEach(function (listItem) {
    listItem.classList.remove('dragging');
  });
  saveData();
}

function updateItemCount() {
  const count = listContainer.children.length;
  itemCount.textContent = `${count} Items left`;
  saveData();
}

function addEventListeners() {
  const listItems = listContainer.querySelectorAll('li');
  listItems.forEach(function (listItem) {
    listItem.addEventListener('dragstart', handleDragStart, false);
    listItem.addEventListener('dragover', handleDragOver, false);
    listItem.addEventListener('drop', handleDrop, false);
    listItem.addEventListener('dragend', handleDragEnd, false);
    saveData();
  });
  updateItemCount();
}

addEventListeners();


function sort(){
const listItemsort = Array.from(listContainer.getElementsByTagName('li'));

listItemsort.sort(function(a, b) {
  return a.textContent.localeCompare(b.textContent);
});

listItemsort.forEach(function(item) {
  listContainer.appendChild(item);
});
saveData();
}
function sortCompleted(){
const listItemsort = Array.from(myList.getElementsByTagName('li'));

listItemsort.sort(function(a, b) {
  const attrA = a.getAttribute('data-value');
  const attrB = b.getAttribute('data-value');
  return attrA.localeCompare(attrB);
});

listItemsort.forEach(function(item) {
  listContainer.appendChild(item);
});

}

