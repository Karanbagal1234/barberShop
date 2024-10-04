import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("hello");
});

app.use("*", (req, res) => {
    res.send("df");
});

export default app;
