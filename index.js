const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Backend server where the frontend makes the API calls to fetch the data 
app.use(bodyParser.json());


//database connection stored through config variable 
mongoose.connect(process.env.MY_DB, { useUnifiedTopology: true,  useNewUrlParser: true  })
    .then(function(){
        console.log('mongodb connected')
    }).catch(function(err){
        console.log(err);
    });

    mongoose.set('useFindAndModify', false);

//creates the schema for how the item should look

const ItemSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    description:{
        type: String,
    },
    id:{
        type: String,
        required: true
    }
})

//creates the schema for how the user should look with a name, an id, and an array of items called a list
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    list: [ItemSchema],
    id:{
        type: String,
        required: true
    }
})

const Item = mongoose.model("Item", ItemSchema);
const User = mongoose.model("User", userSchema);


//the api call to get all the users in the database

app.get('/api/users', function(req, res){
    User.find({}, function(err, foundUsers){
        res.json(foundUsers);
    })
})


//finding all the list items under a certain user id

app.get('/api/users/initList', function(req, res){
    console.log(req.query.id);  
    User.find({"id": req.query.id}, function(err, foundUsers){
        console.log(foundUsers);
        res.json(foundUsers);
    })
})


//creating a new user 

app.post('/api/users', function(req, res){
    const newUser = new User({
        name: req.body.name,
        list: req.body.list,
        id: req.body.id

    })

    newUser.save().then(item=>res.json(item));
})

//updating the user item list whenever an item is added

app.patch('/api/users', function(req, res){
    console.log(req.body.list);
    User.findOneAndUpdate({"id":req.body.id}, {$push: {list: req.body.list[req.body.list.length-1]}}, function(err,x){
        if(err){
            console.log(err);
        }
        res.json(x);
    })
})

//updating the user item list whenever an item is deleted

app.patch('/api/users/deleteItem', function(req, res){
    console.log(req.body.list);
    User.findOneAndUpdate({"id":req.body.id}, {$pull: {list: {"id": req.body.list}}}, function(err,x){
        if(err){
            console.log(err);
        }
        res.json(x);
    })
})

//deleting a user from the database

app.delete('/api/users/delete', (req, res)=>{
    console.log(req.body.name)
    User.findOneAndRemove({"name":req.body.name}, function(err, x){
        if(!x){
            res.send("there was an error");
        }
        else{
        res.send(x);
        }
    });
});

//getting all the items from a certain user

app.get('/api/items', (req, res)=>{
    Item.find({}, function(err, foundItems){
        res.json(foundItems)
    })
})

//adding a new item to the database
app.post('/api/items', (req, res)=>{
    const newItem = new Item({
        title: req.body.title,
        description: req.body.description,
        id: req.body.id
    })

    newItem.save().then(item =>res.json(item));
})

//deleting an item from the database
app.delete('/api/items/delete', (req, res)=>{
    Item.findOneAndRemove({id:req.body.id}, function(err, x){
        if(err){
            console.log(err);
        }
        res.json(x);
    });
});

//for deploying the database on heroku
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);