const projectsArray = [];
const projectObject = {
    id: '',
    project: '',
    todo: []
}

const taskArray = [];
const task = {
  project: '',
  title: '',
  priority: '',
  date: '',
  description: '',
  isTaskComplete: false
}

function integrateTasksIntoProjects(){
  if(projectObject.project === task.project){
    projectObject.todo.push(task)
  }
  return projectObject;
}

function generateGuid() {
    function s4() {
      return Math.floor((1 + Math. random()) * 0x10000). toString(16). substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
}


export default { projectsArray, projectObject, task, taskArray, generateGuid, integrateTasksIntoProjects };