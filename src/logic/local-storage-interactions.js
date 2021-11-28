const saveTodoToLocalStorage = (todos) => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
}

const retrieveTodoFromLocalStorage = () => {
    return JSON.parse(window.localStorage.getItem("todos"));
}

const saveProjectToLocalStorage = (projects) => {
    window.localStorage.setItem("projects", JSON.stringify(projects));
}

const retrieveProjectFromLocalStorage = () => {
    return JSON.parse(window.localStorage.getItem("projects"));
}


export { saveTodoToLocalStorage, saveProjectToLocalStorage, retrieveTodoFromLocalStorage, retrieveProjectFromLocalStorage  };