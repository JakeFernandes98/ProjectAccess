## Project Access

This project aims to build a platform and matching algorithm for Project Access, which is a chairty that provides one-to-one mentorships for students from less privileged backgrounds to apply for top universities.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). For the front-end development, we use React with TypeScript.

## Getting Started

This project has been configered to run with yarn.

To run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Storybook

To access the storybook library to view our components, run:

```bash
yarn storybook
```

## Linting and Prettier

This project has been set up with eslint and Prettier to ensure a consistent coding style across the project. Prettier is set to reformat your code on save, but you can also run the following to format your code:

```bash
yarn format:fix
```

Eslint is a tool used to improve our code. It will give errors or warnings for problematic patterns or code which doesn't adhere to certain guidelines. For example it will give a warning for imports that are defined but never used. To check your code before a commit, run:

```bash
yarn lint
```

## Components

In this project, we follow atomic design principles to ensure readability, scalability and flexibility in our application code.

Our application will be built up from five distinct levels: atoms > molecules > organisms > templates > pages.

Atoms - Basic building blocks of matter such as Button or TextField. These are imported from MaterialUI and set up with props which have been type-defined in a separate file. Storybook files have also been created for these.

Molecules - Grouping atoms together. For example grouping a checkbox with a form label to build functionality.

Organisms - Combining molecules together to form a distinct section of the interface, such as a navigation bar.

Templates - Set the grid layout of pages

Pages - Render the components with a template defined

## Theming

To apply a consistent tone across our application, we will use theming to customize the MUI library with our own colors, typography, etc. We set this up with ThemeProvider and createTheme from MUI. The theme definitions can be found in `Theme/theme.ts`

## Deployment

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more information on how to deploy.
