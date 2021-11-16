const addProjectButton = () => {

    const projectsContainer = document.querySelector("#projects-container");

    const addProjects = document.createElement("div");
    addProjects.id = "add-projects";
    projectsContainer.appendChild(addProjects);

    const addButton = document.createElement("div");
    addButton.id = "add-button";
    addButton.textContent = "+";
    addProjects.appendChild(addButton);

    const addProjectText = document.createElement("div");
    addProjectText.id = "add-project-text";
    addProjectText.textContent = "Add Project";
    addProjects.appendChild(addProjectText);

}

const addTaskButton = () => {

    const projectsContainer = document.querySelector(`#main-content`);

    const addProjects = document.createElement("div");
    addProjects.id = "add-projects";
    projectsContainer.appendChild(addProjects);

    const addButton = document.createElement("div");
    addButton.id = "add-button";
    addButton.textContent = "+";
    addProjects.appendChild(addButton);

    const addProjectText = document.createElement("div");
    addProjectText.id = "add-project-text";
    addProjectText.textContent = "Add Task";
    addProjects.appendChild(addProjectText);

    
}


const removeProjectButton = () => {
    const addProject = document.querySelector("#add-projects");
    addProject.remove();
}

export { addProjectButton, removeProjectButton, addTaskButton };