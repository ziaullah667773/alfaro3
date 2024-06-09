// import { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';

// const { SHOPIFY_CLIENT_ID, SHOPIFY_CLIENT_SECRET } = process.env;

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { code, shop, hmac, state } = req.query;

//   if (!code || !shop || !hmac || !state) {
//     return res.status(400).send('Missing required parameters');
//   }

//   try {
//     const accessTokenResponse = await axios.post(`https://${shop}/admin/oauth/access_token`, {
//       client_id: SHOPIFY_CLIENT_ID,
//       client_secret: SHOPIFY_CLIENT_SECRET,
//       code,
//     });

//     const accessToken = accessTokenResponse.data.access_token;

//     // Save the access token to your database
//     // Redirect to your app's frontend or dashboard
//     res.redirect(`/?shop=${shop}&token=${accessToken}`);
//   } catch (error) {
//     res.status(500).send('Failed to get access token');
//   }
// }
