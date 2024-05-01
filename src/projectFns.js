import dbase from './localStorage'

// Elements to dynamically create a new project in the side bar
const projectEntries = document.querySelector('.projectEntries');
const entry = document.querySelector('.entry');
const projectTitle = document.querySelector('.projectTitle');
dbase.projectsArray = JSON.parse(localStorage.getItem('projectsList')) || []

function createProject(){
    entry.addEventListener('change', (e) => {
        let container = document.createElement('div');
        let arrowIcon = document.createElement('i');
        let iconDelete = document.createElement('i');
        let outputText = document.createElement('h2');
        let inputText = e.target.value;
        outputText.textContent = inputText;
        let iconClassList = ["fa-solid", "fa-arrow-right"];
        iconClassList.forEach(ic => {
            arrowIcon.classList.add(ic);
        })
        let deleteProjectIcons = ["fa-solid", "fa-circle-xmark"];
        deleteProjectIcons.forEach(icon => {
            iconDelete.classList.add(icon);
        })
        arrowIcon.style = 'margin-top: 25px; margin-left: 10px; margin-right: 10px;';
        iconDelete.style = 'grid-column: 3/4; margin-top: 25px; margin-right: 10px; font-size: 20px;';
        container.appendChild(arrowIcon)
        container.appendChild(outputText)
        container.appendChild(iconDelete);
        container.setAttribute('value', inputText);
        container.style = 'display: grid; grid-template: 60px / 20px 1fr 30px;';
        arrowIcon.style = 'grid-column: 1/2; margin-top: 25px; margin-left: 0;';
        outputText.style = 'grid-column: 2/3; margin-left 0;';
        e.target.value = '';
        projectEntries.appendChild(container);
        projectEntries.style = 'margin-bottom: 20px;';
        hoverOverProjects();
        // iconDelete.onclick = deleteProject();

        dbase.projectObject.project = inputText;
        dbase.projectObject.id = dbase.generateGuid();
        dbase.projectObject.todo = [];
        dbase.projectsArray.push(dbase.projectObject);
        localStorage.setItem('projectsList', JSON.stringify(dbase.projectsArray));
        dbase.projectsArray = JSON.parse(localStorage.getItem('projectsList'));
    }) 
}

function hoverOverProjects(){
    projectEntries.addEventListener('mouseover', (e) => {
        let clickedDiv = e.target.closest('div');
        clickedDiv.classList.add('hover');
    })
    projectEntries.addEventListener('mouseout', (e) => {
        let clickedDiv = e.target.closest('div');
        clickedDiv.classList.remove('hover');
    })
}

function clickToEnableTasksCardCreationOrDeleteProject(){
    projectEntries.addEventListener('click', (e) => {
        let clickedDiv = e.target.closest('div');
        clickedDiv.addEventListener('click', (e) => {
            const clickedElement = e.target;
            if(clickedElement.classList.contains("fa-circle-xmark")){
                projectTitle.setAttribute('value', 'All tasks');
                clickedDiv.remove();
                projectTitle.textContent = projectTitle.getAttribute('value');
            }
            else{
                projectTitle.textContent = clickedDiv.getAttribute('value');
                projectTitle.setAttribute('value', clickedDiv.getAttribute('value'));
            }
        })
    })
    projectTitle.textContent = 'All Tasks';
}


// function removeProjectFromLocalStorage(){

// }
export default {
                createProject,
                clickToEnableTasksCardCreationOrDeleteProject
                };