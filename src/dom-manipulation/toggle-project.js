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
    removeButton.classList.add("remove-project");
    removeButton.id = name;
    removeButton.textContent = "x";
    projectBox.appendChild(removeButton);
}

const removeProjectFromList = () => {
    const projectList = document.querySelector("#project-list");
    projectList.addEventListener("click", (e) => {
        const target = e.target;
        if (target.classList.contains("remove-project")) {
            target.parentElement.remove();
        }
    })
}

// const removeProjectFromArray = (array) => {
//     let myArray = array;
//     const projectList = document.querySelector("#project-list");
//     projectList.addEventListener("click", (e) => {
//         const target = e.target;
//         for (let i = 0; i < myArray.length; i++) {
//             if (target.id === myArray[i].title) {
//                 myArray.splice(i, 1);
//                 console.log(myArray);
//             }
//         }
//         return myArray;
//     })
// }

// const removeProjectFromArray = (array, target) => {
//     let myArray = array;
//     for (let i = 0; i < myArray.length; i++) {
//         if (target.id === myArray[i].title) {
//             myArray.splice(i, 1);
//             console.log(myArray);
//         }
//     }
//     return myArray;
// }

const inputProject = () => {
    const projectsContainer = document.querySelector("#projects-container");
    const projectInput = document.createElement("input");
    projectInput.id = "project-input";
    projectInput.type = "text";
    projectInput.focus();
    projectsContainer.appendChild(projectInput);
}

export { addProject, removeProjectFromList, inputProject }; 