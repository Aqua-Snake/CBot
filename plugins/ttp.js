/* Copyright (C) 2021 Cyber Bot.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Cyber Bot - Aqua Snake
*/

const CBot = require('../events');
const CBot = require('CBot-public-1');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const cwebp = require('cwebp-bin');
const Config = require('../config');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
let LOL = Config.WORKTYPE == 'public' ? false : true
const request = require('request');

const Language = require('../language');
const Lang = Language.getString('ttp');


CBot.applyCMD({ pattern: 'plainttp ?(.*)', fromMe: LOL, desc: Lang.TTP_DESC,  deleteCommand: false , dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text, {quoted: message.data}, {quoted: message.data});
    var uri = encodeURI(match[1])
    var apikey = await CBot.api()
    var ttinullimage = await axios.get('https://api.lolhuman.xyz/api/ttp2?apikey=' + apikey.key +`&text=` + uri, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, quoted: message.data})
}));


CBot.applyCMD({ pattern: 'attp ?(.*)', fromMe: LOL, desc: Lang.ATTP_DESC,  deleteCommand: false , dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text, {quoted: message.data}, {quoted: message.data});
    var uri = encodeURI(match[1]) /*හලෝ මෝඩ වේසිගේ පුතා.. උස්සන්න නේද ආවේ.. හාහා උස්සන් යන්න.. උබේ අම්මා වේසියෙක් බව තහවුරුයි..😂📢*/
    var ttinullimage = await axios.get('https://hardianto-chan.herokuapp.com/api/maker/attp?text=' + uri + '&apikey=hardianto', { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, {quoted: message.data}, { mimetype: Mimetype.webp, quoted: message.data })
}));


CBot.applyCMD({ pattern: 'ttpwater ?(.*)', fromMe: LOL, desc: Lang.ATTP_DESC,  deleteCommand: false , dontAddCommandList: true}, (async (message, match) => {
    if (message.reply_message) {
        var text = message.reply_message.text
        var ttinullimage = await CBot.ttp(text, 'https://api.flamingtext.com/logo/Design-Water?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/CBot/wttp.png', async() => { 
          ffmpeg('/root/CBot/wttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
            ffmpeg('/root/CBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: message.data}, {quoted: message.data});
            })
          })
        })
      } else {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text, {quoted: message.data}, {quoted: message.data});
        var ttinullimage = await CBot.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Water?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/CBot/wttp.png', async() => { 
          ffmpeg('/root/CBot/wttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
            ffmpeg('/root/CBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: message.data}, {quoted: message.data});
            })
          })
        })
      }
}));


CBot.applyCMD({ pattern: 'ttppink ?(.*)', fromMe: LOL, desc: Lang.ATTP_DESC,  deleteCommand: false , dontAddCommandList: true}, (async (message, match) => {
    if (message.reply_message) {
        var text = message.reply_message.text
        var ttinullimage = await CBot.ttp(text, 'https://api.flamingtext.com/logo/Design-Style?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/CBot/http.png', async() => { 
          ffmpeg('/root/CBot/http.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
            ffmpeg('/root/CBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: message.data}, {quoted: message.data});
            })
          })
        })
      } else {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text, {quoted: message.data}, {quoted: message.data});
        var ttinullimage = await CBot.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Style?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/CBot/http.png', async() => { 
          ffmpeg('/root/CBot/http.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
            ffmpeg('/root/CBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: message.data}, {quoted: message.data});
            })
          })
        })
      }
}));


CBot.applyCMD({ pattern: 'ttpblack ?(.*)', fromMe: LOL, desc: Lang.ATTP_DESC,  deleteCommand: false , dontAddCommandList: true}, (async (message, match) => {
    if (message.reply_message) {
        var text = message.reply_message.text
        var ttinullimage = await CBot.ttp(text, 'https://api.flamingtext.com/logo/Design-Blackbird?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/CBot/bttp.png', async() => { 
          ffmpeg('/root/CBot/bttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
            ffmpeg('/root/CBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: message.data}, {quoted: message.data});
            })
          })
        })
      } else {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text, {quoted: message.data}, {quoted: message.data});
        var ttinullimage = await CBot.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Blackbird?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/CBot/bttp.png', async() => { 
          ffmpeg('/root/CBot/bttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
            ffmpeg('/root/CBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: message.data}, {quoted: message.data});
            })
          })
        })
      }
}));


CBot.applyCMD({ pattern: 'ttpf ?(.*)', fromMe: LOL, desc: Lang.ATTP_DESC,  deleteCommand: false , dontAddCommandList: true}, (async (message, match) => {
    if (message.reply_message) {
        var text = message.reply_message.text
        var ttinullimage = await CBot.ttp(text, 'https://api.flamingtext.com/logo/Design-Fluffy?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/CBot/gttp.png', async() => { 
          ffmpeg('/root/CBot/gttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
            ffmpeg('/root/CBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: message.data}, {quoted: message.data});
            })
          })
        })
      } else {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text, {quoted: message.data}, {quoted: message.data});
        var ttinullimage = await CBot.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Fluffy?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/CBot/gttp.png', async() => { 
          ffmpeg('/root/CBot/gttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
            ffmpeg('/root/CBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: message.data}, {quoted: message.data});
            })
          })
        })
      }
}));


