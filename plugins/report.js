/* Copyright (C) 2021 Aqua Snake.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Cyber Army Bot  - Aqua-Snake
*/

const CBot = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('tagall');

if (Config.WORKTYPE == 'private') {
    CBot.addCommand({pattern: 'report ?(.*)', fromMe: true, desc: Lang.REPORT}, (async (message, match) => {
        if (match[1] == '' && message.reply_message) {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            await message.client.sendMessage(message.jid,Lang.USER + '@' + message.reply_message.jid.split('@')[0] , MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
        
        }
        else if (match[1] !== '' && message.reply_message) {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            await message.client.sendMessage(message.jid,Lang.USER + '@' + message.reply_message.jid.split('@')[0] + Lang.REASON + `${match[1]}`, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
        }
        else if (!message.reply_message) {
            return message.client.sendMessage(message.jid,Lang.REPLY, MessageType.text);
        }
    }));
}
else if (Config.WORKTYPE == 'public') {
    CBot.addCommand({pattern: 'report ?(.*)', fromMe: false, desc: Lang.REPORT}, (async (message, match) => {
        if (match[1] == '' && message.reply_message) {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            await message.client.sendMessage(message.jid,Lang.USER + '@' + message.reply_message.jid.split('@')[0] , MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
        
        }
        else if (match[1] !== '' && message.reply_message) {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            await message.client.sendMessage(message.jid,Lang.USER + '@' + message.reply_message.jid.split('@')[0] + Lang.REASON + `${match[1]}`, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
        }
        else if (!message.reply_message) {
            return message.client.sendMessage(message.jid,Lang.REPLY, MessageType.text);
        }
    }));
    CBot.addCommand({pattern: 'report ?(.*)', fromMe: true, desc: Lang.REPORT, dontAddCommandList: true}, (async (message, match) => {
        if (match[1] == '' && message.reply_message) {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            await message.client.sendMessage(message.jid,Lang.USER + '@' + message.reply_message.jid.split('@')[0] , MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
        
        }
        else if (match[1] !== '' && message.reply_message) {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            await message.client.sendMessage(message.jid,Lang.USER + '@' + message.reply_message.jid.split('@')[0] + Lang.REASON + `${match[1]}`, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
        }
        else if (!message.reply_message) {
            return message.client.sendMessage(message.jid,Lang.REPLY, MessageType.text);
        }
    }));
}
