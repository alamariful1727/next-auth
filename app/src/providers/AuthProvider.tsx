import { PropsWithChildren } from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const AuthProvider = ({ children }: PropsWithChildren) => {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_OKTA_DOMAIN}
      clientId={import.meta.env.VITE_OKTA_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: import.meta.env.VITE_OKTA_AUDIENCE,
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
