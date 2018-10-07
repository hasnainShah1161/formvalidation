complete Project 1:


const form=document.getElementById('task-form');
const task=document.getElementById('task');
const ul=document.querySelector('.collection');

 //Add Task

form.addEventListener('submit',fun);

function fun(e){
 if(task.value===''){

  alert('no task');
 }
 const li=document.createElement('li');
 li.className='collection-item';
 li.appendChild(document.createTextNode(task.value));
 const link =document.createElement('a');
 link.className='delete-item secondary-content';
 link.innerHTML='<i class="fa fa-remove"></i>';
 li.appendChild(link);
 ul.appendChild(li);
 AddDataToLocalStorage(task.value);
 task.value='';
  e.preventDefault();
}


//Adding data to local storage
function AddDataToLocalStorage(task){

let tasks;
if (localStorage.getItem('tasks')===null){

  tasks=[];

  }  else 
    {
       tasks=JSON.parse(localStorage.getItem('tasks'));


    } 
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));

    

}


//Remove Task
 
ul.addEventListener('click',removetsk);

function removetsk(e){
console.log(e.target);
if (e.target.parentElement.classList.contains('delete-item')){

  e.target.parentElement.parentElement.remove();

  removeFromLocalStorage(  e.target.parentElement.parentElement);
}
}


//Clear Task
const clr=document.querySelector('.clear-tasks');

clr.addEventListener('click',clrc);
function clrc(e){
  //ul.innerHTML='';
while(ul.firstChild){

  ul.removeChild(ul.firstChild);
}
// clearing All tasks in once fro local storage:

ClearTasksFromLocalStorage()

  localStorage.clear();

  e.preventDefault();


}
 // filter tasks

 const filtr=document.querySelector('#filter');
 filtr.addEventListener('keyup',funi);

 function funi(e){
       const filVAl=e.target.value.toLowerCase();
        

       const lis=document.querySelectorAll('.collection-item');
       lis.forEach(function(tsk){
       const liss=tsk.textContent;
       if(liss.toLowerCase().indexOf(filVAl) !=-1){
        
             tsk.style.display='block';
       }
else{

  tsk.style.display='none';
}

       })

  e.preventDefault();
 }

 //getting data from local storage to DOM

 document.addEventListener('DOMContentLoaded',getData);


 function getData(){

  let tasks;
  if (localStorage.getItem('tasks')===null){

    tasks = [];


  }  else
            {

              tasks=JSON.parse(localStorage.getItem('tasks'));
            }

      
      tasks.forEach(function(task){

      const li=document.createElement('li');
      li.className='collection-item';
      li.appendChild(document.createTextNode(task));
      const link=document.createElement('a');

      link.className='delete-item secondary-content';
      link.innerHTML='<i class="fa fa-remove"></i>';
      li.appendChild(link);
      ul.appendChild(li);

      
      })


    }//removing data from local storage
 function removeFromLocalStorage(task){
   
   let tasks;
    
    if(localStorage.getItem('tasks')===null)
    {

      tasks=[];

    } else
       {
          tasks=JSON.parse(localStorage.getItem('tasks'));


      
       }
       tasks.forEach(function(tsk,index){

     if (task.textContent===tsk){
        tasks.splice(index,1);


     }

       })
localStorage.setItem('tasks',JSON.stringify(tasks));

 }


