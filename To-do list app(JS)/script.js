const inputBox = document.getElementById('input-box')
const listContainer = document.querySelector('.list-container')



function addtask(){
    if(inputBox.value === ""){
        alert('Write Your Task')
    }
    else{
        let newTask = document.createElement('li');
        newTask.innerHTML = inputBox.value
        listContainer.appendChild(newTask);
        


        const removeItem = document.createElement('span');
        removeItem.innerHTML = "<i class='bx bx-x' ></i>";
        newTask.appendChild(removeItem);


    }
    inputBox.value='';
    savadata();

}


listContainer.addEventListener('click', function(e){
        if(e.target.tagName === 'LI'){
            e.target.classList.toggle("checked");
            savadata();
        }
        else if(e.target.tagName === 'I'){
           e.target.parentNode.parentNode.remove();
           savadata();
        }

},false);

function savadata(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();