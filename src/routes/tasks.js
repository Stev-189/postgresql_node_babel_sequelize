import {Router} from 'express'
const router= Router()

import {createTask, getTasks, getOneTask, deleteTask, updateTask, getTasksByProject} from '../controllers/task.controller'

///get all tasks
router.get('/', getTasks)

router.get('/:id', getOneTask)

///create
router.post('/', createTask)

///
router.delete('/:id', deleteTask)

///
router.put('/:id', updateTask)

//api/tasks/project/:projectId
//tasks by project
router.get('/project/:projectId', getTasksByProject)


export default router;