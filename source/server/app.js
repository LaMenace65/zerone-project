const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routers/userRouter');
const questionRouter = require('./routers/questionRouter');
const answerRouter = require('./routers/answerRouter');
const categoryRouter = require('./routers/categoryRouter');
const tagRouter = require('./routers/tagRouter');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/users', userRouter);
app.use('/api/questions', questionRouter);
app.use('/api/answers', answerRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/tags', tagRouter);

app.get('/', (req, res) => {
    res.send('Hello from Node API Server updated');
})

mongoose.connect('mongodb+srv://maximefrance:IIVA9mh1rMSEBybU@clustermax.ld9bxpn.mongodb.net/ZeroneDB?retryWrites=true&w=majority&appName=ClusterMax', {})
    .then(() => {
        console.log('Connected to MongoDB!');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((err) => {
        console.log("Connection failed!")
    })
