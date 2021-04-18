import Task from '../models/Tasks';

//------------------------------------------------------GET ALL///
export async function getTasks (req,res){
  try {
    const tasks= await Task.findAll({
      attributes: ['id','name', 'done', 'projectId'],
      order:[['id', 'DESC']]
    });
    res.json({
      message: 'OK',
      data: tasks
    })
  
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {error}
    })
  }
}

//------------------------------------------------------GET ONE///
export async function getOneTask (req,res){
  const {id}= req.params;
  try {
    const task = await Task.findOne({where:{id}});
    res.json({
      message: 'OK',
      data:task
    })
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {error}
    })
  }
}


//------------------------------------------------------CREATE///
export async function createTask (req,res){
  const {name, done, projectId}= req.body;
  try {
    let newTask = await Task.create({
      name, 
      done, 
      projectId
    },{ fields:['name', 'done', 'projectId']
  });
    if(newTask){
      return res.json({
        message: 'Task created successfully',
        data: newTask
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {error}
    })
  }
}

//------------------------------------------------------DELETE///
export async function deleteTask (req,res){
  const {id}= req.params;
  try {
    const deletrRowCount = await Task.destroy({where:{id}});
    res.json({
      message: 'Task Delete Succesfully',
      data:deletrRowCount//retorna la cantidad eliminada
    })
    
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {error}
    })
  }
}

//------------------------------------------------------UPDATE///
export async function updateTask (req,res){
  const {id}= req.params;
  const {name, done, projectId}= req.body;
  try {
    // const task = await Task.findOne({
    //   attributes:['id','name', 'done', 'projectId'],
    //   where:{id}
    // });

    const updateTask=await Task.update({
      name, 
      done, 
      projectId
    }, {where:{id}});

    res.json({
      message: 'OK',
      data:updateTask
    })
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {error}
    })
  }
}

//------------------------------------------------------TASKS BY PROJECT///
export async function getTasksByProject (req,res){
  const {projectId}= req.params;
  try {
    const tasks= await Task.findAll({
      attributes:['id','name', 'done', 'projectId'],
      where: {projectId}
    });
    res.json({
      message: 'OK',
      data:tasks
    })
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {error}
    })
  }
}