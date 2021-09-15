FROM fusuf/whatsasena:latest

RUN git clone https://Aqua-Snake/CBot /root/CBot
WORKDIR /root/CBot/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
