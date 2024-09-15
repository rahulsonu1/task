const express=require('express')
const router=express.Router()
const taskController=require('../controllers/taskController')

router.post('/',taskController.create)
router.get('/',taskController.getAll)
router.put('/:id',taskController.update)
router.delete('/:id',taskController.delete)
router.patch('/:id/complete',taskController.markCompleted)




module.exports=router