CBot.applyCMD({ pattern: 'ttpsm ?(.*)', fromMe: LOL, desc: Lang.ATTP_DESC,  deleteCommand: false , dontAddCommandList: true}, (async (message, match) => {
    if (message.reply_message) {
        var text = message.reply_message.text
        var ttinullimage = await CBot.ttp(text, 'https://api.flamingtext.com/logo/Design-Smurfs?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/CBot/sttp.png', async() => { 
          ffmpeg('/root/CBot/sttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
            ffmpeg('/root/CBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: message.data});
            })
          })
        })
      } else {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text, {quoted: message.data});
        var ttinullimage = await CBot.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Smurfs?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/CBot/sttp.png', async() => { 
          ffmpeg('/root/CBot/sttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
            ffmpeg('/root/CBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: message.data});
            })
          })
        })
      }
}));

CBot.applyCMD({ pattern: 'ttpelec ?(.*)', fromMe: LOL, desc: Lang.ATTP_DESC,  deleteCommand: false , dontAddCommandList: true}, (async (message, match) => {
    if (message.reply_message) {
        var text = message.reply_message.text
        var ttinullimage = await CBot.ttp(text, 'https://api.flamingtext.com/logo/Design-Electric?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/CBot/ettp.png', async() => { 
          ffmpeg('/root/CBot/ettp.png').videoFilters('chromakey=#FFFFFF:similarity=0.01').save('af.png').on('end', async () => {
            ffmpeg('/root/CBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: message.data});
            })
          })
        })
      } else {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text, {quoted: message.data});
        var ttinullimage = await CBot.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Electric?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/CBot/ettp.png', async() => { 
          ffmpeg('/root/CBot/ettp.png').videoFilters('chromakey=#FFFFFF:similarity=0.01').save('af.png').on('end', async () => {
            ffmpeg('/root/CBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker, {quoted: message.data});
            })
          })
        })
      }
}));


CBot.applyCMD({ pattern: 'ttphigh ?(.*)', fromMe: LOL, desc: Lang.ATTP_DESC,  deleteCommand: false , dontAddCommandList: true}, (async (message, match) => {
    if (message.reply_message) {
        var text = message.reply_message.text
        var ttinullimage = await CBot.ttp(text, 'https://api.flamingtext.com/logo/Design-Highlight-Animation?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/CBot/ahttp.gif', async() => { 
          ffmpeg('/root/CBot/ahttp.gif').videoFilters('chromakey=black').save('af.gif').on('end', async () => {
            ffmpeg('/root/CBot/af.gif').outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"]).videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('sticker.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker, {quoted: message.data});
            })
          })
        })
      } else {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text, {quoted: message.data});
        var ttinullimage = await CBot.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Highlight-Animation?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/CBot/ahttp.gif', async() => { 
          ffmpeg('/root/CBot/ahttp.gif').videoFilters('chromakey=black').save('af.gif').on('end', async () => {
            ffmpeg('/root/CBot/af.gif').outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"]).videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('sticker.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker, {quoted: message.data});
            })
          })
        })
      }
}));


CBot.applyCMD({ pattern: 'ttpmem ?(.*)', fromMe: LOL, desc: Lang.ATTP_DESC,  deleteCommand: false , dontAddCommandList: true}, (async (message, match) => {
    if (message.reply_message) {
        var text = message.reply_message.text
        var ttinullimage = await CBot.ttp(text, 'https://api.flamingtext.com/logo/Design-Memories-Animation?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/CBot/pttp.gif', async() => { 
          ffmpeg('/root/CBot/pttp.gif').videoFilters('chromakey=white').save('af.gif').on('end', async () => {
            ffmpeg('/root/CBot/af.gif').outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"]).videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('sticker.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker, {quoted: message.data});
            })
          })
        })
      } else {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text, {quoted: message.data});
        var ttinullimage = await CBot.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Memories-Animation?_variations=true&text=', '&_loc=catdynamic')
        var download = async(uri, filename, callback) => {
          await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        await download(ttinullimage.image, '/root/CBot/pttp.gif', async() => { 
          ffmpeg('/root/CBot/pttp.gif').videoFilters('chromakey=white').save('af.gif').on('end', async () => {
            ffmpeg('/root/CBot/af.gif').outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"]).videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('sticker.webp').on('end', async () => {
              await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker, {quoted: message.data});
            })
          })
        })
      }
}));