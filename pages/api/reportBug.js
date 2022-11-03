import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method == 'POST') {
    const { name, url, email, message } = req.body;

    //Check for empty fields
    if (message.trim().length() === 0) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    // Store it in a database
    const bugReport = {
      name,
      url,
      email,
      message
    };

    let client;

    //Try to connect to the mongoDB database
    try {
      client = await MongoClient.connect('mongodb+srv://bryangranda:qXvu4bmdcrmkkrmo@cluster0.6gnmkus.mongodb.net/contact?retryWrites=true&w=majority');
    } catch (error) {
      //if attempt to connect fails, return error
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    }

    //If connection is successful, try to insert the data into the database
    try {
      const db = client.db();
      await db.collection('contacts').insertOne(bugReport);
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
