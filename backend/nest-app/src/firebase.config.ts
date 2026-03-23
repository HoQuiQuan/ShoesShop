import * as admin from 'firebase-admin';

let app: admin.app.App;

export function getFirebaseApp() {
  if (!app) {
    // console.log('PID:', JSON.stringify(pid));s
    app = admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.PROJECT_ID as string,
        clientEmail: process.env.CLIENT_EMAIL as string,
        privateKey: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n') as string,
      }),
    });
  }

  return app;
}
