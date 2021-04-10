FROM node:alpine AS walrus-frontend

RUN addgroup -S appgroup

RUN adduser -S appuser -G appgroup

ENV INSTALL_PATH /app

RUN mkdir -p $INSTALL_PATH

RUN chown -R appuser $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY . /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app

COPY yarn.lock /app

RUN yarn install --silent

COPY . /app

RUN chown -R appuser $INSTALL_PATH

USER appuser

EXPOSE 9090

CMD ["yarn", "start"]
