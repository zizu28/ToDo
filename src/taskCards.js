import dbase from './localStorage';

let todos;

const taskAddBtn = document.querySelector('.taskAdder');
const taskInfo = document.querySelector('.taskInfo');
const mainContainer = document.querySelector('.content');
const projectTitle = document.querySelector('.projectTitle');
const dialog = document.querySelector('#taskDialog');


mainContainer.style = 'display: grid; grid-template: 100px 100px 100px 1fr / 1fr;';
taskInfo.style = 'margin-bottom: 10px;';
taskAddBtn.style = 'width: 200px; height: 60px';
const cardsContainer = document.createElement('div');
cardsContainer.style = 'display: flex; flex: 1 1 0; flex-wrap: wrap; gap: 10px;';
mainContainer.appendChild(cardsContainer);

function showTaskCards(){
    taskAddBtn.addEventListener('click', () => {
        taskInfo.style.display = 'none'; 
        mainContainer.style = 'display: grid; grid-template: 100px 100px 1fr / 1fr;';
        dialog.showModal();
        createTask();
        if(cardsContainer.childNodes.length === 0){
            taskInfo.style.display = 'block';
        }
    })
}


function createTask(){
    const card = document.createElement('div');
    const isDone = document.createElement('input');
    const title = document.createElement('p');
    const date = document.createElement('p');
    const description = document.createElement('textarea');
    const deleteBtn = document.createElement('button');
    const editBtn = document.createElement('button');
    const btnDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const titleLabel = document.createElement('label');
    const dateDiv = document.createElement('div');
    const dateLabel = document.createElement('label');
    const success = document.createElement('p');
    const isDoneLabel = document.createElement('label');
    const isDoneDiv = document.createElement('div');
    const priorityText = document.createElement('p');
    const priorityLabel = document.createElement('label');
    const priorityDiv = document.createElement('div');

    description.name = 'taskDescription';
    description.disabled = true;
    isDone.type = 'checkbox';
    isDone.name = 'isTaskComplete';
    isDone.classList.add('checkbox');
    isDoneLabel.textContent = 'Is Task Complete? ';
    isDoneLabel.appendChild(isDone);
    isDoneDiv.appendChild(isDoneLabel);
    isDoneDiv.style = 'display: flex; justify-content: flex-start; align-items: center; font-family: "Times New Roman";'+ 
    'font-size: 25px; font-weight: bold;';
    editBtn.textContent = 'edit';
    editBtn.classList.add('taskAdder');
    deleteBtn.classList.add('taskAdder');
    deleteBtn.textContent = 'delete'
    btnDiv.appendChild(editBtn);
    btnDiv.appendChild(deleteBtn);
    btnDiv.style = 'display: flex; justify-content: space-between; align-items: center;'
    card.style = 'width: 300px; height: 450px; display: grid; grid-template: 50px 50px 50px 50px 150px 100px / 1fr; border-radius: 10px;'+ 
    'box-shadow: 3px 3px 6px black; margin-left: 10px; background-color: gray; color: black;';

    const dialog = document.querySelector('#taskDialog');
    const taskForm = document.querySelector('#taskForm');
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        title.textContent = document.querySelector('#title').value;
        dbase.task.title = document.querySelector('#title').value;
        date.textContent = document.querySelector('#date').value;
        dbase.task.date = document.querySelector('#date').value;
        description.textContent = document.querySelector('#taskDescription').value;
        dbase.task.description = document.querySelector('#taskDescription').value;
        const selectedIndex = document.querySelector('#prioritySelection').selectedIndex;
        dbase.task.parent = projectTitle.textContent;
        if(selectedIndex >= 0){
            const selectedOption = document.querySelector('#prioritySelection').options[selectedIndex];
            priorityText.textContent = selectedOption.value;
            dbase.task.priority = selectedOption.value;
        }
        dialog.close();
        dbase.taskArray.push(dbase.task);
        localStorage.setItem('task', JSON.stringify(dbase.taskArray));
        dbase.taskArray = JSON.parse(localStorage.getItem('task'));
        isDone.addEventListener('click', (e) => {
            success.style = 'text-align: center; font-family: "Times New Roman"; font-size: 25px; font-weight: bold;';
            success.textContent = 'Task Completed!!!'
            dbase.task.isTaskComplete = e.target.checked ? true : false;
            if(e.target.checked){
                title.style.textDecoration = 'line-through';
                date.style.textDecoration = 'line-through';
                description.style.textDecoration = 'line-through';
                btnDiv.removeChild(editBtn);
                btnDiv.removeChild(deleteBtn)
                btnDiv.appendChild(success);
            }
            else {
                title.style.textDecoration = 'none';
                date.style.textDecoration = 'none';
                description.style.textDecoration = 'none';
                btnDiv.removeChild(success);
                btnDiv.appendChild(editBtn);
                btnDiv.appendChild(deleteBtn);
            }
        })
        // dbase.taskArray.push(dbase.task);
        // localStorage.setItem('task', JSON.stringify(dbase.taskArray));
        // dbase.taskArray = JSON.parse(localStorage.getItem('task'));
    })
    
    title.style = 'text-align: center; font-family: "Times New Roman"; font-size: 25px; font-weight: bold;';
    title.id = 'title';
    titleLabel.htmlFor = 'title';
    titleLabel.textContent = 'Title: ';
    titleDiv.style = 'display: flex; justify-content: flex-start; align-items: center; font-family: "Times New Roman";'+ 
    'font-size: 25px; font-weight: bold;';
    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(title);

    date.style = 'text-align: center; font-family: "Times New Roman"; font-size: 25px; font-weight: bold;';
    date.id = 'date';
    dateLabel.htmlFor = 'date';
    dateLabel.textContent = 'Date: ';
    dateDiv.style = 'display: flex; justify-content: flex-start; align-items: center; font-family: "Times New Roman";'+ 
    'font-size: 25px; font-weight: bold;';
    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(date);

    priorityText.style = 'text-align: center; font-family: "Times New Roman"; font-size: 25px; font-weight: bold;';
    priorityText.id = 'date';
    priorityLabel.htmlFor = 'date';
    priorityLabel.textContent = 'Priority: ';
    priorityDiv.style = 'display: flex; justify-content: flex-start; align-items: center; font-family: "Times New Roman";'+ 
    'font-size: 25px; font-weight: bold;';
    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(priorityText);

    description.style = 'font-family: "Times New Roman"; font-size: 30px; font-weight: bold;';
    card.appendChild(isDoneDiv);
    card.appendChild(titleDiv);
    card.appendChild(dateDiv);
    card.appendChild(priorityDiv);
    card.appendChild(description);
    card.appendChild(btnDiv);
    card.classList.add('edit');
    card.classList.add('delete');
    cardsContainer.appendChild(card);

    deleteBtn.addEventListener('click', (e) => {
        cardsContainer.removeChild(card);
    })

    editBtn.addEventListener('click', () => {
        description.disabled = false;
        dialog.showModal();
        description.disabled = true;
    })
}
  
export default {showTaskCards, todos};