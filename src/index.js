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
    let projectArray = retrieveProjectFromLocalStorage();
    let todoArray = retrieveTodoFromLocalStorage();

    console.log(todoArray);
    const previewProject = new Project("Create projects here");
    const previewTodo = new Todo("Add tasks here", 0, "Create projects here");

    if (projectArray.length < 1 || projectArray === null) {
        projectArray.push(previewProject);
        saveProjectToLocalStorage(projectArray);
    }

    if (todoArray.length < 1 || todoArray === null) {
        todoArray.push(previewTodo);
        saveTodoToLocalStorage(todoArray);
    }

    for (let i = 0; i < projectArray.length; i++) {
        addProject(projectArray[i].title);
    }

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
            console.log("project");
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
                        todoArray = retrieveTodoFromLocalStorage();
                        for (let j = 0; j < todoArray.length; j++) {
                            if (projectArray[i].title === todoArray[j].project) {
                                todoArray.splice(j, 1);
                            }
                        }
                        projectArray.splice(i, 1);
                        target.parentElement.remove();
                    }
                }
                saveTodoToLocalStorage(todoArray);
                saveProjectToLocalStorage(projectArray);
                console.log(todoArray);
                console.log(projectArray);
            }
        })
    }
    removeProject();

    const saveProjectDate = () => {
        const mainContent = document.querySelector("#main-content");
        mainContent.addEventListener("input", (e) => {
            const target = e.target;
            if (target.matches("input")) {
                let date = target.value;
                todoArray = retrieveTodoFromLocalStorage();
                for (let i = 0; i < todoArray.length; i++) {
                    if (todoArray[i].task === target.id) {
                        todoArray[i].dueDate = date;

                    }
                }
                saveTodoToLocalStorage(todoArray);

            }
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
                

                todoArray = retrieveTodoFromLocalStorage();
                let todoArrayDisplay = [];
            
                for (let i = 0; i < todoArray.length; i++) {
                    if (todoArray[i].project === target.id) {
                        todoArrayDisplay.push(todoArray[i]);
                    }
                }
                for (let i = 0; i < todoArrayDisplay.length; i++) {
                    renderTodoItem(todoArrayDisplay[i].task, todoArrayDisplay[i].dueDate);
                }
                

                addTaskButton();
                addTask();
                projectClosed = false;
                saveProjectDate();

            }           
        })
    }
    displayProject();

    // add todo to the todo list when "enter" key is pressed
    document.addEventListener("keydown", event => {
        if (event.keyCode === 13 && projectOpened === true) {
            console.log("task");
            todoArray = retrieveTodoFromLocalStorage();
            if (todoArray === null || todoArray === undefined || todoArray === 0) {
                todoArray = [];
            }
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
                    if (target.id === todoArray[i].task) {
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
