const renderProjectView = (name) => {
    const mainContent = document.querySelector("#main-content");
    const projectTitle = document.createElement("div");
    projectTitle.id = "project-title";
    projectTitle.textContent = name;
    mainContent.appendChild(projectTitle);
}