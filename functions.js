const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'usersdb';
let db;

MongoClient.connect(url, (err, client)=> {
	if (err) throw err;
    db = client.db(dbName);
})

exports.getAllPosts = function(callback) {
	const blogPosts = db.collection('blogPosts');
	blogPosts.find().toArray(callback);
}

exports.populateDb = function(callback){ 
    const blogPosts = db.collection('blogPosts');
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
