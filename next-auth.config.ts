/* eslint-disable import/no-anonymous-default-export */
export default {
  providers: [
    {
      id: 'shopify',
      name: 'Shopify',
      type: 'oauth',
      version: '2.0',
      scope: 'read_customers', // Adjust scopes as needed
      params: { grant_type: 'authorization_code' },
      accessTokenUrl: 'https://alfaro-ecom.myshopify.com/admin/oauth/access_token',
      authorizationUrl: 'https://alfaro-ecom.myshopify.com/admin/oauth/authorize',
      clientId: '{your-client-id}',
      clientSecret: '{your-client-secret}',
    },
  ],
  // Add other configurations as needed
};
