This is a [Next.js](https://nextjs.org/) project that I created to learn about new features like server and action components. I learned about it through a video by [Sam Selikoff](https://www.youtube.com/watch?v=OAmp3GTfZnU).
## Getting started

If you want to try this, follow the next steps:

### Install the dependencies:
```bash
pnpm install
# or
yarn install
# or
npm install
```

### "Create a .env file with the content of .env.example (you can simply copy it or change the file path if you want to locate it in another location)
```bash
cp .env.example .env
```

### Push the prisma schema to the database
```bash
npx prisma db push
```

### Start the project and try it!
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```