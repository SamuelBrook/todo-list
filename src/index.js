import { makePage } from "./dom-manipulation/render-page";
import { addProjectButton, addTaskButton, removeProjectButton, removeTaskButton } from "./dom-manipulation/toggle-add-buttons";
import { addProject, inputProject } from "./dom-manipulation/toggle-project";
import { Project } from "./logic/make-project";
import { renderProjectView, renderTodoItem, inputTodo, removeCurrentProject } from "./dom-manipulation/toggle-todo-list";
import { Todo } from "./logic/make-todo";
import { saveTodoToLocalStorage, saveProjectToLocalStorage, retrieveProjectFromLocalStorage, retrieveTodoFromLocalStorage } from "./logic/local-storage-interactions";




const projectAndTodoController = () => {

    let projectOpened = false;
    let projectClosed = true;
    let projectArray = [];
    let todoArray = [];


    const previewProject = new Project("New Project");

    if (projectArray.length < 1) {
        addProject(previewProject.title);
    }

    // display project list if project list array length > 0
    projectArray = retrieveProjectFromLocalStorage();
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
            projectArray = retrieveProjectFromLocalStorage();
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

    // remove project when "x" clicked (including from array, then send array to local storage)
    const removeProject = () => {
        const projectList = document.querySelector("#project-list");
        projectList.addEventListener("click", (e) => {
            const target = e.target;
            if (target.classList.contains("remove-project")) {
                projectArray = retrieveProjectFromLocalStorage();
                for (let i = 0; i < projectArray.length; i++) {
                    if (target.id === projectArray[i].title) {
                        projectArray.splice(i, 1);
                        target.parentElement.remove();
                    }
                }
                saveProjectToLocalStorage(projectArray);
            }
        })
    }
    removeProject();
    
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
                projectClosed = false;
                addTask();
            }           
        })
    }
    displayProject();

    // add todo to the todo list when "enter" key is pressed
    document.addEventListener("keydown", event => {
        if (event.keyCode === 13 && projectOpened === true) {
            todoArray = retrieveTodoFromLocalStorage();
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

    //remove task from task list in project view and remove task from the todo array
    const removeTask = () => {
        const projectList = document.querySelector("#main-content");
        projectList.addEventListener("click", (e) => {
            const target = e.target;
            if (target.classList.contains("todo-delete")) {
                todoArray = retrieveTodoFromLocalStorage();
                for (let i = 0; i < todoArray.length; i++) {
                    if (target.id === todoArray[i].title) {
                        todoArray.splice(i, 1);
                        target.parentElement.remove();
                    }
                }
                saveTodoToLocalStorage(todoArray);
            }

        })
    }
    removeTask();
}









makePage();
projectAndTodoController();
