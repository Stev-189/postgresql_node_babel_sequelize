import Project from '../models/Project';

//------------------------------------------------------GET ALL///
export async function getProjects(req, res) {
  try {
    const projects = await Project.findAll();
    res.json({
      message: 'OK',
      data:projects
    })
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {error}
    })
  }
}

//------------------------------------------------------GET ONE PROJECT///
export async function getOneProject(req, res){
  const {id}= req.params;
  try {
    const project = await Project.findOne({where:{id}});
    res.json({
      message: 'OK',
      data:project
    })
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {error}
    })
  }
}

//------------------------------------------------------POST///
export async function createProject (req,res){
  const {name, priority, description, deliverydate} = req.body
  try {
    // por que tiene los mismos nombres de variables que el modelo
    let newProyect=await Project.create({
      name, 
      priority, 
      description, 
      deliverydate
    }, {
      fields:['name', 'priority', 'description', 'deliverydate']
  });
    if(newProyect){
      return res.json({
        message: 'Project created successfully',
        data: newProyect
      })
    }
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {e}
    })
  }
}

//------------------------------------------------------DELETE///
export async function deleteProject(req, res){
  const {id}= req.params;
  try {
    const deletrRowCount = await Project.destroy({where:{id}});
    res.json({
      message: 'Proyect Delete Succesfully',
      data:deletrRowCount//retorna la cantidad eliminada
    })
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {error}
    })
  }
}

//------------------------------------------------------PUT///
export async function updateProject(req, res){
  const {id}= req.params;
  const {name, priority, description, deliverydate}= req.body;
  try {
    const projects = await Project.findAll({
      attributes: ['id', 'name', 'priority', 'description', 'deliverydate'],
      where: {id}
    });//retornas un array de objetos

    if (projects.length > 0){
      projects.forEach(async proyect => {
        await proyect.update({
          name, 
          priority, 
          description, 
          deliverydate
        });
      });
    }
    return res.json({
      message:'OK',
      data: projects
    })

  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {error}
    });
  }
}