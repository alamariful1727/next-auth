/* eslint-disable @typescript-eslint/no-misused-promises */
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@components/index";

const HomePage = () => {
  const { isAuthenticated, user, logout } = useAuth0();

  const handleLogout = async () => {
    await logout({ logoutParams: { returnTo: window.location.origin } });
  };
  return (
    <div className="container mx-auto">
      {isAuthenticated ? (
        <div className="mt-10 flex flex-col items-center space-y-2">
          <p>Welcome to the authenticated home page!</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <Button theme="primary" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      ) : (
        <p>Welcome to the home page!</p>
      )}
    </div>
  );
};

export default HomePage;
