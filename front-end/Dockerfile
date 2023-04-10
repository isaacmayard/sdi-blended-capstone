FROM node:19-alpine3.17

# set the directory docekr is runnin the commands
WORKDIR /front-end

# copy source code
COPY . /front-end

# update packages
RUN apk update && \
  apk upgrade -f && \
  npm install -g pnpm

# install
RUN pnpm install

CMD [ "pnpm", "dev" ]

# run the built app on vite static server

