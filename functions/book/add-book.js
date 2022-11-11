require('dotenv').config()

const {client,query} = require('faunadb');


 const client = new client({secret: process.env.COLLECTION_SECRET})

const handler = async (event) => {

     const book = JSON.parse(event.body);

    try {
        //  console.log('event book',event)
        //  const res = await client.query(query.Create(query.Collection('books'),book));
        //  console.log('book',res);
        
         return {

            statusCode: 200,

            body: JSON.stringify(book)

        }

    } catch (error){
        return {
            statusCode: 500,
            body: error.toString()
        }
    }
}

module.exports = {handler}