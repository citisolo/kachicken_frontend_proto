FROM node:8

WORKDIR /home/redbandit/coursera/full-stack-course/Bootstrap4/kachicken

COPY package*.json ./

RUN npm install

COPY ./dist ./dist

COPY ./proserver.js ./

EXPOSE 5000

CMD ["npm", "run", "start:pro"]
