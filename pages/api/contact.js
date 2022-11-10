import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method == 'POST') {
    const { email, name, message } = req.body;

    //Check for empty fields
    if (email.trim().length === 0 || email.includes('@') === false) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    // Store it in a database
    const newMessage = {
      email,
      name,
      message
    };

    //Try to connect to the mongoDB database
    let client;
    try {
      client = await MongoClient.connect(`${process.env.MONGODB_URI}`);
    } catch (error) {
      //if attempt to connect fails, return error
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    }

    //If connection is successful, try to insert the data into the database
    try {
      const db = client.db();
      await db.collection('contacts').insertOne(newMessage);
    } catch (error) {
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    client.close();

    //Successful response
    res.status(201).json({ message: 'Successfully stored message!' });
    res.end();
  }
}
