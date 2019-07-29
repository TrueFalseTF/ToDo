///import * as working_method from "./working_method";

var repository_projects = [];
var repository_tasks = [];
var tasks_selected_project = [];

repository_projects = prototype.projects_generator(4);
repository_tasks = prototype.tasks_generator(20, repository_projects);

var Id_selected_project = 0;



var projects = new Vue({
    el: "#content_wrapper",

    data: {
        repository_projects,        
        id_selected_project: 0        
    },  
    

    methods: {

    }


});

var tasks = new Vue({
    el: "#tasks",

    data: {
        repository_tasks,        
        tasks_selected_project: 0
    },

    created: function() {
        tasks_selected_project = [];
        tasks_selected_project = working.task_selection(repository_tasks, id_selected_project);
    },

    //отслеживание id_selected_project
    //функция пересчёта массива
    watch: {
        id_selected_project: function() {
            tasks_selected_project = [];
            tasks_selected_project = working.task_selection(repository_tasks, id_selected_project);
        }        
    },
    
    methods: {

    }

});