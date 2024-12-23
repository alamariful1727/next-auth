import { Button } from "@components/index";
import { useRouteError } from "react-router";

export const ErrorBoundary = () => {
  const error = useRouteError() as Error;

  return (
    <div className="mt-10 flex flex-col items-center justify-center space-y-4">
      <h1>Uh oh, something went terribly wrong 😩</h1>
      <pre>{error.message || JSON.stringify(error)}</pre>
      <Button theme="primary" onClick={() => (window.location.href = "/")}>
        Click here to reload the app
      </Button>
    </div>
  );
};
