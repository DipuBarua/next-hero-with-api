import { MongoClient, ServerApiVersion } from "mongodb";

let db;

const connectDB = async () => {
    if (db) return db;
    try {
        const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
        console.log(uri);

        // Create a MongoClient with a MongoClientOptions object to set the Stable API version
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        db = client.db('next-hero-api')//DB-name
        return db;
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;