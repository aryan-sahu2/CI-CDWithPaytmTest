FROM node:20.12.0-alpine3.19

WORKDIR /user/src/app

COPY package.json package-lock.json turbo.json tsconfig.json ./

COPY apps ./app
COPY packages ./packages

#install dependencies
RUN npm install

RUN npm run db:generate

RUN npm run buld

CMD ["npm", "run", "start-user-app"]