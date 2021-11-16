import { addTaskButton } from "./toggle-add-buttons";

const renderProjectView = (name) => {
    //add title from project name in sidebar
    const mainContent = document.querySelector("#main-content");
    const projectTitle = document.createElement("div");
    projectTitle.id = "project-title";
    projectTitle.textContent = name;
    mainContent.appendChild(projectTitle);

    //add an add task button
    addTaskButton();

    //render todo box (container for todos)
    const todoBox = document.createElement("div");
    todoBox.id = "todo-box";
    mainContent.appendChild(todoBox);
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
    todoItem.appendChild(todoName);

    const todoDate = document.createElement("input");
    todoDate.type = "date";
    todoDate.id = "todo-date";
    todoBox.appendChild(todoDate);

    // add x to end
    const todoDeleteButton = document.createElement("div");
    todoDeleteButton.id = "todo-delete";
    todoDeleteButton.textContent = "x";
    todoItem.appendChild(todoDeleteButton);

}


export { renderProjectView };