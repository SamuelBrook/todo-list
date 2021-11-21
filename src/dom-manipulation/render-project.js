const addProject = (name) => {
    const projectList = document.querySelector("#project-list");
    const projectBox = document.createElement("div");
    projectBox.id = "project-box";
    projectList.appendChild(projectBox);
    const project = document.createElement("li");
    project.classList.add("project");
    project.textContent = name;
    project.id = name;
    projectBox.appendChild(project);
    const removeButton = document.createElement("div");
    removeButton.id = "remove-project";
    removeButton.textContent = "x";
    projectBox.appendChild(removeButton);
}

const removeProject = () => {
    const project = document.querySelector("#project");
    project.remove();
}

const inputProject = () => {
    const projectsContainer = document.querySelector("#projects-container");
    const projectInput = document.createElement("input");
    projectInput.id = "project-input";
    projectInput.type = "text";
    projectInput.focus();
    projectsContainer.appendChild(projectInput);
}

export { addProject, removeProject, inputProject }; 