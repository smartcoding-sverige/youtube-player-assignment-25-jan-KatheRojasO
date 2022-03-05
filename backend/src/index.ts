import { ALL } from 'dns';
import express from 'express';
const dbSetup = require('./db-setup');

const Video = require ('./models/video');
const Id = require ('./models/id');

dbSetup();

const app = express();
app.use(express.json());

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
        .withGraphFetched('id')
        .select('etag', 'kind');
        res.json(allVideos);

    } catch (err){
        console.error(err);
        res.status(500).json(err);
    }
    
})

app.get('/id/:videoId', async (req, res, next) =>{
    try {
        const { videoId } = req.params;
        const videoName = await Id.query()
            .select("*")
            .where("videoId", videoId);
        res.json(videoName);

    } catch (err){
        console.error(err);
        res.status(500).json(err);
    }
    
})

app.listen(8080, () => console.log('server running on port 8080'))


