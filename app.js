const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://ashil:Superman1275@ac-gawvbv0-shard-00-00.pzyiuyr.mongodb.net:27017,ac-gawvbv0-shard-00-01.pzyiuyr.mongodb.net:27017,ac-gawvbv0-shard-00-02.pzyiuyr.mongodb.net:27017/nssvolunteerdb?ssl=true&replicaSet=atlas-mzsy2b-shard-0&authSource=admin&appName=Cluster0').then(
    () => {
        console.log('Connected to MongoDB');
    }
).catch(
    (error) => {
        console.error('Error connecting to MongoDB:', error);
    }
)

const Team = mongoose.model('Team', new mongoose.Schema(
    {
        volunteeeId: String,
        fullName: String,
        email: String,
        phone: Number,
        dob: String,
        gender: String,
        bloodGroup: String,
        department: String,
        yearOfStudy: String,
        campName: String,
        hoursCompleted: String,
        address: String,
        unitNumber: Number
    }
));