import { addTaskButton } from "./toggle-add-buttons";

const renderProjectView = (name) => {
    //add title from project name in sidebar
    const mainContent = document.querySelector("#main-content");
    const project = document.createElement("div");
    project.id = "project-view-container";
    mainContent.appendChild(project);
    const projectTitle = document.createElement("div");
    projectTitle.id = "project-title";
    projectTitle.textContent = name;
    project.appendChild(projectTitle);

    //add an add task button
    addTaskButton();

    //render todo box (container for todos)
    const todoBox = document.createElement("div");
    todoBox.id = "todo-box";
    project.appendChild(todoBox);
}

const renderTodoItem = (name) => {
    //create item with name
    const todoBox = document.querySelector("#todo-box");
    const todoItem = document.createElement("div");
    todoItem.id = "todo-item";
    todoBox.appendChild(todoItem);

    //add name and due date to todoItem
    const todoName = document.createElement("div");
    todoName.id = "todo-name";
    todoName.textContent = name;
    todoItem.appendChild(todoName);

    const todoDate = document.createElement("input");
    todoDate.type = "date";
    todoDate.id = "todo-date";
    todoItem.appendChild(todoDate);

    // add x to end
    const todoDeleteButton = document.createElement("div");
    todoDeleteButton.id = name;
    todoDeleteButton.classList.add("todo-delete");
    todoDeleteButton.textContent = "x";
    todoItem.appendChild(todoDeleteButton);

}

const inputTodo = () => {
    const projectsContainer = document.querySelector("#main-content");
    const taskInput = document.createElement("input");
    taskInput.id = "task-input";
    projectsContainer.appendChild(taskInput);
}


const removeCurrentProject = () => {
    const projectView = document.querySelector("#main-content");
    if (projectView.hasChildNodes()) {
        projectView.removeChild(projectView.childNodes[0]);
    }
}


export { renderProjectView, renderTodoItem, inputTodo, removeCurrentProject };