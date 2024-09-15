const Task=require('../models/Task')


module.exports.create=async function(req,res) {
    const { title, description, dueDate, category } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Task title is required' });
  }

  try {
    const task = new Task({ title, description, dueDate, category });
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports.getAll=async function (req,res) {
    try {
        const tasks = await Task.find();
        res.json(tasks);
      } catch (err) {
        res.status(500).json({ error: 'Server error' });
      }
    
}

module.exports.update=async function (req,res) {
    const { title, description, isCompleted, dueDate, category } = req.body;

  // Validation
  if (!title) {
    return res.status(400).json({ error: 'Task title is required' });
  }

  try {
    let task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Prevent marking an already completed task as completed again
    if (task.isCompleted && isCompleted) {
      return res.status(400).json({ error: 'Task is already completed' });
    }

    task.title = title;
    task.description = description;
    task.isCompleted = isCompleted;
    task.dueDate = dueDate;
    task.category = category;
    
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}


module.exports.delete=async function(req,res) {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
          return res.status(404).json({ error: 'Task not found' });
        }
    
        await task.remove();
        res.json({ message: 'Task removed' });
      } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}


module.exports.markCompleted=async function(req,res) {
    try {
        let task = await Task.findById(req.params.id);
        if (!task) {
          return res.status(404).json({ error: 'Task not found' });
        }
    
        if (task.isCompleted) {
          return res.status(400).json({ error: 'Task is already completed' });
        }
    
        task.isCompleted = true;
        await task.save();
        res.json(task);
      } catch (err) {
        res.status(500).json({ error: 'Server error' });
      }
    
}