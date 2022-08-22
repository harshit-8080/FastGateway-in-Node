const gateway = require('fast-gateway')

function mw1(req, res, next) {

    if(req.headers.token === "MyToken"){
        next();
    }
    else{
        res.statusCode = 400;
        res.send({
            "msg":"request is wrong or not allowed",
            "middleware" : "mw1"
        })
    }
}

function mw2(req, res, next) {
    //console.log("form =", req.headers);
    if(req.headers.from === "chapra"){
        next();
    }
    else{
        res.statusCode = 400;
        res.send({
            "msg":"request is wrong or not allowed",
            "middleware" : "mw2"
        })
    }
}




const server = gateway({
  routes: [
   {
    prefix: '/user',
    target: 'http://127.0.0.1:4001/',
    methods:["GET"]
   },

   {
    prefix: '/product',
    target: 'http://127.0.0.1:4002/',
    middlewares:[mw1, mw2]
   }

]
})

server.start(3000).then(()=> {
    console.log("api gateway started at 3000");
})