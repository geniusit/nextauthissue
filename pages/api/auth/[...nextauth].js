import NextAuth from "next-auth"
export default NextAuth({
  providers: [
    {
        id: 'myprovider',
        name: 'MyProvider',
        type: 'oauth',
        version: "2.0",
        wellKnown: 'https://myprovider.com:443/openam/oauth2/IDP/.well-known/openid-configuration',
        authorization: { params: { scope: "profile", response_type: "code", client_id: "myclientid", redirect_uri: "http://localhost:8080/oidc-redirect_uri" } }
    }
  ],
})