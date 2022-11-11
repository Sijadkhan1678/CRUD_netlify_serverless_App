const {client,query} = require('faunadb');


const client = new client({secret:"Token here"})

const handler = async (event,context) => {

    const book = JSON.parse(event.body);

    try {
        
        const res = await client.query(query.Create(query.Collection('here collection name'),book));
        console.log('book',res);
        
        return {

            statusCode: 200,

            body: JSON.stringify({"id":"wellcome income library"})

        }

    } catch (error){
        return {
            statusCode: 500,
            body: error.toString()
        }
    }
}

 module.exports = {handler}