import { makePage } from "./dom-manipulation/render-page";
import { addProjectButton, removeProjectButton } from "./dom-manipulation/toggle-add-project-button";
import { addProject, inputProject } from "./dom-manipulation/render-project";
import { Project } from "./logic/make-project";

const clickAddProject = () => {
    const addButton = document.querySelector("#add-projects");
    addButton.addEventListener("click", () => {
        removeProjectButton();
        inputProject();
    });
    document.addEventListener("keydown", event => {
        if (event.keyCode === 13) {
            const text = document.querySelector("#project-input");
            let projectName = text.value;
            let newProject = new Project(projectName);
            text.remove();
            addProject(newProject.title);
            addProjectButton();
        }
    })
}

const displayProject = () => {
    // const project = document.querySelector(".project");
    // project.addEventListener("click", () => {
    //     let name = project.id;
    //     console.log(name);
    // })
    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        project.addEventListener("click", () => {
            let name = project.id;
            console.log(name);
            renderProjectView(name);
        });
    })
}



makePage();
clickAddProject();
displayProject();