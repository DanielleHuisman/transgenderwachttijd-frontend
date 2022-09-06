# transgenderwachttijd.nl

Tracking waiting times for transgender health care in the Netherlands.

This project consists of two repositories:
- [Backend](https://github.com/DanielHuisman/transgenderwachttijd-backend)
- [Frontend](https://github.com/DanielHuisman/transgenderwachttijd-frontend)

# Frontend

This is a [Next.js](https://nextjs.org) project. Some basic documentation is provided below, but more information is available in the [Next.js documentation](https://nextjs.org/docs).

## Development
### Prerequisites
Make sure [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io) are installed on your system.

### Setup
```bash
# Install dependencies
pnpm install
```

### Running
```bash
# Run the development server
pnpm dev
```

### Translations
The following should be used after translations have been changed in the code. It will update the files in `public/locales`.
```bash
# Update translation files from the source code
pnpm translate
```

### GraphQL Code Generation
The following should be used after GraphQL fragments, queries or mutations have been changed. This will update the `graphql/generated.ts` file.
```bash
# Generate once
pnpm codegen

# Generate continously in the background
pnpm codegen --watch
```

## Production
```bash
# Build the application
pnpm build

# Run the production server
pnpm start
```
