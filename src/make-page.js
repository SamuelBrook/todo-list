const makePage = () => {
    const container = document.querySelector("#container");

    //create page layout

    const header = document.createElement("div");
    header.id = "header";
    container.appendChild(header);

    const content = document.createElement("div");
    content.id = "content";
    container.appendChild(content);

    const footer = document.createElement("div");
    footer.id = "footer";
    container.appendChild(footer);

    //add a sidebar for the activites to go into and a div for the todos to go into

    const sidebar = document.createElement("div");
    sidebar.id = "sidebar";
    content.appendChild(sidebar);

    const mainContent = document.createElement("div");
    mainContent.id = "main-content";
    content.appendChild(mainContent);

    //add a "add activity" button and header to the sidebar

    //add a "add todo" button and header to the main screen
}

export { makePage };