FROM node:latest

COPY ./implementation /implementation

COPY ./R1 /R1
WORKDIR /R1

RUN npm install --production
EXPOSE 80
ENV PORT 80
ENV DOCKER true

CMD ["npm", "start"]