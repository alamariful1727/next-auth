/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_OKTA_DOMAIN: string;
  readonly VITE_OKTA_CLIENT_ID: string;
  readonly VITE_OKTA_AUDIENCE: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
