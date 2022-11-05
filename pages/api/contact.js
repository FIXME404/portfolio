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

    let client;

    try {
      client = MongoClient.connect('mongodb+srv://bryangranda:qXvu4bmdcrmkkrmo@cluster0.6gnmkus.mongodb.net/contact?retryWrites=true&w=majority');
    } catch (error) {
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    }

    try {
      const db = client.db();
      console.log(db, '***************************************');
      await db.collection('contacts').insertOne(newMessage);
      console.log(db, '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    } catch (error) {
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    client.close();

    res.status(201).json({ message: 'Successfully stored message!' });
    res.end();
  }
}
