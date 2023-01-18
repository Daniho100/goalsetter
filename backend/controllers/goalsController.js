const asyncHandler = require('express-async-handler')
//@desc Get goals
//@route GET /api/goals
//@access PRIVATE
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get goals' })
})


//@desc Set goal
//@route SET /api/goals
//@access PRIVATE
 const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: 'Set goals' })
})

//@desc Update goals
//@route PUT /api/goals:id
//@access PRIVATE
 const updateGoal = asyncHandler(async (req, res)=> {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
})


//@desc DELETE goals
//@route Delete /api/goals:id
//@access PRIVATE
 const deleteGoal = asyncHandler(async (req, res)=> {
        res.status(200).json({ message: `Delete goal ${req.params.id}` })
})

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}
