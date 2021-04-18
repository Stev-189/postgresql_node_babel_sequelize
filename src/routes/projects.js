import {Router} from 'express'
const router= Router()

import {getProjects, getOneProject, createProject, deleteProject, updateProject} from '../controllers/project.controller'
///GET///
// /api/projects/
router.get('/', getProjects)

// /api/projects/n
router.get('/:id', getOneProject)
//////

///Crear///
// /api/projects/
router.post('/', createProject)
//////

///DELETE///
router.delete('/:id', deleteProject)
//////

///update///
router.put('/:id', updateProject)
//////
export default router;