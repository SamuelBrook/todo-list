const addProject = (name) => {
    const projectList = document.querySelector("#project-list");
    const project = document.createElement("div");
    project.textContent = name;
    project.classList.add("project");
    project.id = name;
    projectList.appendChild(project);
}

const removeProject = () => {
    const project = document.querySelector("#project");
    project.remove();
}

const inputProject = () => {
    const projectsContainer = document.querySelector("#projects-container");
    const projectInput = document.createElement("input");
    projectInput.id = "project-input";
    projectsContainer.appendChild(projectInput);
}

export { addProject, removeProject, inputProject }; 