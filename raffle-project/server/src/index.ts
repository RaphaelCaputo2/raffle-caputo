import app from './app';
import dbConfig from './config/dbConfig';

const PORT = process.env.PORT || 3000;

dbConfig.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Failed to connect to the database. ${error.message}`);
  });