const express = require('express');
const app = express();
port = 5100;
app.listen(port,(req,res)=>{
  console.log("Marvellous Portal is Live");
});
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin",
  "http://localhost:4200"); 

  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-with, Content-Type,Accept");

  next();
});

app.get('/',(req,res)=>{
  res.send("Welcome to Marvellous Portal");
});
details =  [
    [
      {
        "name" : "Sumit",
        "salary" : "1000",
        "age" : 24
      },
      {
        "name" : "Vikram",
        "salary" : "2000",
        "age" : 22
      },
      {
        "name" : "Tushar",
        "salary" : "3000",
        "age" : 21
      }
    ],
    [
      {
        "name" : "Atharva",
        "salary" : "5000",
        "age" : 20
      },
      {
        "name" : "Prajwal",
        "salary" : "6000",
        "age" : 21
      },
      {
        "name" : "Sanket",
        "salary" : "8000",
        "age" : 22
      }
    ],
    [
      {
        "name" : "Ayush",
        "salary" : "2000",
        "age" : 28
      },
      {
        "name" : "Anil",
        "salary" : "1200",
        "age" : 21
      },
      {
        "name" : "Anand",
        "salary" : "1500",
        "age" : 20
      }
    ],
    [
      {
        "name" : "Suyesh",
        "salary" : "3500",
        "age" : 25
      },
      {
        "name" : "Avinash",
        "salary" : "4000",
        "age" : 26
      },
      {
        "name" : "Harsh",
        "salary" : "3300",
        "age" : 33
      }
    ],
    [
      {
        "name" : "Pravin",
        "salary" : "8000",
        "age" : 30
      },
      {
        "name" : "Hitesh",
        "salary" : "5000",
        "age" : 28
      },
      {
        "name" : "Sachin",
        "salary" : "2300",
        "age" : 24
      }
    ]
  ];

app.get('/details',(req,res)=>{
  res.send(details);
})