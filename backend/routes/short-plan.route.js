const router = require('express').Router();
const shortPlan = require('../models/short-plan.model');

router.route('/').get((req, res)=>{
    shortPlan.find({})
    .then(data=>{res.json(data)})
    .catch(err=>console.log(err));
});


router.route('/add').post((req, res)=>{
    const {username, title, description, progress, startdate, deadline, duration }=req.body;
    const plan = new shortPlan({username, type:"short-term", title, description, progress, plandate:new Date(), startdate, deadline, duration});
    plan.save()
    .then(()=>res.send('Plan Added'))
    .catch(err=>res.send(err))
});

router.route('/update/:id').put((req, res)=>{
    shortPlan.findOneAndUpdate({_id:req.params.id}, req.body)
    .then(data=>res.send('updated'))
    .catch(err=>res.send(err))
})


module.exports = router;