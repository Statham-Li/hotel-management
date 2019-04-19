// @login & register

const express = require("express");
const routerTab = express.Router();
const bcrypt = require("bcrypt");
const gravatar = require('gravatar');
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

const User = require('../model/userMsg')
// $router POST api/user/register
// @desc  返回请求数据json
// @access public
routerTab.post("/register",(req,res)=>{
    // 查询数据库中是否拥有邮箱
    User.findOne({email:req.body.email})
    .then((user)=>{
        if(user){
            return res.status(400).json({email:"邮箱已被注册"})
        }else{
            const avatar = gravatar.url(req.body.email,{s:'200',r:'pg',d:'mm'})
            const newUser = new User({
                name:req.body.name,
                email:req.body.email,
                avatar,
                identity:req.body.identity,
                password:req.body.password
            })
            bcrypt.genSalt(10, function(err,salt){
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    // Store hash in your password DB.
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                           .then(user => res.json(user))
                           .catch(err => console.log(err))
                });
            })
        }
    })
})
// $router POST api/user/login
// @desc  返回token jwt password
// @access public
routerTab.post("/login",(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    // 查询数据库
    User.findOne({email})
        .then(user => {
            if(!user){
                return res.status(404).json("用户不存在！")
            }

            // 密码匹配
            bcrypt.compare(password, user.password)
                  .then(isMatch=>{
                      if(isMatch){
                          const rule = {
                              id:user.id,
                              name:user.name,
                              avatar:user.avatar,
                              identity:user.identity
                            }
                          jwt.sign(rule,keys.secretOrKey,{expiresIn:3600},(err,token)=>{
                            if(err) throw err;  
                            res.json({
                                  success:true,
                                  token:"Bearer "+token
                              })
                          })
                        //   res.json({msg:"success"});
                      }else{
                          return res.status(400).json("密码错误！")
                      }
                  })
        })
})

// $router GET api/user/current
// @desc  返回 current user
// @access Private

routerTab.get("/current", passport.authenticate("jwt",{session:false}),(req,res)=>{
    res.json({
        id:req.user.id,
        name:req.user.name,
        email:req.user.email,
        identity:req.user.identity
    });
})

module.exports = routerTab