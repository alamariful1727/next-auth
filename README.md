# Manager UI

It's the new version of the application.

Figma design : [click here](<https://www.figma.com/proto/3Xk3Kl5HrjmDHNCL305uak/FIGMA-alert-ready-manager-(1)?node-id=1758-15403&starting-point-node-id=1758%3A15403&show-proto-sidebar=1>)

## Environment Files (.env)

[Env Variables and Modes](https://vite.dev/guide/env-and-mode)

Vite uses dotenv to load additional environment variables from the following files in your environment directory:

```bash
.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.[mode]         # only loaded in specified mode
.env.[mode].local   # only loaded in specified mode, ignored by git
```

In this project, we've 3 different environments.

```bash
.env.development # Works locally and development
.env.staging # Works in staging
.env.production # Works in production
```

### Rules to add environment variables

E.g: Add a variable named `VITE_APP_TITLE` in the environment file.

```bash
VITE_APP_TITLE=Alert Ready - Manager (Development)
```

Use this variable like this below:

HTML:

```html
<title>%VITE_APP_TITLE%</title>
```

Typescript:

```tsx
console.log(import.meta.env.VITE_APP_TITLE);
```

_Also add type for environment variable `vite-env.d.ts` like below:_

```tsx
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // more env variables...
}
```
