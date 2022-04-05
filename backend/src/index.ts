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


