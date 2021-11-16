import { makePage } from "./dom-manipulation/render-page";
import { addProjectButton, removeProjectButton } from "./dom-manipulation/toggle-add-buttons";
import { addProject, inputProject } from "./dom-manipulation/render-project";
import { Project } from "./logic/make-project";
import { renderProjectView } from "./dom-manipulation/render-todo-list";


//adding project to project list on the sidebar
const clickAddProject = () => {

    //create function for displaying box for inputting project name
    const displayInputBox = () => {
        const addButton = document.querySelector("#add-projects");
        addButton.addEventListener("click", () => {
            removeProjectButton();
            inputProject();
        });
    }
    displayInputBox();

    // when "enter" key pressed, adds the project to the project list
    document.addEventListener("keydown", event => {
        if (event.keyCode === 13) {
            const text = document.querySelector("#project-input");
            let projectName = text.value;
            let newProject = new Project(projectName);
            text.remove();
            addProject(newProject.title);
            addProjectButton();
            displayInputBox();
        }
    })
}


const displayProject = () => {
    const projectList = document.querySelector("#project-list");
    projectList.addEventListener("click", (e) => {
        //e.target -> the target will return the object to which the event was dispatched
        const target = e.target;
        if (target.matches("li")) {
            //call function which displays title of project
            let title = target.textContent;
            renderProjectView(title);
        }
    })
}

const clickAddTodo = () => {

    const addButton = document.querySelector("#add-projects");
    addButton.addEventListener("click", () => {
        
    });

}





makePage();
clickAddProject();
displayProject();