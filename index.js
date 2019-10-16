const express = require('express');

const server = express();

server.use(express.json());

const projects = [];
let request = 0;

function checkProjectExists(req, res, next) {
    const { id } = req.params;
    const project = projects.find(pj => pj.id == id);

    if(!project) {
        return res.status(400).json({ ERROR: 'PROJECT NOT EXIST'});
    
    }

    return next();

}

function Qrequest(req, res, next) {
    request++;

    console.log(`The number of request is: ${request}`);

    return next();
}


server.post('/projects' , (req, res) => {
    const { id } = req.body;
    const { title } = req.body;

    const project = {
        id,
        title,
        tasks: []
    };

    projects.push(project);

    return res.json(projects);
});


server.get('/projects' , (req, res) => {
    return res.json(projects);
});


server.put('/projects/:id', checkProjectExists, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const project = projects.find( pj => pj.id == id);

    project.title = title;

    return res.json(project);

});

server.delete('/projects/:id' , checkProjectExists , (req, res) => {
    const { id } = req.params;

    const projectIndex = projects.findIndex(pj => pj.id == id);

    projects.splice(projectIndex, 1);

    return res.json(projects);

});

server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    
    const project = projects.find(pj => pj.id == id);

    project.tasks.push(title);


    return res.json(project);
    
});



server.listen(3000);