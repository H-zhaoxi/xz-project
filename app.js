const express=require('express');
const proRouter=require('./routes/pro.js');
const bodyParser=require('body-parser');
const app=express();
app.listen(5050);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended:false
}));
app.get('/user', (req, res)=>{
    pool.query('SELECT * FROM xz_user',(err, result)=>{
        if (err) throw err;
        // 来自任何客户端都允许访问 跨域访问
        res.set('Access-Control-Allow-Origin', "*");
        res.json(result);
    });
});
app.use('/pro',proRouter);