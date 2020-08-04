const express=require('express');
const router=express.Router();
const pool=require('../pool.js')
/*1.登录    get*/
router.get('/login/:uname&:upwd',(req,res)=>{
    var $uname=req.params.uname;
    var $upwd=req.params.upwd;
    var sql='select * from xz_user where uname=? and upwd=?';
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send('1')
        }else{
            res.send('0')
        }
    })
});
/*2.用户列表   get*/
router.get('/list',(req,res)=>{
    var sql='select * from xz_user';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
});
/*3.根据uid删除用户   delete */
router.delete('/del/:uid',(req,res)=>{
    var $uid=req.params.uid;
    var sql='delete from xz_user where uid=?';
    pool.query(sql,[$uid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send('1')
        }else{
            res.send('0')
        }
    })
})
/* 4.根据uid查询用户信息    get*/
router.get('/search/:uid',(req,res)=>{
    var $uid=req.params.uid;
    var sql='select * from xz_user where uid=?';
    pool.query(sql,[$uid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
            //console.log(result);
        }else{
            res.send('0')
        }
    })
})
/*5.根据uid修改用户信息    put */
router.put('/update',(req,res)=>{
    var obj=req.body;
    var sql='update xz_user set ? where uid=?';
    pool.query(sql,[obj,obj.uid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send('1');
        }else{
            res.send('0');
        }
    })
})
/*6.根据uname查询用户   get */
router.get('/search_uname/:uname',(req,res)=>{
    var $uname=req.params.uname;
    var sql='select * from xz_user where uname=?';
    pool.query(sql,[$uname],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send('1')
        }else{
            res.send('0')
        }
    })
})
/* 根据phone查询用户   get
router.get('/search_phone/:phone',(req,res)=>{
    var $phone=req.params.phone;
    var sql='select * from xz_user where phone=?';
    pool.query=(sql,[$phone],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send('1')
        }else{res.send('0')}
    })
})*/
module.exports=router;
