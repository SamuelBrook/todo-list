const makePage = () => {
    const container = document.querySelector("#container");

    //create page layout

    const header = document.createElement("div");
    header.id = "header";
    header.textContent = "Todo List";
    container.appendChild(header);

    const content = document.createElement("div");
    content.id = "content";
    container.appendChild(content);

    const footer = document.createElement("div");
    footer.id = "footer";
    footer.textContent = "Copyright © 2021 SamuelBrook";
    container.appendChild(footer);

    //add a sidebar for the activites to go into and a div for the todos to go into

    const sidebar = document.createElement("div");
    sidebar.id = "sidebar";
    content.appendChild(sidebar);

    const mainContent = document.createElement("div");
    mainContent.id = "main-content";
    content.appendChild(mainContent);

    //add a "add activity" button and header to the sidebar

    const projectsHeader = document.createElement("div");
    projectsHeader.id = "projects-header";
    projectsHeader.textContent = "Projects";
    sidebar.appendChild(projectsHeader);

    //add a "add todo" button and header to the main screen


    //add function to edit text content of divs
}

export { makePage };