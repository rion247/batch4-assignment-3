import dotenv from 'dotenv';

import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  node_env: process.env.NODE_ENV,
  dbbl_url: process.env.DBBL_URL,
  port: process.env.PORT,
  saltRounds: process.env.SALT_ROUNDS,
};
