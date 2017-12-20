FROM node:9.2

WORKDIR /app

ADD . /app

RUN npm install --unsafe-perm

ENV NODE_ENV production
ENV PORT 4000

EXPOSE 4000

CMD [ "npm", "start" ]
