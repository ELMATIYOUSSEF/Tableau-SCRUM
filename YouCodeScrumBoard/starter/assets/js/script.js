//import { tasks } from './data';
var tasks = [
    {
        'title'         :   'Keep all the updated requirements in one place',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'To Do',
        'date'          :   '2022-10-08',
        'description'   :   `There is hardly anything more frustrating than having to look for current requirements in tens of comments under the actual description or having to decide which commenter is actually authorized to change the requirements. The goal here is to keep all the up-to-date requirements and details in the main/primary description of a task. Even though the information in comments may affect initial criteria, just update this primary description accordingly.`,
        'id':'',
    },
    {
        'title'         :   'Consider creating an acceptance criteria list',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'To Do',
        'date'          :   '2022-10-08',
        'description'   :   `Descriptive requirements are very helpful when it comes to understanding the context of a problem, yet finally it is good to precisely specify what is expected. Thus the developer will not have to look for the actual requirements in a long, descriptive text but he will be able to easily get to the essence. One might find that sometimes — when acceptance criteria are well defined — there is little or no need for any additional information. Example:
        a) User navigates to “/accounts” and clicks on red download CSV button
        b) Popup appears with two buttons: “This year” and “Last year”
        c) If user clicked on “Last year” download is initiated
        d) CSV downloaded includes following columns…`,
        'id':'',
    },
    {
        'title'         :   'Provide mockups',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'To Do',
        'date'          :   '2022-10-08',
        'description'   :   `A textual requirements description is essential in most cases, but an image is often worth more than a thousand words. Even a simple mockup can limit misunderstandings by a great factor. There are many apps out there that might be helpful here, like Balsamiq, InVision or Mockingbird, but manipulating screenshots of an existing app also works.`,
        'id':'',
    },
    {
        'title'         :   'Provide examples, credentials, etc',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'To Do',
        'date'          :   '2022-10-08',
        'description'   :   `If the expectation is to process or generate some file — attach an example of such a file. If the goal is to integrate what is being developed with some service, ensure your devs have access to this service and its documentation. This list could go on and on — the bottom line is — if there is something that our developer might make use of, try to foresee it and provide them with (access to) it.`,
        'id':'',
    },
    {
        'title'         :   'Annotate',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'To Do',
        'date'          :   '2022-10-08',
        'description'   :   `The mockup provided can sometimes be confusing for developers. Especially if it contains much more content than the scope of the task described. Drop a couple of arrows, outlines and annotations here and there to emphasize what are the important parts of the mockup from the task requirements perspective.`,
        'id':'',
    },
    {
        'title'         :   'Use charts and diagrams',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'To Do',
        'date'          :   '2022-10-08',
        'description'   :   `While it is not always necessary, sometimes it might be beneficial to prepare a flowchart, a block diagram or some other kind of concept visualization that will render it easy for the developer to comprehend the task and its scope.`,
        'id':'',
    },
    {
        'title'         :   'Spoil your developers with details',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'To Do',
        'date'          :   '2022-10-08',
        'description'   :   `It is always safer to assume less rather than more domain knowledge in the dev team. Therefore following the KISS principle and augmenting each description or acceptance criteria list with contextual/domain knowledge and details that might become relevant is highly recommended.`,
        'id':'',
    },
    {
        'title'         :   'Describe edge cases and provide constraints',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'In Progress',
        'date'          :   '2022-10-08',
        'description'   :   `Hardly any developer likes constraints, but if there are some, let them be communicated early. Do we need to support some specific browsers? Does this script need to run below a specific amount of time? Is it crucial for this endpoint to respond in no more than n milliseconds? If there are some such concerns, make sure they are included in your descriptions. Also describing any edge cases might be beneficial. Maybe we have some query limit on a given service? If you have such knowledge it is always beneficial for your devs to know about it upfront.`,
        'id':'',
    },
    {
        'title'         :   'Provide a copy',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'In Progress',
        'date'          :   '2022-10-08',
        'description'   :   `If there is a long message to be displayed, just provide a copy for it somewhere in the description. Do not place it on mockups as it is always slower and more error-prone to re-type it than to copy-paste it.`,
        'id':'',
    },
    
    {
        'title'         :   'Describe steps to reproduce an issue',
        'type'          :   'Bug',
        'priority'      :   'High',
        'status'        :   'In Progress',
        'date'          :   '2022-10-08',
        'description'   :   `including as many details as possible.`,
        'id':'',
    },
    {
        'title'         :   'Provide access',
        'type'          :   'Bug',
        'priority'      :   'High',
        'status'        :   'In Progress',
        'date'          :   '2022-10-08',
        'description'   :   `to the affected account and services if possible. It might be hard to reproduce the exact environment on a local machine.`,
        'id':'',
    },
    {
        'title'         :   'Provide environment information',
        'type'          :   'Bug',
        'priority'      :   'High',
        'status'        :   'In Progress',
        'date'          :   '2022-10-08',
        'description'   :   `i.e., browser version, operating system version etc. Sometimes a list of installed browser plugins and extensions might be helpful as well.`,
        'id':'',
    },
    {
        'title'         :   'Provide a link to an exception and/or a stack trace',
        'type'          :   'Bug',
        'priority'      :   'High',
        'status'        :   'In Progress',
        'date'          :   '2022-10-08',
        'description'   :   `as investigating those is usually the first step to take in resolving the problem.`,
        'id':'',
    },
    {
        'title'         :   'Provide access to logs',
        'type'          :   'Bug',
        'priority'      :   'High',
        'status'        :   'Done',
        'date'          :   '2022-10-08',
        'description'   :   `as they can be helpful in reproducing the steps that caused the problem in the first place.`,
        'id':'',
    },
    {
        'title'         :   'Provide access to the affected server or database dump',
        'type'          :   'Bug',
        'priority'      :   'High',
        'status'        :   'Done',
        'date'          :   '2022-10-08',
        'description'   :   `If it is possible and when it does not violate security policies, it is usually helpful for the developer to access the original data that might have played a role in the problem.`,
        'id':'',
    },
    {
        'title'         :   'Make a screencast',
        'type'          :   'Bug',
        'priority'      :   'High',
        'status'        :   'Done',
        'date'          :   '2022-10-08',
        'description'   :   `It is not always necessary, but many times a short screencast (or at least a screenshot) says more than a thousand words. While working on MacOS you can use QuickTime Player for the purpose but there are plenty of tools available for other operating systems as well.`,
        'id':'',
    },
    {
        'title'         :   'Provide contact information',
        'type'          :   'Bug',
        'priority'      :   'High',
        'status'        :   'Done',
        'date'          :   '2022-10-08',
        'description'   :   `of the person that reported the bug. This will not always be possible, but in some cases it might be advantageous and most effective if a developer can have a chat with a person that actually experienced the bug, especially if the steps to reproduce a problem are not deterministic.`,
        'id':'',
    },
];
let Priority =document.getElementById("selectProiority");
let Status =document.getElementById("selectStatus");
let save = document.querySelector(".save");
let titre = document.querySelector(".titre");
let typeValue = document.querySelector(".form-check-input:checked");
let titelvalue =document.querySelector("#titel") ;
let date =document.getElementById("date");
let description = document.getElementById("description");
var countasks =0;
let todoTasksBtn = document.getElementById("to-do-tasks");
let progressBtn = document.getElementById("in-progress-tasks");
let doneBtn = document.getElementById("done-tasks");
function clairTable()
{
    document.getElementById("to-do-tasks").innerHTML="";
    document.getElementById("in-progress-tasks").innerHTML ="";
    document.getElementById("done-tasks").innerHTML ="";
}
ReadData();

