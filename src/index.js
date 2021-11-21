import { makePage } from "./dom-manipulation/render-page";
import { addProjectButton, addTaskButton, removeProjectButton, removeTaskButton } from "./dom-manipulation/toggle-add-buttons";
import { addProject, inputProject } from "./dom-manipulation/render-project";
import { Project } from "./logic/make-project";
import { renderProjectView, renderTodoItem, inputTodo, removeCurrentProject } from "./dom-manipulation/render-todo-list";
import { Todo } from "./logic/make-todo";
import { saveTodoToLocalStorage, saveProjectToLocalStorage, retrieveProjectFromLocalStorage } from "./logic/local-storage-interactions";




const projectAndTodoController = () => {

    let projectOpened = false;
    let projectClosed = true;
    let projectArray = [];
    let todoArray = [];

    // display project list if project list array length > 0
    projectArray = retrieveProjectFromLocalStorage();
    console.log(projectArray);
    if (projectArray === null) {
        projectArray = [];
    }
    else {
        for (let i = 0; i < projectArray.length; i++) {
            addProject(projectArray[i].title);
        }
    } // -> this is for when the page first loads (for projects its not neccessary to store the projects for any other reason)



    // add project input box when add button clicked
    const displayInputBox = () => {
        const addButton = document.querySelector("#add-projects");
        addButton.addEventListener("click", () => {
            projectOpened = false;
            removeProjectButton();
            inputProject();
        });
    }
    displayInputBox();

    // add project to the list with "enter" key
    document.addEventListener("keydown", event => {
        if (event.keyCode === 13 && projectOpened === false) {
            const text = document.querySelector("#project-input");
            let projectName = text.value;
            projectName = new Project(projectName);
            text.remove();
            addProject(projectName.title);
            addProjectButton();
            displayInputBox();
            projectClosed = false;
            projectArray.push(projectName);
            saveProjectToLocalStorage(projectArray);
        }
    })

    // add todo input box when add button clicked
    const addTask = () => {
        const addTaskButton = document.querySelector("#add-tasks");
        addTaskButton.addEventListener("click", () => {
            removeTaskButton();
            inputTodo();
        })
    }
    
    // display the project view when project clicked in sidebar
    const displayProject = () => {
        const projectList = document.querySelector("#project-list");
        projectList.addEventListener("click", (e) => {
            const target = e.target;
            if (target.matches("li")) {
                if (projectClosed === true) {
                    let title = target.textContent;
                    renderProjectView(title);
                    projectOpened = true;
                }
                else {
                    removeCurrentProject();
                    let title = target.textContent;
                    renderProjectView(title);
                    projectOpened = true;
                }
            }
            addTask();
           
        })
    }
    displayProject();

    // add todo to the todo list when "enter" key is pressed
    document.addEventListener("keydown", event => {
        if (event.keyCode === 13 && projectOpened === true) {
            const projectTitle = document.getElementById("project-title");
            let projectHeader = projectTitle.textContent;
            const text = document.querySelector("#task-input");
            let taskName = text.value;
            taskName = new Todo(taskName, "0", projectHeader);
            text.remove();
            renderTodoItem(taskName.task);
            addTaskButton();
            addTask();
            todoArray.push(taskName);
            saveTodoToLocalStorage(todoArray);
        }
    })


    //remove project when clicked
}









makePage();
projectAndTodoController();
