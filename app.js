var inputText = document.getElementById("input")
var subbtn = document.getElementById("button")

//to do list
var todolist = document.getElementById("todolist")

//array to store todolist,initially empty
var todoArr = []
//when add button is clicked 
subbtn.addEventListener("click", addItemToArray)
//when in put is in focus and the enter button is clicked then we get the items into array add button is clicked 
inputText.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        addItemToArray()
    }
})


function addItemToArray() {
    if (inputText.value != "") {
        todoArr.push(inputText.value)

    }
    inputText.value = ""
    display()
}

function display() {
    //clears the prevois list and if we click again their is no repeatation
    todolist.innerHTML=""
    todoArr.map((curr, i) => {
        var listItem = ` <li id="item">
        <div>${curr}</div>
        <div>
        <span onclick="deleteItem(${i})">&times;</span>
        <span>|</span>
        <span onclick="editItem(${i})">Edit</span>
        </div>
        
      </li>`

        todolist.innerHTML += listItem
    })

}

function deleteItem(index){

  todoArr.splice(index,1);
  display();
}

function editItem(index){
  var newValue = prompt("Pls Edit")

  todoArr.splice(index,1,newValue)
  display()
}


document.getElementById("reset").addEventListener
("click",()=>{
  todoArr=[]
  display()
})