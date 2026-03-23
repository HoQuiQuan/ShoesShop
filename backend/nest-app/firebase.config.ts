import * as admin from 'firebase-admin';
import 'dotenv/config';

const serviceAccount: admin.ServiceAccount = {
  projectId: process.env.PROJECT_ID as string,
  clientEmail: process.env.CLIENT_EMAIL as string,
  privateKey: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n') as string,
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
