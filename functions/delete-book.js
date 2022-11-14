require('dotenv').config();
const  faunadb = require('faunadb')

const { Client, query } = faunadb

const client = new Client({secret: process.env.COLLECTION.SECRET})
 
const handler = async (event) => {
     
    //   get book id by queryStringParameters and use it to find book and delete it from Database
    // const  id = event.queryStringParameters.id

    try {
    //  using id variable to get
    //     const response = await client.query(query.Delete(query.Ref(query.Collection('books'), id)))
    // console.log('successfully Book deleted', response)
        
        // return {
        //     statusCode: 200,
        //     body: JSON.stringify(response),
        //   }
    }
   
   catch (error){
       return {
           statusCode: 500,
           body: error.toString()
       }
   }
}

module.exports = {handler}