const {initializeApp, cert} = require('firebase-admin/app');
const {getMessaging} = require('firebase-admin/messaging');

const serviceAccount = {
  type: 'service_account',
  project_id: 'memoriesalbum-560c6',
  private_key_id: 'bae1c5c4e616107777605436f447b02fbd4a712a',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCmKZC2TGMTddIW\n8NPQvqf8JBXyg0I8AtnEydQqS7C0FBjRDRa7EWigi/kSCb0UgZdzgYQB3gkOKE6i\nkuHau3lP03QRwvVyuHH0SAXpMF0Kgyu1o24wbB86WfuPD1xYm98J8vhBTwnd+aU8\nOE+Xkl3kEY4Ldh+OEoDPTZMFw8bSmoaVre/WSOVLNBWLTY1M14bc5IAUPxKs0/gZ\n1loEj5zDF0g1aSR8J72jzDkkf1sPiiHGjEpM+38i9NFBskWII/pjXJKWt0ewVdyc\nDg9h8L+b32kde9pBIDi9xnxvWFMane5Qa28w6WBWVLUyjYopTAn23k2BRCpqHbDU\nO8WCztpDAgMBAAECggEAB02fYyvTVPkiPUjjfnLKzl3Fqy2SvTGA4dHfJebCwv95\nIcMaAyneN+Q/E8hiy6Jwhi6knzJjooAqCKI9FBCWYehQ2zD++cZal9qMi/XIuRwP\n0UF4J9+wta9by6toqypasMTBnZk8PUnqNc3hza8sukf9Psq301ZD3Bi0RBYZSItY\n+hwSDYIAEp8Wz97/eVfnJWtBWqWK/FNY+6yGwugmdNc54iL+bg91oPiX4rt36hJz\njKQhZGfKyf0cY10OnU6Xpn8Cz9/8DTLQ7wWnDxNTcKRI1W8vvB5QigCsuh6WDqF/\nb+emXn/Y6qO+Q0PVY7SQsaEFMfH/f3btJXJ1dceVvQKBgQDgZ9NrTc7d5imjRTgF\n30/6iyv8P3HdesCOhLlltynicLo/Kh55Mg4F/8pgpipDN9GwpiBkseAm1Vj0g6CQ\nxO6mis0aO8h835HR0N1WeQ9w6p2CylB9/dr7aiwEWnxk39mr0rOap7Xn3t/m7Fz/\nlitxCoGDhkWR0hJsTlDtqh9WFwKBgQC9jn/O0wlrRxN5E3zQUXTXWCDfYS+2Vyag\nSDyZWKXRVzw4moWs1wTndfN1/iU4xETlRqpfOdzk4EJJ7P/M0JwdDC57V7T8kX/o\nrkEcvR7DEzhv1kzlJS6yNh9yolFcdTIwrjw6MaQ2ylEK+VmWTXRemuQR7TOz+GO7\nOZDSlOpktQKBgQCLSEYUEu40EliDq0HTe0Cj7F+3qBVfd4IuszhzZpVLo9YlwFm7\ntZK4rIQLKveOUwYGk4YFmdXbpI4a7dvqHyFVI0+cWcDdqNJUHURUGL25wxVSiYoe\nOUMCy2pYpWUSI1JycEvj0PZ53X6xUMGELcv21KOAZAWoNXAT4yQd73qVrwKBgElh\nEoTkGS9YMmeabaTPA6YhTYhrvOafUiqWDC9oq7ggRwW6e6jvC8z2UisJGSuifvEq\nq+V1JtfLIJ4xisykrOppvsyspTlosdVHL5mKdJAbrqtMkDPccvk2DnJ393sNO0Kx\nEEuOz/0N0NWotU+D6Fp/J27xHiS7MRBXNoLudtZJAoGBAIHJRJAdnctrwx6lmTDJ\nxFKilA+PWKSLKCh//nuDaS+qvJCyyEKqdTcG5hO3GxGhz5H2h77kAIeCEyf4CTT9\nKHAbw50+6i6XbKhTNHM8TnMNF8fbSrRs/2uqlXtp6JrqNGOF1HasHvmGQXTRSo1a\nLoSXIsLqlTUiZY6Q8EeA0UBJ\n-----END PRIVATE KEY-----\n',
  client_email:
    'firebase-adminsdk-zovc3@memoriesalbum-560c6.iam.gserviceaccount.com',
  client_id: '114630916633915317257',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zovc3%40memoriesalbum-560c6.iam.gserviceaccount.com',
};

initializeApp({
  credential: cert(serviceAccount),
});

const sendNotification = async (notification, fcmToken) => {
  const message = {
    token: fcmToken,
    notification,
  };
  await getMessaging().send(message);
};

module.exports = {
  sendNotification,
};
