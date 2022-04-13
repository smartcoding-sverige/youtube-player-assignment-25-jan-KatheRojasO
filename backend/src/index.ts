import express from 'express';
const bodyParser = require('body-parser');
const cors = require('cors');
const dbSetup = require('./db-setup');
const Video = require ('./models/video');
const User = require ('./models/user');
const Favorite = require ('./models/favorite');
const jwt = require ('jsonwebtoken');



dbSetup();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/video/:videoId', async (req, res, next) =>{
    try {
        const { videoId } = req.params;
        const video = await Video.query()
            .select('*')
            .where('videoId', videoId);
        res.json(video);

    } catch (err){
        console.error(err);
        res.status(500).json(err);
    }
    
})

app.get('/videos', async (req, res, next) =>{
    try {
        const allVideos = await Video.query()
            .select('name', 'videoId');
        res.json(allVideos);

    } catch (err){
        console.error(err);
        res.status(500).json(err);
    }
    
})

app.post('/videos', async (req, res, next) =>{
    try {
        for (let i=0; i < req.body.length; i++){
            const name = req.body[i].name;
            const videoId = req.body[i].videoId;
            const videoSaver = await Video.query()
                .insert({
                    'videoId': videoId,
                    'name': name   
                })
            res.end();
        }
    } catch (err){
        console.error(err);
        res.status(500).json(err);
    }
})


app.get('/favorites/:userId', async (req, res, next) =>{
    try {
        const { userId } = req.params;
        const favoriteVideos = await Favorite.query()
            .select('video_id')
            .where('user_id', userId);
        res.json(favoriteVideos);

    } catch (err){
        console.error(err);
        res.status(500).json(err);
    }
    
})

app.post('/favorites/add', async (req, res, next) => {
    
    try {
        const user = req.body.user;
        const videoId = req.body.videoId;
        const selectedUser = await User.query()
            .select('id')
            .where('user', user)
        const userId = selectedUser[0].id
        const favorites = await Favorite.query()
            .insert({
                'user_id': userId,
                'video_id': videoId
            })
        res.end();
    } catch (err){
        console.error(err);
        res.status(500).json(err);
    }
})

app.post('/favorites', async (req, res, next) => {
    
    try {
        const user = req.body.user;
        const videoId = req.body.videoId;
        const selectedUser = await User.query()
            .select('id')
            .where('user', user)
        const userId = selectedUser[0].id
        const selectedFavorite = await Favorite.query()
            .select('favoriteId')
            .where('user_id', userId)
            .where('video_id', videoId)

        if (selectedFavorite.length != 0){
            res.status(200);
        } else{
            res.status(204);
        }
        res.end();

    } catch (err){
        console.error(err);
        res.status(500).json(err);
    }
})

app.delete('/favorites', async (req, res, next) => {
    try{
        const user = req.body.user;
        const videoId = req.body.videoId;
        const selectedUser = await User.query()
            .select('id')
            .where('user', user)
        const userId = selectedUser[0].id        

        const unfavorite = await Favorite.query()
            .delete()
            .where('user_id', userId)
            .where('video_id', videoId)

    }catch (err){
        console.error(err);
        res.status(500).json(err);
    }

})

app.post('/login', async (req, res, next) =>{
    try {
        const user = req.body.user;
        const password = req.body.password;
        const login = await User.query()
            .select('user')
            .where({
                'user': user,
                'password': password
            })

        if (login.length != 0){
            const accessToken=jwt.sign({username:user}, 'secret');
            res.status(200).json(accessToken);
        } else{
            res.status(401);
        }
        res.end();

    } catch (err){
        console.error(err);
        res.status(500).json(err);
    }
    
})

app.listen(8080, () => console.log('server running on port 8080'))


