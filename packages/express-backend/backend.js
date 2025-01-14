import express from "express";

//create express application 
const app = express();
const port = 8000;

//process in JSON
app.use(express.json());

const users = {
    users_list: [
      {
        id: "xyz789",
        name: "Charlie",
        job: "Janitor"
      },
      {
        id: "abc123",
        name: "Mac",
        job: "Bouncer"
      },
      {
        id: "ppp222",
        name: "Mac",
        job: "Professor"
      },
      {
        id: "yat999",
        name: "Dee",
        job: "Aspring actress"
      },
      {
        id: "zap555",
        name: "Dennis",
        job: "Bartender"
      }
    ]
  };

//basic get endpoint
app.get('/', (req,res) => {
    res.send("Hello, World!");
});

//return the users JSON
app.get("/users", (req,res)=>{
    res.send(users);
});

//
app.listen(port, () => {
    console.log(
        `Example app listening at http://localhost:${port}`
    )
})
