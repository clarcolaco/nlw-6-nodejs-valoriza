import express, { request } from "express";

//@types/express
const app = express();

app.get("/test", (request, response) => {
    //request => entrando
    //response => saindo
    response.send("Olá NLW! Clarissa, felixxx")
})
app.post("/test-post", (request, response) => {
    //request => entrando
    //response => saindo
    response.send("Primeiro post")
})
// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));