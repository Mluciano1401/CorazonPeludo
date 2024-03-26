import { connect, disconnect } from './config/dbContext/dbContext';
import * as express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Connect to database
Product.initModel(sequelize)
  .sync({ force: true }) // Use force: false in production
  .then(() => console.log('Database connected'))
  .catch(console.error);

app.listen(port, () => console.log(`Server listening on port ${port}`));
