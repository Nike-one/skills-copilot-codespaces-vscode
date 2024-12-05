//create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//define comments array
var comments = [
    { id: 1, author: "John", text: "This is my first comment" },
    { id: 2, author: "Alice", text: "This is my second comment" },
    { id: 3, author: "Bob", text: "This is my third comment" }
];

//define get method
app.get('/api/comments', function(req, res) {
    res.json(comments);
});

//define post method
app.post('/api/comments', function(req, res) {
    var newComment = {
                id: comments.length + 1,
                author: req.body.author,
                text: req.body.text
            };
            comments.push(newComment);
            res.json(newComment);
        });