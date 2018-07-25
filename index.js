const express = require('express');


const app = express();

const server = app.listen(3001, function() {
    console.log('server running on port 3001');
});

var news = [
    {
        id: 1,
        title: 'Trump invaded Serbia',
        category: 'Politics',
        author: 'Bojan Popovic'
    },
    {
        id: 2,
        title: 'SAE enrolls new students',
        category: 'Education',
        author: 'Bojana Tomasevic'
    },
    {
        id: 3,
        title: 'Croatia wins World Cup against Serbia',
        category: 'Sport',
        author: 'Demi Lovato'
    },
    {
        id: 4,
        title: 'Race to rescue flooded villagers',
        category: 'World',
        author: 'John Barton'
    }
]
const io = require('socket.io')(server);

io.on('connection', function(socket) {
    socket.on('sendNews', ()=>{
        console.log('hey, i will send you news now');
        io.emit('sendNews', {articles: news});
    })

});