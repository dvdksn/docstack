const { MongoClient } = require("mongodb")

async function getData() {
    const uri = process.env.MONGO_URI
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    try {
        await client.connect()
        const test = await client
            .db("dev")
            .collection("stacks")
            .findOne({ name: "MkDocs"})
    } catch (err) {
        console.log(err)
    } finally {
        await client.close();
    }
}

export const handler = async (event, context) => {
    try {
        const data = await getData()
        return {
            statusCode: 200,
            body: JSON.stringify({ id: data._id })
        }
    } catch (err) {
        console.log(err)
        return {
            statusCode: 500,
            body: JSON.stringify({ message: err.message })
        }
    }
}