var enteredtask=document.getElementById('entertask');
var submit=document.getElementById('submit');
var tasklist=document.querySelector('.tasklist');
submit.addEventListener('click',function(event){
    event.preventDefault();
    var taskname=enteredtask.value;
    if(!taskname){
        alert('please enter a task');
        return;
    }    
    var task=document.createElement('div');
    task.setAttribute('class','task');  
    task.innerHTML=`<input id="yourtask" type='text'value=${taskname} readonly>
    <button id="edit" onclick='edittask(event)'>Edit</button>
    <button id="delete" onclick='deletetask(event)'>Delete</button>`;     
    tasklist.append(task);    
    enteredtask.value="";        
    
    
})

function deletetask(event){
    event.target.parentElement.remove();
} 


function edittask(event){  
    var button=event.target.parentElement;
    var yourtask=button.querySelector('#yourtask');  
    if(event.target.innerHTML.toLowerCase()=='edit'){
        event.target.innerHTML='Save';
        yourtask.removeAttribute('readonly');
        yourtask.focus();

    }else{
        event.target.innerHTML='Edit';
        yourtask.setAttribute('readonly','readonly');

    }

}



