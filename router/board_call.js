//라우터 쪼개기
const express = require('express');
const router =  express.Router();

//mysql연동
const mysql = require('mysql');
const dbconfig = require('../config/database.js');//db router
const connection = mysql.createConnection(dbconfig);

//메세지 전송 기능 모듈
const send_message = require('../server/js/send_msg.js');
const { sendVerificationSMS } = require("../server/js/send_msg.js");

//고객 정보
var user={};
let call_d;
let call_cons_d;
let filter_cons_name = "ALL";//filter기능 사용할 상담원 id 저장

let flag = 0;
//filter기능 이용 후 call정보 update(submit)시 filter 후의 정보가 뜨는 것이 아니라 전체 정보가 
//다 보임. 이를 flag를 이용하여 get에 접근했는지 안했는지로 정함 
// 0 접근 안함, 1 접근함

//로그인
router.get('/call', (req, res) => {
    //console.log(req.session.users);
    //고객정보 session으로 받아오기
    user.ID = req.session.users.user_ID;
    user.PW = req.session.users.user_PW;
    user.CP = req.session.users.user_CP;

    connection.query('SELECT * FROM g_consultant WHERE conID = ?',[user.ID], function(error, result){
        if(error) throw error;
        user.AUTH = result[0].authCD;
        user.NAME = result[0].cpNM;

        if(flag === 0){//filter사용 전
            flag =1;
            if(user.AUTH === 1){
                //super관리자 전체 노출
                const sql1 = "SELECT * FROM g_call";
                connection.query(sql1,(err, result,field)=>{
                    if(err) throw err;
                    call_d =result;
                    
                    //filtering을 위한 상담원 정보 받아 오기, call_cons_d
                    const sq1_cons = "SELECT * FROM g_consultant";
                    connection.query(sq1_cons, function(error, result){
                        if(error) throw error;
                        call_cons_d = result;
                        res.render('call',{ 
                            accessor : user, 
                            call:call_d,
                            status: "hide",
                            call_cons_d: call_cons_d,
                            filter_status:"show",//필터기능 노출 여부
                            filter_cons_name : filter_cons_name,
                        }); 
                    })
                });
            }
            else if(user.AUTH === 2){
                //관리자 cpID call만 노출, call_d
                const sql2 = "SELECT * FROM g_call where cpID= ? ";
                connection.query(sql2,[user.CP],(err, result,field)=>{
                    if(err) throw err;
                    call_d =result;

                    console.log(call_d);
                    //filtering을 위한 상담원 정보 받아 오기, call_cons_d
                    const sq2_cons = "SELECT * FROM g_consultant WHERE cpID = ? ";
                    connection.query(sq2_cons,[user.CP],function(err,result){
                        if(err) throw err;
                        call_cons_d = result;
                        res.render('call',{ 
                            accessor : user, 
                            call:call_d,
                            status: "hide",
                            call_cons_d: call_cons_d,
                            filter_status:"show",
                            filter_cons_name : filter_cons_name,
                        }); 
                    })
                });
            }
        }else if(flag === 1){//filter사용 후
            if(user.AUTH === 1){
                //super관리자 전체 노출
                //filtering을 위한 상담원 정보 받아 오기, call_cons_d
                const sq1_cons = "SELECT * FROM g_consultant";
                connection.query(sq1_cons, function(error, result){
                    if(error) throw error;
                    call_cons_d = result;
                    res.render('call',{ 
                        accessor : user, 
                        call:call_d,
                        status: "hide",
                        call_cons_d: call_cons_d,
                        filter_status:"show",//필터기능 노출 여부
                        filter_cons_name : filter_cons_name,
                    }); 
                })
            }
            else if(user.AUTH === 2){
                //관리자 cpID call만 노출, call_d
                //filtering을 위한 상담원 정보 받아 오기, call_cons_d
                const sq2_cons = "SELECT * FROM g_consultant WHERE cpID = ? ";
                connection.query(sq2_cons,[user.CP],function(err,result){
                    if(err) throw err;
                    call_cons_d = result;
                    res.render('call',{ 
                        accessor : user, 
                        call:call_d,
                        status: "hide",
                        call_cons_d: call_cons_d,
                        filter_status:"show",
                        filter_cons_name : filter_cons_name,
                    }); 
                })
            }
        }

        
        if(user.AUTH === 3){
            //상담원 conID call만 노출
            const sql2 = "SELECT * FROM g_call where conID= ? ";
            connection.query(sql2,[user.ID],(err, result,field)=>{
                if(err) throw err;
                call_d =result;
                res.render('call',{ 
                    accessor : user, 
                    call:result,
                    status: "hide",
                    filter_status:"hide",
                });  
            });
        }
    });
});

