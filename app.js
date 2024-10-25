//MongoDB AND NODEJS CONNECTION


const { MongoClient } = require('mongodb');
 
const uri = 'mongodb+srv://lavanya:o7BNcsDNWqGmQpP5@cluster0.hqxu8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 
const client = new MongoClient(uri);
 
async function run() {
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');

        const database = client.db('cluster0'); 
        const collection = database.collection('userdata'); 
 
        
        const newDocuments = [
            { name: 'Alice', age: 30, city: 'New York' },
            { name: 'Bob', age: 25, city: 'Los Angeles' },
            { name: 'Charlie', age: 35, city: 'Chicago' }
        ];
 
        const insertResult = await collection.insertMany(newDocuments);
        console.log('Inserted documents:', insertResult.insertedIds);
 
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
    } finally {
        await client.close();
    }
}
 
run().catch(console.dir);