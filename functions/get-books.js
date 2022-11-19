require('dotenv').config();
const  faunadb = require('faunadb')

const {Client,query } = faunadb


const client = new Client({secret: process.env.COLLECTION_SECRET })

const handler = async (event,context) => {

    

    try {
        
        const result = await client.query(
            query.Map(
              query.Paginate(query.Documents(query.Collection("books"))),
              query.Lambda(x => query.Get(x))
            )
          )
        const  books =  result.data.map(book=>(
            { 
              id: book.ref.id,
              name: book.data.name,
              author: book.data.author,
              cover: book.data.cover,
              date: book.data.date
            }
            ))
         console.log('get-book function result',books[0].id)
        return {

            statusCode: 200,

            body: JSON.stringify(books)

        }

    } catch (error){
        return {
            statusCode: 500,
            body: error.toString()
        }
    }
}

 module.exports = {handler}