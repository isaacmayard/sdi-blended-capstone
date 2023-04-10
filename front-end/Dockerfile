FROM node:19-alpine3.17

# set the directory docekr is runnin the commands
WORKDIR /ui

# copy source code
COPY . /ui

# update packages
RUN apk update && \
  apk upgrade -f && \
  npm install -g pnpm

# install
RUN pnpm install

CMD [ "pnpm", "dev" ]

# run the built app on vite static server

