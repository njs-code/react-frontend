import express from "express";

//create express application 
const app = express();
const port = 8000;

//process in JSON
app.use(express.json());

const users = {
    users_list: [
      {
        id: "xmp789",
        name: "Charlie",
        job: "Electrician"
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


const findUserByName = (name)=> {
  //return matching users
  return users["users_list"].filter(
    (user) => user["name"] === name
  );
};

//return the users JSON
app.get("/users", (req,res)=>{
    const name = req.query.name;
    //if name then filter for matching users
    if (name != undefined){
      let result = findUserByName(name);
      result = {users_list: result};
      res.send(result);
    //otherwise send all users
    } else{
      res.send(users);
    }
});

//
app.listen(port, () => {
    console.log(
        `Example app listening at http://localhost:${port}`
    )
})
