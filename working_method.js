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

///export {prototype};