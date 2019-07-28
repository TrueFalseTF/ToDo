///import * as working_method from "./working_method";

var repository_projects = [];
var repository_tasks = [];

repository_projects = prototype.projects_generator(2);
repository_tasks = prototype.tasks_generator(4, repository_projects);



var projects = new Vue({
    el: "#projects",

    data: {
        repository_projects
    },  

    methods: {

    }


});

var tasks = new Vue({
    el: "#tasks",

    data: {
        repository_tasks 
    },
    
    methods: {

    }

});