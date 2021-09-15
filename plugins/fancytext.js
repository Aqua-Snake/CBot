/*
Copyright (C) 2021  Cyber Bot.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

 Cyber Bot - Aqua Snake
*/


//Basic requirements
const CBot = require('../events');
const CBot = require('CBot-public-1');
const {MessageType} = require('@adiwajshing/baileys');
const got = require("got");

// Config Checker
const Config = require('../config');
let LOL = Config.WORKTYPE == 'public' ? false : true

//Language
const Language = require('../language');
const Lang = Language.getString('font');

CBot.applyCMD({ pattern: 'fancy ?(.*)', fromMe: LOL, desc: Lang.FONT_DESC,  deleteCommand: false}, async (message, match) => {
    const name = match[1]

    if (name === 'xx') return await message.reply(Lang.NEED_WORD);
    var payload = await CBot.fancy(name)
   
    await message.client.sendMessage(message.jid, '*Cyber Bot Fancy Text*' + '\n\n' + payload.cool, MessageType.text, {quoted: message.data});
})

