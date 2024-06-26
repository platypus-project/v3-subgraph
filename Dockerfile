FROM node:16-alpine
RUN apk add --no-cache make gcc g++ python3

WORKDIR /v3-subgraph

COPY ./package.json ./
COPY ./package-lock.json ./

COPY abis ./abis
COPY src ./src
COPY schema.graphql ./
COPY subgraph.yaml ./
COPY tsconfig.json ./

RUN npm install

ENTRYPOINT ["npm", "run"]
