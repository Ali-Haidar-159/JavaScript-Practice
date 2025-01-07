
console.clear() ;

// Select all the element 
var taskField = document.querySelector("#taskField") ;
var addBtn = document.querySelector("#addBtn") ;
var memoryDiv = document.querySelector("#memoryDiv") ;

addBtn.addEventListener("click",function(){
    var component = document.createElement("div") ;
    var taskDiv = document.createElement("div") ;
    var btnsDiv = document.createElement("div") ;


    taskDiv.innerHTML = taskField.value ;
    taskDiv.style.width = "90%" ;

    var editBtn = document.createElement("button") ;
    var deleteBtn = document.createElement("button") ;

    editBtn.innerText = "Edit" ;
    editBtn.classList.add("btn","btn-warning","m-1") ;
    deleteBtn.innerText = "Delete" ;
    deleteBtn.classList.add("btn","btn-danger","m-1","my-delete") ;

    btnsDiv.classList.add("d-flex") ;
    btnsDiv.appendChild(editBtn) ;
    btnsDiv.appendChild(deleteBtn) ;

    component.classList.add("d-flex","py-1","px-2" , "border","m-2","my-component") ;
    component.appendChild(taskDiv) ;
    component.appendChild(btnsDiv) ;

    memoryDiv.appendChild(component) ;

    taskField.value = "" ;

    var allDeleteBtn = document.getElementsByClassName("my-delete") ;
    var allDeleteBtnArray = Array.from(allDeleteBtn) ;

    var myComponent = document.querySelectorAll(".my-component") ;

    allDeleteBtnArray.forEach(function (btn) {
        btn.addEventListener("click", function () {
            // Find the parent '.my-component' and remove it from 'memoryDiv'
            var taskContainer = btn.closest('.my-component');

            if (taskContainer)
            {
                // Ensure the taskContainer is still in memoryDiv before removing it
                if (memoryDiv.contains(taskContainer))
                {
                    memoryDiv.removeChild(taskContainer);
                } 
            } 
            else 
            {
                console.error("Task container not found.");
            }
        });
    });    

}) ;


