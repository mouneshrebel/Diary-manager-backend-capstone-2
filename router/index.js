const express=require('express')
const router=express.Router()


router.get('/',(req,res)=>{
    res.send('<h1>welcome to Diary manager</h1><h2>Diary management is the process of planning, organising, and maintaining a schedule of appointments, tasks, and events. It involves keeping track of deadlines, meetings, and other commitments in a way that ensures nothing is overlooked or forgotten.!</h2>')
})
module.exports=router