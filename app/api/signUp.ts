// import axios, { AxiosError } from 'axios';
// import { NextApiRequest, NextApiResponse } from 'next';
// import dotenv from 'dotenv';

// // Load environment variables
// dotenv.config();

// // Ensure environment variables are defined
// const STORE_DOMAIN = process.env.STORE_DOMAIN || 'default_store_domain';
// const SHOPIFY_API_KEY = process.env.SHOPIFY_API_KEY || 'default_api_key';
// const SHOPIFY_API_SECRET = process.env.SHOPIFY_API_SECRET || 'default_api_secret';

// interface ShopifyAuthenticationResponse {
//     error?: string;
//     message?: string;
// }

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//         const { email, password, firstName, lastName } = req.body;

//         try {
//             const response = await axios.post(`https://${STORE_DOMAIN}/admin/api/2022-01/customers.json`, {
//                 customer: {
//                     email,
//                     password,
//                     first_name: firstName,
//                     last_name: lastName,
//                 },
//             }, {
//                 auth: {
//                     username: SHOPIFY_API_KEY,
//                     password: SHOPIFY_API_SECRET,
//                 },
//             });

//             const userData = response.data;
//             res.status(200).json(userData);
//         } catch (error) {
//             const errorMessage = getErrorMessage(error);
//             res.status(401).json({ error: errorMessage });
//         }
//     } else {
//         res.setHeader('Allow', ['POST']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }

// function getErrorMessage(error: unknown): string {
//     if (axios.isAxiosError(error)) {
//         const axiosError = error as AxiosError;
//         if (axiosError.response && axiosError.response.data) {
//             const responseData = axiosError.response.data as ShopifyAuthenticationResponse;
//             if (typeof responseData === 'string') {
//                 return responseData;
//             } else if (typeof responseData === 'object') {
//                 if (responseData.error) {
//                     return responseData.error;
//                 } else if (responseData.message) {
//                     return responseData.message;
//                 }
//             }
//         }
//     }
//     return 'Unknown error';
// }
