var prototype = {
    projects_generator: function(amount_projects) {
        var repository_projects = [];
        for (i = 1; i <= amount_projects; i++){
            repository_projects[i-1] = 
                {id: i, name: "проект_"+i};            
        };

        return repository_projects;
    },

    tasks_generator: function(amount_tasks, projects) {
        var repository_tasks = [];
        for (i=1; i <= amount_tasks; i++){
            var rand = Math.floor(Math.random() * projects.length);
            repository_tasks[i-1] = 
                {id: i, id_project: projects[rand].id, name: "задача_"+i};       
        }; 

        return repository_tasks;
    }
}

var working = {
    task_selection: function(repository_tasks, id_selected_project) {console.log("Вызов task_selection");
    var tasks_selected_project = new Array();
    repository_tasks.forEach(task => {
   
        if(task.id_project == id_selected_project) {            
            tasks_selected_project.push(task);
            console.log(tasks_selected_project);
        }
        
        return tasks_selected_project;
    });
}
}

///export {prototype};