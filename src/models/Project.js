import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

import Task from './Tasks'

const Project = sequelize.define('projects', {
  id: {
      type: Sequelize.INTEGER,
      primaryKey: true
  },
  name: {
      type: Sequelize.TEXT
  },
  priority: {
      type: Sequelize.INTEGER
  },
  description: {
      type: Sequelize.TEXT
  },
  deliverydate: {
      type: Sequelize.DATE
  }
}, {
      timestamps: false
  });

//relacion d ela stablas un proyecto tiene muchos tareas y su llave forania de coneccion
Project.hasMany(Task, { foreinkey: 'projectId', sourceKey: 'id' });//relacionas tareas con proyectos por las llaves
//las tsks solo pertenecen a un proyecto
Task.belongsTo(Project, { foreinkey: 'projectId', sourceKey: 'id' });
export default Project;