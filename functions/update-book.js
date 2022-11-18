require('dotenv').config();

const  faunadb = require('faunadb')

const { Client, query } = faunadb

const client = new Client({secret: process.env.COLLECTION.SECRET})
 
const handler = async (event) => {
     
       const book = JSON.parse(event.body)
      const  {id} = event.queryStringParameters.id

    try {
      
        const response = await client.query(query.Update(query.Ref(query.Collection('books'), id), { book }))
        console.log('successfully Book Updated', response)
        
        return {
            statusCode: 200,
            body: JSON.stringify(response),
          }
    }
   
   catch (error){
       return {
           statusCode: 500,
           body: error.toString()
       }
   }
}

module.exports = {handler}