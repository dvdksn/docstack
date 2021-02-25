const { MongoClient } = require("mongodb")

async function getData() {
    const uri = process.env.MONGO_URI
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    try {
        await client.connect()
        const data = await client
            .db(process.env.DB_NAME)
            .collection(process.env.DB_COLLECTION)
            .find({}).toArray()
        return data
    } catch (err) {
        console.log(err)
    } finally {
        await client.close();
    }
}

exports.handler = async (event, context) => {
    try {
        const data = await getData()
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    } catch (err) {
        console.log(err)
        return {
            statusCode: 500,
            body: JSON.stringify({ message: err.message })
        }
    }
}