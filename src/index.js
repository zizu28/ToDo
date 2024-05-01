import './style.css';
import myFunctions from './projectFns';
import tasks from './taskCards';
// import tasks from './cards'

const barItems = document.querySelector('.barItems');
const projectTitle = document.querySelector('.projectTitle');
const projectEntryIcon = document.querySelector('.projectEntryIcon');
// const taskAdder = document.querySelector('.taskAdder');


// Modify this code after local storage manipulation**************
barItems.addEventListener('click', (e) => {
    const clickedElement = e.target.closest('div');
    if(clickedElement){
        projectTitle.textContent = clickedElement.getAttribute('value');
    }
})

projectEntryIcon.onclick = myFunctions.createProject();
myFunctions.clickToEnableTasksCardCreationOrDeleteProject();
tasks.showTaskCards();
// tasks.myCardLibrary;
// tasks.displayMyTasks();