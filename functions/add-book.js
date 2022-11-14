  require('dotenv').config()



const {Client,query} = require('faunadb');


 const client = new Client({secret: process.env.COLLECTION_SECRET })

const handler = async (event) => {

    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
      }
    console.log('event',event.queryStringParameters.id)
     
    //  console.log('book',book)

    try {
        const book = JSON.parse(event.body);
    // const result = await adminClient.query(
    //     q.Create(
    //       q.Collection('messages'),
    //       { data: { detail:  messageBody.message} },
    //     )
    //   )
    
    const data = { book }
  
        //  console.log('event book',book)
        //  query to save book in fauna db database
          const res = await client.query(query.Create(query.Collection('books'),{data:book}));
          console.log('get book from server ',res);
        
         return {

            statusCode: 200,
            body: JSON.stringify(res)

        }

    } catch (error){
        return {
            statusCode: 500,
            body: error.toString()
        }
    }
}

module.exports = {handler}