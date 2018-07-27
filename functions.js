let blogPosts = {};

const mongo = require('mongodb');

const database = require('./db').then(function(db) {
	blogPosts = db.collection('blogPosts');
});

exports.getAllPosts = function(callback) {
	blogPosts.find().toArray(callback);
}
exports.populateDb = function(callback){
	blogPosts.insertMany([
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
        },  
	], callback);
}

exports.addNewArticle = function (arg, callback){
    const blogPosts = db.collection('blogPosts');
    blogPosts.insertOne({ 
        'title' : arg.title,
        'category' : arg.category,
        'author' : arg.author
    }, callback)
}
