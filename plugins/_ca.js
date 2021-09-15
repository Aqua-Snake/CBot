/* Copyright (C) 2021 Cyber Bot.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Cyber Bot - Aqua Snake
*/

const CBot = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');
const fs = require("fs")
const CBot = fs.readFileSync('./media/CBotbot.mp3')  
let LOL = Config.WORKTYPE == 'public' ? false : true

const Language = require('../language');
const Lang = Language.getString('_CBot');
const dmenu = "Cyber Bot Menu\n\n"


CBot.applyCMD({pattern: Config.MENU + '?(.*)', fromMe: LOL, dontAddCommandList: true, deleteCommand: false,}, (async (message, match) => {

    var CMD_HELP = '';
    if (match[1] === '') {
        CBot.commands.map(
            async (command) =>  {
                if (command.dontAddCommandList || command.pattern === undefined) return;
                try {
                    var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    var mmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                } catch {
                    var match = [command.pattern];
                }
    
                var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }

                    var comEmoji, descEmoji;
                    if (Config.PANEL_EMOJI.includes('/')) {
                        var split = Config.PANEL_EMOJI.split('/');
                        comEmoji = split[0];
                        descEmoji = split[1];
                    }
                    
                    CMD_HELP += comEmoji + ' *' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');
                    if (command.desc !== '') CMD_HELP += descEmoji + ' *' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');
                    if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

            }
        );
        
        await message.client.sendMessage(message.jid, CBot, MessageType.audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: message.data})
        await message.client.sendMessage(message.jid, '┴┬┴┬┴┬┴┬↭↭↭↭↭↭┬┴┬┴┬┴┬┴\n' + ' ```✦✦✦✧✧✧ 𝙲𝚈𝙱𝚁 𝙱𝙾𝚃 ✧✧✧✦✦✦```\n' + '࿇࿇࿇࿇࿇࿇࿇࿇࿇࿇࿇࿇࿇࿇࿇࿇࿇࿇࿇࿇\n\n' + CMD_HELP, MessageType.text, {quoted: message.data});
        
    } else {

        var CMD_HELP = '';
        CBot.commands.map(
            async (command) =>  {
                if (command.dontAddCommandList || command.pattern === undefined) return;
                try {
                    var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                    var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                } catch {
                    var cmatch = [command.pattern];
                }
                if (cmmatch.endsWith(' ')) {
                    var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(' ', '')
                }                
                if (cmmatch == match[1]) {
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                            HANDLER = '.';
                    }
                    CMD_HELP += '* ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');
                    if (command.desc !== '') CMD_HELP += '* ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');
                    if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                }
            }
        );
        if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
        await message.client.sendMessage(message.jid, '┴┬┴┬┴┬┴┬↭↭↭↭↭↭┬┴┬┴┬┴┬┴\n' + ' ```✦✦✦✧✧✧ 𝙲𝚈𝙱𝚁 𝙱𝙾𝚃 ✧✧✧✦✦✦```\n' + '࿇࿇࿇࿇࿇࿇࿇࿇࿇࿇࿇࿇࿇࿇࿇࿇࿇࿇࿇࿇\n\n' + CMD_HELP, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "●QUEEN CBot PANEL●", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/LOGO.jpg')}}}});
    }
}));    