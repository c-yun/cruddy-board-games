var express = require('express');
var methodOverride = require('method-override');
var db = require("./models");
var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));

app.get('/', function(req,res) {
    res.render("index");
});

app.get("/games", function(req,res) {
    // Try and get all the records
    db.game.findAll().then(function(games) {
        // Find data within data object
        console.log(games);
        // res.render data into ejs page
        res.render("games/index", {games});
    });
});

app.get('/games/new', function(req,res) {
    res.render('games/new');
});


app.post("/games", function(req,res) {
    db.game.findOrCreate({
        where: {
            name: req.body.name,
            description: req.body.description,
            players: req.body.players
        },
        defaults: {}
        }).spread(function(game, created) {
        console.log(game);
        res.redirect("/games");
        });
    
    });

app.get("/games/:id", function(req,res) {
    db.game.findById(parseInt(req.params.id)).then(function(game) {
        res.render("games/show", {game});
    });
});

app.delete("/games/:id", function(req,res) {
    db.game.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(game) {
        res.redirect("/games");
    });
});

app.get("/games/:id/edit", function(req,res) {
    db.game.findById(parseInt(req.params.id)).then(function(game) {
        res.render("games/edit", {game});
    });
});

app.put("/games/:id", function(req,res) {
    db.game.update({
        name: req.body.name,
        description: req.body.description,
        players: req.body.players // players: parseInt(req.body.players)
    }, {
        where: {
            id: req.params.id
            // {id: parseInt(req.params.id)}
        }
        }).then(function(game) {
        res.redirect("/games/" + parseInt(req.params.id));
        }).catch(function(err) {
            res.send(err.errors[0]);
        });
    });



app.listen(3000);