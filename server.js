const express = require('express');
const mongoose = require('mongoose'); //引入mongoose
const bodyParser = require('body-parser');
const passport = require("passport")
const app = express();

// 引入 user.js
const user = require("./api/user")
const profile = require("./api/profile")
// DB config
const db = require("./config/keys").mongoURI

// 使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false})) // 解决x-www-form-urlencoded
app.use(bodyParser.json());

// passport 初始化
app.use(passport.initialize())
require("./config/passport")(passport)

 //连接 MongoDB 数据库名：密码
 mongoose.connect(db)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err))


// 使用routes
app.use("/api/user",user)
app.use("/api/profile",profile)

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})