const express = require("express"); 
const gql = require("graphql-request").gql;
const request = require("graphql-request").request;
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*'
}));

const PORT = process.env.PORT || 4000;

app.get('/', (req, res)=>{
    res.status(200);
    res.send("BCBS server - get successful");
});

app.get('/movies', (req, res) => {
    const query = gql`  
        {
            Page(page: 1, perPage: 10) {
            media(sort: POPULARITY_DESC) {
                id
                title {
                    english
                }
                description
                coverImage {
                    large
                }
            }
        }      
    }`;

    request('https://graphql.anilist.co', query).then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log('Error in /movies request.')
        res.send(err);
    });
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log(`Server running on port ${PORT}`)
    else 
        console.log("Error occurred, server can't start", error);
    }
);