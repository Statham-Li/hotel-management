// @login & register

const express = require("express");
const routerTab = express.Router();
const passport = require("passport");

const Profile = require('../model/ProfilesMsg')
// $router POST api/profile/test
// @desc  返回请求数据json
// @access public

routerTab.get('/test', (req, res) => {
    res.json({msg:'profile works'});
})

// $router POST api/profile/add
// @desc  创建订单信息接口
// @access private
routerTab.post("/add",passport.authenticate("jwt",{session:false}),(req, res)=>{
    const profileFields = {};

    if(req.body.type) profileFields.type = req.body.type;
    if(req.body.date) profileFields.date = req.body.date;
    if(req.body.name) profileFields.name = req.body.name;
    if(req.body.phone) profileFields.phone = req.body.phone;
    if(req.body.idCard) profileFields.idCard = req.body.idCard;
    if(req.body.FAB) profileFields.FAB = req.body.FAB;
    if(req.body.remarks) profileFields.remarks = req.body.remarks;
    new Profile(profileFields).save().then(profile =>{
        res.json(profile)
    })
});

// $router GET api/profile
// @desc  获取所有信息
// @access private
routerTab.get("/", passport.authenticate("jwt",{session:false}), (req, res) =>{
    Profile.find()
           .then(profile =>{
               if(!profile){
                   return res.status(404).json("没有任何内容")
               }
               res.json(profile);
           }).catch(err => res.status(404).json(err));
})

// $router GET api/profile/:id
// @desc  获取单个信息
// @access private
routerTab.get("/:id", passport.authenticate("jwt",{session:false}), (req, res) =>{
    Profile.findOne({_id:req.params.id})
           .then(profile =>{
               if(!profile){
                   return res.status(404).json("没有任何内容")
               }
               res.json(profile);
           }).catch(err => res.status(404).json(err));
})

// $router POST api/profile/edit/:id
// @desc  编辑信息接口
// @access private
routerTab.post("/edit/:id",passport.authenticate("jwt",{session:false}),(req, res)=>{
    const profileFields = {};

    if(req.body.type) profileFields.type = req.body.type;
    if(req.body.identity) profileFields.identity = req.body.identity;
    if(req.body.date) profileFields.date = req.body.date;
    if(req.body.name) profileFields.name = req.body.name;
    if(req.body.room) profileFields.room = req.body.room;

    Profile.findOneAndUpdate(
        {_id:req.params.id},
        {$set:profileFields},
        {new:true}
        ).then(profile => res.json(profile))
});

// $router POST api/profile/delete/:id
// @desc  删除信息接口
// @access private

routerTab.delete("/delete/:id", passport.authenticate("jwt",{session:false}),(req, res)=>{
    Profile.findOneAndRemove({_id:req.params.id}).then(profile=>{
        profile.save().then(profile => res.json(profile));
    })
    .catch(err => res.status(404).json("删除失败！"));
})
module.exports = routerTab