//call
//-call 추가
router.post('/call/create',(req,res)=>{
    const sql = "INSERT INTO g_call SET ? "
    connection.query(sql,req.body, (err,result,fields)=>{
        if(err) throw err;
        // console.log(result);
        res.redirect('/call');
    })
})

//-edit파일로 이동
router.get('/call/:id',(req,res)=>{
    const sql = "SELECT* FROM g_call WHERE callID = ?";
    connection.query(sql, [req.params.id], function(err,result,fields){
        if(err) throw err;
        
        //filer하는 버튼 노출 때문에 if문 사용
        if(user.AUTH === 1 || user.AUTH === 2 ){
            res.render('call',{
                call:call_d,
                accessor : user,
                call_data: result,
                status:"show",
                call_cons_d: call_cons_d,
                filter_status:"show",
                filter_cons_name : filter_cons_name,
            });
        }else{
            res.render('call',{
                call:call_d,
                accessor : user,
                call_data: result,
                status:"show",
                call_cons_d: call_cons_d,
                filter_status:"hide",
            });
        }
    });
});

//-call 수정
router.post('/call/update/:id',(req,res)=>{
    const sql = "UPDATE g_call SET ? WHERE callID = ?";
    connection.query(sql,[req.body, req.params.id],(err,result,fields)=>{
        if(err) throw err;
        res.redirect('/call');
    })
})

//-call 삭제
router.get('/call/delete/:id',(req,res)=>{
    const sql = "DELETE FROM g_call WHERE callID = ?";
    connection.query(sql,[req.params.id],(err,result,fields)=>{
        if(err) throw err;
        res.redirect('/call');
    })
})

//-filter기능
router.post('/call/filter',(req,res)=>{
    flag = 1;// filter기능 사용
    filter_cons_name = req.body.conID;//filter select box안에 정보 저장
    //super관리자의 경우
    if(user.AUTH === 1 ){
        if(req.body.conID === "ALL"){//모든 정보를 보여줌
            const sql1 = "SELECT * FROM g_call";
            connection.query(sql1, function(err,result,fields){
                call_d = result;//모든 정보를 보여줌
                res.render('call',{
                    call:call_d,
                    accessor : user,
                    // call_data: result,
                    status:"hide",
                    call_cons_d: call_cons_d,
                    filter_status:"show",
                    filter_cons_name : filter_cons_name,
                });
            });
        }
        else{
            const sql = "SELECT * FROM g_call WHERE conID = ? ";
            connection.query(sql, req.body.conID, function(err,result,fields){
                if(err) throw err;
                // console.log(req.body.conID);
                call_d = result;//해당 conID 정보만 보이게 함
                res.render('call',{
                    call:call_d,
                    accessor : user,
                    // call_data: result,
                    status:"hide",
                    call_cons_d: call_cons_d,
                    filter_status:"show",
                    filter_cons_name : filter_cons_name,
                });
            });
        }
    }
    //관리자의 경우
    else if(user.AUTH === 2){
        if(req.body.conID === "ALL"){
            const sql2 = "SELECT * FROM g_call WHERE cpID = ? ";
            connection.query(sql2, user.CP,function(err,result,fields){
                call_d = result;//해당 회사 정보만 보이게 함
                res.render('call',{
                    call:call_d,
                    accessor : user,
                    // call_data: result,
                    status:"hide",
                    call_cons_d: call_cons_d,
                    filter_status:"show",
                    filter_cons_name : filter_cons_name,
                });
            });
        }else{
            const sql = "SELECT * FROM g_call WHERE conID = ? and cpID = ? ";
            connection.query(sql, [req.body.conID, user.CP], function(err,result,fields){
            if(err) throw err;
            // console.log(req.body.conID);
            call_d = result;//해당 conID 정보만 보이게 함
            res.render('call',{
                call:call_d,
                accessor : user,
                // call_data: result,
                status:"hide",
                call_cons_d: call_cons_d,
                filter_status:"show",
                filter_cons_name : filter_cons_name,
            });
        });
        }
    }
    
});

//메세지 전송 기능
router.get('/call/send',sendVerificationSMS);


//auth 데이터 불러오기
router.get('/auth', (req, res) => {
    const sql = "SELECT * FROM g_auth";
    connection.query(sql,(err, result,field)=>{
        if(err) throw err;
        // console.log(result);
        res.render('auth',{accessor : user, auth:result});        
    });
})

module.exports = router;