// ----------------------------------- ReadData from table tasks -----------------------//
function ReadData() {
    clairTable();
    // initialiser task form
    var countasks =0 ,countTodo=0 ,countInporgess =0 , countDone =0 ;
    for(let i = 0; i < tasks.length; i++){
        if(tasks[i].status == "To Do"){
           countTodo++;
            countasks++;
            tasks[i].id =countasks ;
            todoTasksBtn.innerHTML += `
            <button class="w-100 border-bottom border-0 d-flex btntash " id="task${countasks}" onclick="updatedelete(${countasks})">
            <div class="col-1 mt-4">
            <i class="fa fa-id-card" aria-hidden="true"></i>
            </div>
            <div class="col d-flex flex-column justify-content-start align-items-start">
                <div class="fs-5 text-start">${tasks[i].title}</div>
                <div class="m-2">
                    <div class="text-start">#<span id="idTaskTodo">${countasks}</span>  ${tasks[i].date}</div>
                    <div class="text-start" title="${tasks[i].description}">${tasks[i].description.substring(0,50)}</div>
                </div>
                <div class="m-2">
                    <span class="btn-sm btn-primary">${tasks[i].type}</span>
                    <span class="btn-sm btn-secondary">${tasks[i].priority}</span>
                </div>
            </div>
        </button>
       `
    }else if(tasks[i].status == "In Progress"){
        countInporgess++;
        countasks++;
        tasks[i].id =countasks ;
        progressBtn.innerHTML += `
        <button class="w-100 border-bottom border-0 d-flex btntash" id="task${countasks}" onclick="updatedelete(${countasks})">
        <div class="col-1 mt-4">
        <i class="spinner-border spinner-border-sm" aria-hidden="true"></i>
        </div>
        <div class="col d-flex flex-column justify-content-start align-items-start">
            <div class="fs-5 text-start">${tasks[i].title}</div>
            <div class="m-2">
                <div class="text-start">#<span id="idTaskProgress">${countasks}</span>  ${tasks[i].date}</div>
                <div class="text-start" title="${tasks[i].description}">${tasks[i].description.substring(0,50)}</div>
            </div>
            <div class="m-2">
                <span class="btn-sm btn-primary">${tasks[i].type}</span>
                <span class="btn-sm btn-secondary">${tasks[i].priority}</span>
            </div>
        </div>
    </button>
   `
    }else{
        countDone++;
        countasks++;
        tasks[i].id =countasks ;
        doneBtn.innerHTML += `
        <button class="w-100 border-bottom border-0 d-flex btntash " id="task${countasks}" onclick="updatedelete(${countasks})">
        <div class="col-1 mt-4">
            <i class="fa fa-check" aria-hidden="true"></i>
        </div>
        <div class="col d-flex flex-column justify-content-start align-items-start">
            <div class="fs-5 text-start">${tasks[i].title}</div>
            <div class="m-2">
                <div class="text-start">#<span id="idTaskdone">${countasks}</span>  ${tasks[i].date}</div>
                <div class="text-start" title="${tasks[i].description}">${tasks[i].description.substring(0,50)}</div>
            </div>
            <div class="m-2">
                <span class="btn-sm btn-primary">${tasks[i].type}</span>
                <span class="btn-sm btn-secondary">${tasks[i].priority}</span>
            </div>
        </div>
    </button>
   `
    }
    document.getElementById("done-tasks-count").innerText = countDone ;
    document.getElementById("in-progress-tasks-count").innerText = countInporgess ;
    document.getElementById("to-do-tasks-count").innerText = countTodo ;

}  
}
///---------------------------- create task ------------------------------//
function createTask(){
    let btnsaveupdate = document.querySelector(".save").innerText;
    if(btnsaveupdate=='Add'){
    clairTable();
    const newTasks = {
        title:titelvalue.value ,
        type: typeValue.value,
        priority: Priority.value,
        status:  Status.value,
        id:countasks,
        date:date.value ,
        description: description.value,
    }
    if(Status=="To Do"){
      document.getElementById("to-do-tasks-count").innerText+=1;
    }
    else if(Status=="In Progress"){
        document.getElementById("in-progress-tasks-count").innerText+=1;
    }
    else{
        document.getElementById("done-tasks-count").innerText+=1;  
    }
    tasks.push(newTasks);
    console.log(tasks);
    //setTimeout(close,2000 );
    close();
    ReadData();
    Swal.fire({
        position: 'center-center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    }
    if(btnsaveupdate.innerText ='Update')
    {
        var idup = document.querySelector("#idup");
        update(idup.value);
        close();
        ReadData();
    }
}
// ----------------------------- function ClearFrom() ---------------------------//
function ClearFrom(){
    titelvalue.value= '' ;
    document.querySelector("#flexRadioDefault1").checked =true;
    Status.value = '';
    Priority.value = '';
    date.value = '';
    description.value = ''
    save.innerHTML = "Add";
    titre.innerHTML = `Add Task`;
}
//-------------------------- function close -------------------------- //
function close(){
    document.getElementById("btn-close").click(); 
}
//-------------------------- function update && delete --------------------------//
function updatedelete(id){
    Swal.fire({
        title: 'Do you want to update or remove task?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'update',
        denyButtonText: `Delete`,
      }).then((result) => {
        //if confirmed up date
        if (result.isConfirmed) {
          $("#exampleModal").modal('show')
          Remplaireform(id);
        } else if (result.isDenied) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't To delete it !",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                //if confirmed delete
                if (result.isConfirmed) {
                    deleteT(id);
                    ReadData();
                }
              })
        }
      })
}
// ------------------------ function search by id -----------------------------------
function search(id){
    for(let i =0 ; i<tasks.length;i++)
    {
     if(id == tasks[i].id){
        var objtask ={
         title:tasks[i].title,
        type:tasks[i].type,
        id:tasks[i].id,
        priority: tasks[i].priority,
        status:tasks[i].status,
        date:tasks[i].date,
        description:tasks[i].description,
        }
     }   
    }
    return objtask;
}

//------------------------------- function RemplaireForm -------------------------------------
 function Remplaireform(id){
   let obj = search(id);
   titelvalue.value= obj.title ;
   checkType(obj.type);
   Status.value = obj.status;
   Priority.value = obj.priority;
   console.log(obj.priority);
   date.value = obj.date;
   description.value = obj.description
   save.innerHTML = "Update";
   titre.innerHTML = `Update id :<div> <input type="text" id="idup" value= "${obj.id}"></div>`;

 }
 //--------------------------------------function update ---------------------------------//
function update(id)
{
    let pbj =search(id);
    pbj.title = titelvalue.value ;
    pbj.type=typeValue.value;
    pbj.priority = Priority.value;
    pbj.status =Status.value;
    pbj.date = date.value;
    pbj.description= description.value;
    tasks[id-1]=pbj;
}

 //-------------------------------- function delete -----------------------------------
 function deleteT(id){
    tasks.splice(id-1,1);
 }
 //---------------------------------- function checktype of radio button for function up date ------------------------
 function checkType(typeV)
 {
    if(typeV =="Bug"){
        document.querySelector("#flexRadioDefault2").checked =true;
    }
    else{
        document.querySelector("#flexRadioDefault1").checked = true;
    }
 }
 