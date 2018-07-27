
const express = require('express');
const app = express();

const Controller = require('./functions');

const server = app.listen(3001, function() {
    console.log('server running on port 3001');
});

const io = require('socket.io')(server);

io.on('connection', function(socket) {
    socket.on('sendNews', ()=>{
        console.log('Hey, i will send you news now');
        Controller.getAllPosts(
            function(err, results) {
                if (err) throw err;
                io.emit('sendNews', {articles: results });
            }
        );
    });
    socket.on('addNewArticle', (data)=>{
        Controller.addNewArticle(data , 
            function(err, results){
                if(err) throw err;
                console.log("New Article added!");
            }
        )
    })
});

app.get('/populate', function(req,res){
    Controller.populateDb(function(err,result){
        if (err) throw err;
        res.send(result);
    });
});