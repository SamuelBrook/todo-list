class Todo {
    constructor(task, dueDate, project) {
        this.task = task;
        this.dueDate = dueDate;
        this.project = project;
    }

    setTitle(task) {
        this.task = task;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }
    
}

export { Todo };