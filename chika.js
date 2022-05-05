require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const riy = require('xfarr-api')

// Read Database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

// Language
const  { ind } = require(`./language`)
lang = ind // Language

// Type Menu
typemenu = 'image'

module.exports = chika = async (chika, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await chika.decodeJid(chika.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid

        // Group
        const groupMetadata = m.isGroup ? await chika.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    
        // Memeg
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!chika.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            chika.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await chika.setStatus(`${chika.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await chika.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        chika.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: chika.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, chika.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        chika.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            chika.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await chika.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await chika.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    chika.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    chika.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) chika.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) chika.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) chika.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    chika.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) chika.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) chika.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    chika.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
        	 if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		   db.data.users[m.sender].limit -= 1 // -1 limit
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await chika.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await chika.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            chika.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		    db.data.users[m.sender].limit -= 1 // -1 limit
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await chika.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) chika.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    chika.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    chika.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    chika.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    chika.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    chika.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    chika.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    chika.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
		 if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await chika.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
            	 if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		        db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await chika.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    chika.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    chika.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, chika.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    chika.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    chika.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, chika.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    chika.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    chika.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, chika.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    chika.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    chika.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, chika.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    chika.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    chika.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, chika.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    chika.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    chika.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, chika.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./lib/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                chika.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, jawab, chika.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, jawab, chika.user.name, m, {mentions: menst})
            }
            break
            case 'apakah':
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
					const kah = apa[Math.floor(Math.random() * apa.length)]
chika.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: m })

					break
case 'bisakah':
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
chika.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: m })

					break
case 'bagaimanakah':
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
chika.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: m })

					break
case 'rate':
 
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
					const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
chika.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })

					break
case 'gantengcek':
  case 'cekganteng':
   
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Riych`)
					const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
chika.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: m })

					break
case 'cantikcek':
  case 'cekcantik':
   
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Riych`)
					const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const tik = can[Math.floor(Math.random() * can.length)]
chika.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: m })

					break
case 'sangecek':
  case 'ceksange':
    case 'gaycek':
      case 'cekgay':
        case 'lesbicek':
          case 'ceklesbi':
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
					const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
chika.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: m })

					break
case 'kapankah':
				if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
					const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
chika.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: m })
					break
case 'wangy':
              if (!q) return reply (`Contoh : .wangy Riy`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
             m.reply(awikwok)
              break
case 'cekmati':
              if (!q) return reply(`Invalid!\n\nYg mau di cek siapa kontol?`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              m.reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                chika.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await chika.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await chika.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await chika.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await chika.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await chika.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await chika.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await chika.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await chika.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await chika.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await chika.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                await chika.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                await chika.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                chika.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            chika.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: chika.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            chika.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: chika.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            chika.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: chika.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            chika.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${chika.user.id}
`
chika.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await chika.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await chika.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `Mode Group`, chika.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await chika.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await chika.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `Mode Edit Info`, chika.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `Mode Antilink`, chika.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${chika.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${chika.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `Mute Bot`, chika.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await chika.groupInviteCode(m.chat)
                chika.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await chika.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await chika.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                chika.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} Riy ganteng`
                let getGroups = await chika.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: `${sc}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Website',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: 'menu'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      chika.send5ButImg(i, txt, chika.user.name, global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: `${sc}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Website',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: 'menu'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      chika.send5ButImg(yoi, txt, chika.user.name, global.thumb, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                chika.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await chika.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 chika.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await chika.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 chika.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    chika.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await chika.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await chika.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
case 'smeme': case 'stickermeme': case 'stickmeme': {
let { TelegraPh } = require('./lib/uploader')
if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
m.reply(mess.wait)
mee = await chika.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await chika.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await chika.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let Riy = await chika.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(Riy)
            }
	       break     
	        case 'simih': case 'simisimi': {
            if (!text) throw `Example : ${prefix + command} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            m.reply(hm.result.message)
            }
            break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    chika.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await chika.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            chika.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            chika.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${chika.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            chika.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await chika.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await chika.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    chika.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                chika.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: chika.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: chika.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                chika.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                chika.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                chika.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                chika.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                chika.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                chika.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                chika.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
case 'webtonsearch': case 'webtoon':
                if (!text) return m.reply('Yang mau di cari apa?')
                await m.reply(mess.wait)
                riy.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*👍🏻 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Creator :* ${i.creator}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await reply(txt)
                })
                .catch((err) => {
                    m.reply(mess.error)
                })
            break
            case 'drakor':
                if (!text) return m.reply('Yang mau di cari apa?')
                await m.reply(mess.wait)
                riy.Drakor(`${text}`).then(async data => {
                    let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📆 Years :* ${i.years}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    m.reply(mess.error)
                })
            break
            case 'anime':{
                if (!text) return m.reply('Yang mau di cari apa?')
                await m.reply(mess.wait)
                riy.Anime(q).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Website",
						"url": `${myweb}`
						}
					}
				]
				await chika.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    m.reply(mess.error)
                })
                }
            break
            case 'character': case 'karakter':
                if (!text) return m.reply('Yang mau di cari apa?')
                await m.reply(mess.wait)
                riy.Character(q).then(async data => {
                    let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
                    for (let i of data) {
                        txt += `*📫 Character :* ${i.character}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Website",
						"url": `${myweb}`
						}
					}
				]
				await chika.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    m.reply(mess.error)
                })
            break
            case 'manga':
                if (!text) return m.reply('Yang mau di cari apa?')
                await m.reply(mess.wait)
                riy.Manga(`${text}`).then(async data => {
                    let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                    for (let i of data) {
                         txt += `*📫 Title :* ${i.judul}\n`
                         txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Website",
						"url": `${myweb}`
						}
					}
				]
				await chika.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    m.reply(mess.error)
                })
            break
            case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
                m.reply(mess.wait)
                chika.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: m })
            }
            break
	    case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                chika.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                chika.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: chika.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: chika.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: chika.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                 if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw `Example : ${prefix + command} text`
                m.reply(mess.wait)
                chika.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                 if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                chika.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                chika.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    chika.sendMedia(m.chat, anu.caption.profile_hd, '', `⭔ Full Name : ${anu.caption.full_name}\n⭔ User Name : ${anu.caption.user_name}\n⭔ ID ${anu.caption.user_id}\n⭔ Followers : ${anu.caption.followers}\n⭔ Following : ${anu.caption.following}\n⭔ Bussines : ${anu.caption.bussines}\n⭔ Profesional : ${anu.caption.profesional}\n⭔ Verified : ${anu.caption.verified}\n⭔ Private : ${anu.caption.private}\n⭔ Bio : ${anu.caption.biography}\n⭔ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await chika.sendMessage(m.chat, buttonMessage, { quoted: m })
                chika.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'tiktok': case 'tt': case 'igdl': {
                if (!text) throw 'No Query Url!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) chika.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    chika.sendMedia(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
		/** Backup misal yg atas ga keluar video **/
		case 'igeh': case 'instagram2': case 'ig2': case 'igdl2': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                
                let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url:text }, 'apikey'))
                chika.sendMessage(m.chat, { video: { url: anu.data[0] } }, { quoted: m })
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await chika.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
                chika.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await chika.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                chika.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await chika.sendMessage(m.chat, buttonMessage, { quoted: m })
                chika.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                chika.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                chika.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: chika.user.name,
			buttons,
			headerType: 4
		    }
		    chika.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        chika.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		chika.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		chika.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		chika.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		chika.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		chika.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		chika.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		chika.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                chika.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                chika.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                chika.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                chika.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await chika.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, chika.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await chika.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, chika.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await chika.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, chika.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await chika.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, chika.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, chika.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await chika.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await chika.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, chika.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await chika.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, chika.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, chika.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                chika.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                chika.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                chika.sendContact(m.chat, global.owner, m)
            }
            break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					 if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                    m.reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						chika.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
				case 'waifu': case 'loli':
				 if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
					m.reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					chika.sendImage(m.chat, data.url, mess.success, m)
					})
					break
case 'playstore': {
            if (!text) throw `Example : ${prefix + command} clash of clans`
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `⭔ Playstore Search From : ${text}\n\n`
            for (let i of res.result) {
            teks += `⭔ Name : ${i.name}\n`
            teks += `⭔ Link : ${i.link}\n`
            teks += `⭔ Developer : ${i.developer}\n`
            teks += `⭔ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            m.reply(teks)
            }
            break
            case 'gsmarena': {
            if (!text) throw `Example : ${prefix + command} samsung`
            let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `⭔ Title: ${judul}
⭔ Realease: ${rilis}
⭔ Size: ${ukuran}
⭔ Type: ${type}
⭔ Storage: ${storage}
⭔ Display: ${display}
⭔ Inchi: ${inchi}
⭔ Pixel: ${pixel}
⭔ Video Pixel: ${videoPixel}
⭔ Ram: ${ram}
⭔ Chipset: ${chipset}
⭔ Battery: ${batrai}
⭔ Battery Brand: ${merek_batre}
⭔ Detail: ${detail}`
            chika.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'jadwalbioskop': {
            if (!text) throw `Example: ${prefix + command} jakarta`
            let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Title: ${i.title}\n`
            capt += `⭔ Thumbnail: ${i.thumb}\n`
            capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
            }
            chika.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += `⭔ Title: ${i.title}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Img Url: ${i.img}\n\n──────────────────────\n`
            }
            chika.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
            if (!text) throw `Example: ${prefix + command} free fire`
            let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `Amino Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Community: ${i.community}\n`
            capt += `⭔ Community Link: ${i.community_link}\n`
            capt += `⭔ Thumbnail: ${i.community_thumb}\n`
            capt += `⭔ Description: ${i.community_desc}\n`
            capt += `⭔ Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            chika.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/wattpad', { query: text }, 'apikey'))
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From query\n\n`
            capt += `⭔ Judul: ${judul}\n`
            capt += `⭔ Dibaca: ${dibaca}\n`
            capt += `⭔ Divote: ${divote}\n`
            capt += `⭔ Bab: ${bab}\n`
            capt += `⭔ Url: ${url}\n`
            capt += `⭔ Deskripsi: ${description}`
            chika.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/webtoons', { query: text }, 'apikey'))
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Like: ${i.like}\n`
            capt += `⭔ Creator: ${i.creator}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
            }
            m.reply(capt)
            }
            break
            case 'drakor': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Years: ${i.years}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            chika.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
case "setmenu": 
if (!text) return m.reply("1. image\n2. list\n3. catalog\n\nContoh .setmenu image")
if (q == "image") {
typemenu = 'image'
m.reply("Sucses Mengganti Menu Ke "+q)
} else if (q == "list") {
typemenu = 'list'
m.reply("Sucses Mengganti Menu Ke "+q)
} else if (q == "catalog") {
typemenu = 'catalog'
m.reply("Sucses Mengganti Menu Ke "+q)
}
break

// Gausah di apa² in dek, ntar error ngeluh😥
case 'command':
(function(_0x5b9e89,_0x13daae){function _0x541e31(_0x3cbf46,_0x274466,_0x4004b9,_0x5938cc){return _0x3c6d(_0x4004b9- -0x3c3,_0x5938cc);}function _0x34920d(_0x465963,_0x3adea0,_0x52e7d0,_0x3826fd){return _0x3c6d(_0x52e7d0- -0x36c,_0x465963);}const _0x52d7f9=_0x5b9e89();while(!![]){try{const _0x503fe4=parseInt(_0x541e31(-0x264,-0x284,-0x23f,-0x270))/(-0x3*0x569+0x1fb3+-0xf77)*(-parseInt(_0x541e31(-0x1e6,-0x188,-0x1cc,-0x1e5))/(-0x1f9*-0x2+0x3*0x529+0x679*-0x3))+parseInt(_0x34920d(-0x17d,-0x181,-0x17c,-0x176))/(0x21*0xf3+-0x23e4+-0x4*-0x125)*(-parseInt(_0x541e31(-0x24a,-0x216,-0x228,-0x214))/(0x1aba+0x15f5+-0x30ab))+-parseInt(_0x34920d(-0x1c5,-0x1d0,-0x1bb,-0x1de))/(-0xf0c+0x2*0x71a+0x1*0xdd)*(-parseInt(_0x34920d(-0x18b,-0x184,-0x16b,-0x189))/(0x1698+-0x16ec+0x5a))+parseInt(_0x34920d(-0x1cd,-0x1e5,-0x1d9,-0x1f3))/(-0x12f5*-0x1+0x19b*-0x14+0xd2e)+parseInt(_0x34920d(-0x1c3,-0x167,-0x1a9,-0x1ed))/(0xb*-0x1cd+0x6*0x22c+0x6cf)+parseInt(_0x541e31(-0x265,-0x21a,-0x21f,-0x1e1))/(0x907+-0x195c+-0x5*-0x346)+parseInt(_0x34920d(-0x168,-0x14b,-0x179,-0x15d))/(0x1cf9+-0x2705+0xa16)*(-parseInt(_0x541e31(-0x1f1,-0x1e1,-0x1f3,-0x1f8))/(-0x1d60+0x2588+-0x81d));if(_0x503fe4===_0x13daae)break;else _0x52d7f9['push'](_0x52d7f9['shift']());}catch(_0x34c0c3){_0x52d7f9['push'](_0x52d7f9['shift']());}}}(_0x3af3,0xc4d94+0x30495+-0x8c7b9));function _0x36f29d(_0x4828c1,_0x1505a3,_0x34c1b0,_0xcd84ec){return _0x3c6d(_0x1505a3- -0x181,_0x4828c1);}const _0x107cd8=(function(){const _0x27d0fc={};_0x27d0fc[_0x197171(-0x1b8,-0x19d,-0x165,-0x15c)]=_0x2cb149(-0xac,-0x68,-0x93,-0x53),_0x27d0fc[_0x197171(-0xe6,-0x117,-0x11d,-0x15a)]=_0x2cb149(-0x56,-0x83,-0x7d,-0x39),_0x27d0fc[_0x2cb149(-0x10a,-0x99,-0xcc,-0xd4)]=function(_0x30f218,_0x40f9c6){return _0x30f218!==_0x40f9c6;};function _0x197171(_0x28066e,_0x158b25,_0x23ad11,_0x37c07c){return _0x3c6d(_0x158b25- -0x31d,_0x28066e);}_0x27d0fc[_0x197171(-0x14c,-0x181,-0x182,-0x1a8)]=_0x2cb149(-0xab,-0xce,-0xd1,-0xa7);const _0x24137a=_0x27d0fc;function _0x2cb149(_0x2e296d,_0x116816,_0x3f6fa4,_0x18e4d4){return _0x3c6d(_0x3f6fa4- -0x266,_0x2e296d);}let _0x24f421=!![];return function(_0x1e4261,_0x287478){function _0x3909ae(_0x165737,_0x42fced,_0x30b58d,_0x1029ad){return _0x197171(_0x1029ad,_0x165737-0x41f,_0x30b58d-0x117,_0x1029ad-0x40);}function _0x168359(_0x251a1f,_0x200271,_0x28e103,_0x3556c9){return _0x2cb149(_0x251a1f,_0x200271-0x49,_0x28e103- -0x59,_0x3556c9-0x1e);}const _0x82660e={};_0x82660e[_0x3909ae(0x2fb,0x2e8,0x2d7,0x2de)]=function(_0x2dbab0,_0xe90e6f){return _0x2dbab0!==_0xe90e6f;},_0x82660e['KQMUc']=_0x24137a[_0x168359(-0x118,-0x14d,-0x13f,-0x102)],_0x82660e['jGzul']=_0x24137a[_0x3909ae(0x308,0x320,0x33b,0x316)];const _0xe17270=_0x82660e;if(_0x24137a[_0x168359(-0x110,-0x101,-0x125,-0x158)](_0x24137a[_0x168359(-0x15e,-0x151,-0x123,-0xe2)],_0x24137a[_0x3909ae(0x29e,0x2e5,0x2d8,0x286)])){const _0x1c6ee5=_0x29a7c5?function(){function _0x529ea7(_0x376d27,_0x309184,_0x5355cf,_0x236a6c){return _0x168359(_0x236a6c,_0x309184-0x3e,_0x5355cf-0x1c,_0x236a6c-0x1cc);}if(_0x1ec099){const _0x3111f1=_0x556064[_0x529ea7(-0xad,-0x9d,-0xb1,-0xd0)](_0x5d5094,arguments);return _0x17e52d=null,_0x3111f1;}}:function(){};return _0x5a1e06=![],_0x1c6ee5;}else{const _0x23be80=_0x24f421?function(){function _0x17bebe(_0x428af6,_0x4ae81b,_0x157809,_0x64b001){return _0x168359(_0x4ae81b,_0x4ae81b-0x1eb,_0x157809- -0xda,_0x64b001-0x6f);}function _0x4b8497(_0x573322,_0x4e2c78,_0x445d41,_0x3d0c47){return _0x168359(_0x573322,_0x4e2c78-0x179,_0x4e2c78-0x62e,_0x3d0c47-0xf7);}if(_0x287478){if(_0xe17270[_0x4b8497(0x52b,0x568,0x570,0x58a)](_0xe17270['KQMUc'],_0xe17270[_0x17bebe(-0x1f9,-0x200,-0x1e3,-0x1f2)])){const _0x557262=_0x287478[_0x17bebe(-0x197,-0x1cf,-0x1a7,-0x1e3)](_0x1e4261,arguments);return _0x287478=null,_0x557262;}else{const _0x10280c=_0x46b496[_0x4b8497(0x57b,0x561,0x560,0x547)](_0x3c6a49,arguments);return _0x52ee81=null,_0x10280c;}}}:function(){};return _0x24f421=![],_0x23be80;}};}()),_0x4849fc=_0x107cd8(this,function(){const _0x55945b={};function _0x30a395(_0x151a67,_0x457584,_0x529190,_0x22ffbe){return _0x3c6d(_0x151a67- -0x32c,_0x457584);}function _0x27961a(_0x7d5e77,_0x58cd2d,_0x552b1d,_0x339e6e){return _0x3c6d(_0x552b1d-0x2cf,_0x58cd2d);}_0x55945b['jpgAV']=_0x30a395(-0x138,-0x104,-0xfa,-0x121)+'+$';const _0x580782=_0x55945b;return _0x4849fc[_0x30a395(-0x178,-0x1bc,-0x198,-0x17d)]()[_0x27961a(0x474,0x4ac,0x4b9,0x4bd)](_0x580782[_0x30a395(-0x13f,-0x126,-0x142,-0x109)])['toString']()[_0x27961a(0x4d3,0x4e9,0x4bd,0x488)+'r'](_0x4849fc)[_0x30a395(-0x142,-0x14e,-0x11a,-0x137)](_0x580782[_0x30a395(-0x13f,-0x13a,-0x132,-0x14e)]);});function _0x115b82(_0x17bd5f,_0x3a5a6d,_0xc87dc4,_0x518bea){return _0x3c6d(_0x17bd5f-0x11d,_0xc87dc4);}function _0x3c6d(_0x3ba06b,_0x4849fc){const _0x107cd8=_0x3af3();return _0x3c6d=function(_0x3af301,_0x3c6d69){_0x3af301=_0x3af301-(0x39b*0x1+0x411+-0x630);let _0x46e053=_0x107cd8[_0x3af301];return _0x46e053;},_0x3c6d(_0x3ba06b,_0x4849fc);}_0x4849fc();const _0x11fb1a=(function(){const _0x4c1ee8={};_0x4c1ee8[_0x26c14a(0x15a,0x14e,0x12a,0x11b)]='IeStB';const _0x21ce7e=_0x4c1ee8;let _0x179647=!![];function _0x26c14a(_0x1f7d37,_0x34681d,_0x541fb3,_0x342b7c){return _0x3c6d(_0x541fb3- -0x7d,_0x34681d);}return function(_0x57a0ec,_0x492061){const _0x97f5d3=_0x179647?function(){function _0x5155e7(_0x11f58b,_0x97e4a6,_0x988629,_0x588f79){return _0x3c6d(_0x11f58b- -0x255,_0x97e4a6);}function _0x16f6f6(_0x1b8ea5,_0x3cf63b,_0x5b5a8c,_0x285460){return _0x3c6d(_0x285460- -0xf0,_0x1b8ea5);}if(_0x492061){if(_0x16f6f6(0x128,0xda,0x108,0xed)===_0x21ce7e[_0x5155e7(-0xae,-0xec,-0xd3,-0x70)]){const _0xee1133=_0x492061['apply'](_0x57a0ec,arguments);return _0x492061=null,_0xee1133;}else{if(_0x28ce2a){const _0x1ff2e6=_0x4505ee[_0x16f6f6(0xc2,0x115,0x12e,0x102)](_0x41d87d,arguments);return _0x54228f=null,_0x1ff2e6;}}}}:function(){};return _0x179647=![],_0x97f5d3;};}()),_0x5c677a=_0x11fb1a(this,function(){const _0x53d2b2={'jVgpI':function(_0x148160,_0x2d9fec){return _0x148160(_0x2d9fec);},'TsdZV':function(_0x147ef4,_0x5a41ca){return _0x147ef4+_0x5a41ca;},'dmRVq':_0x16f6cf(0x67,0x59,0xa0,0x76)+'ctor(\x22retu'+_0x4685c0(0x460,0x48b,0x477,0x48f)+'\x20)','uoJwQ':function(_0x198551){return _0x198551();},'CzeSz':function(_0x5e1840,_0x2ad6a4){return _0x5e1840+_0x2ad6a4;},'GWLth':function(_0x54ddde,_0x39920c){return _0x54ddde+_0x39920c;},'Rhgvp':_0x16f6cf(0x8d,0xa1,0xa0,0xa5)+'nction()\x20','hQzrh':function(_0x57e84a,_0x266576){return _0x57e84a!==_0x266576;},'pWEgp':_0x4685c0(0x455,0x4bc,0x470,0x49a),'WTTXj':_0x16f6cf(0x5f,0xa6,0xa0,0x78),'Zptcd':_0x4685c0(0x46f,0x41c,0x484,0x44b),'pkdtE':_0x4685c0(0x4ef,0x469,0x474,0x4aa),'bbHgU':'table','JvtUL':_0x16f6cf(0x88,0x71,0x97,0x46),'NCieS':function(_0x11b431,_0x107799){return _0x11b431<_0x107799;},'JPppP':function(_0xb9a933,_0x510ba8){return _0xb9a933===_0x510ba8;},'TpOVH':_0x4685c0(0x487,0x4d1,0x48f,0x4a0)};function _0x16f6cf(_0x50ebb0,_0xf23fb9,_0xe9bf9a,_0x522a41){return _0x3c6d(_0x50ebb0- -0x17b,_0xf23fb9);}let _0x374a7d;try{const _0x2e7e06=_0x53d2b2[_0x4685c0(0x4a6,0x46e,0x4c9,0x497)](Function,_0x53d2b2[_0x16f6cf(0x76,0x88,0x62,0x6a)](_0x53d2b2[_0x16f6cf(0x28,0x35,0x1c,0x55)](_0x53d2b2[_0x16f6cf(0x1d,0x32,0x3e,0x1c)],_0x53d2b2['dmRVq']),');'));_0x374a7d=_0x2e7e06();}catch(_0x42f7d8){if(_0x53d2b2[_0x4685c0(0x4e2,0x4b0,0x4b9,0x4be)](_0x53d2b2[_0x16f6cf(0x4c,0x63,0x83,0x35)],_0x53d2b2[_0x4685c0(0x4a4,0x4b6,0x454,0x489)])){const _0x241897=_0x562ddc[_0x16f6cf(0x73,0x8a,0x82,0x3f)+'r'][_0x4685c0(0x44a,0x453,0x465,0x481)][_0x16f6cf(0x45,0x3,0x1d,0x3d)](_0x195914),_0x114fb8=_0x173ecd[_0x2049f8],_0x437342=_0x51d195[_0x114fb8]||_0x241897;_0x241897['__proto__']=_0xeabb54[_0x4685c0(0x44d,0x4b6,0x4ae,0x482)](_0x29a52b),_0x241897[_0x16f6cf(0x39,-0x5,0x45,0xa)]=_0x437342['toString'][_0x4685c0(0x454,0x4c7,0x43d,0x482)](_0x437342),_0x15a04d[_0x114fb8]=_0x241897;}else _0x374a7d=window;}const _0xfd71e=_0x374a7d['console']=_0x374a7d[_0x16f6cf(0x64,0x3c,0x3c,0x45)]||{},_0x2e7380=[_0x4685c0(0x476,0x413,0x45a,0x43e),_0x53d2b2['WTTXj'],_0x53d2b2[_0x4685c0(0x483,0x4c7,0x491,0x49e)],_0x53d2b2['pkdtE'],_0x16f6cf(0x70,0xad,0xa4,0x45),_0x53d2b2[_0x4685c0(0x45e,0x445,0x439,0x47d)],_0x53d2b2['JvtUL']];function _0x4685c0(_0xad5768,_0x10b06f,_0x5d8585,_0x34a27e){return _0x3c6d(_0x34a27e-0x2c2,_0xad5768);}for(let _0x2a7781=-0x679*0x3+-0xc*0x15b+-0x2d*-0xcb;_0x53d2b2['NCieS'](_0x2a7781,_0x2e7380['length']);_0x2a7781++){if(_0x53d2b2[_0x16f6cf(0x32,0x2e,0x6e,0x5)](_0x53d2b2[_0x4685c0(0x4aa,0x441,0x45e,0x47c)],_0x53d2b2[_0x4685c0(0x478,0x4b1,0x4b6,0x47c)])){const _0x4dce10=_0x11fb1a[_0x16f6cf(0x73,0x7d,0x3b,0x37)+'r'][_0x16f6cf(0x44,0x2d,0x1e,0x16)][_0x4685c0(0x476,0x478,0x495,0x482)](_0x11fb1a),_0x2ce590=_0x2e7380[_0x2a7781],_0x4b2beb=_0xfd71e[_0x2ce590]||_0x4dce10;_0x4dce10[_0x4685c0(0x475,0x4b3,0x4e8,0x4bc)]=_0x11fb1a['bind'](_0x11fb1a),_0x4dce10['toString']=_0x4b2beb[_0x16f6cf(0x39,0xe,0x3c,-0x6)][_0x4685c0(0x496,0x442,0x4b9,0x482)](_0x4b2beb),_0xfd71e[_0x2ce590]=_0x4dce10;}else{const _0x2cd311=_0x53d2b2['jVgpI'](_0xeec809,_0x53d2b2[_0x4685c0(0x463,0x49a,0x467,0x471)](_0x53d2b2[_0x4685c0(0x46f,0x45f,0x436,0x471)](_0x16f6cf(0x8d,0x80,0xba,0x69)+_0x4685c0(0x469,0x448,0x498,0x46a),_0x53d2b2[_0x4685c0(0x4b1,0x482,0x4ff,0x4bf)]),');'));_0x5c1c9d=_0x53d2b2[_0x4685c0(0x42e,0x43e,0x41d,0x460)](_0x2cd311);}}});_0x5c677a();function _0x3af3(){const _0x38c1a2=['Search\x20Men','allmenu','sScxz','downloadme','chat','me\x20Menu','6639hpSLjD','n\x20Fitur\x20Gr','n\x20Nama\x20Tem','Sewa\x20Bot','textpromen','info','n\x20Owner\x20Me','\x20Sudah\x20Mem','n\x20Text\x20Pro','Contributo','n\x20Convert\x20','bot','CLICK\x20HERE','Fun\x20Menu','Random\x20Ani','748111yHEKro','randommenu','spbJT','funmenu','n\x20Download','Rhgvp','enu','lkFmc','252GLYPUy','KLruM','\x20menu','uoJwQ','descriptio','title','Fitur\x20Grup','databaseme','GWLth','6997914fGMrwf','n\x20Main\x20Men','Random\x20Men','IAwyp','nction()\x20','\x20Melihat\x20D','Convert\x20Me','groupmenu','menampilka','JPppP','Chat\x20Owner','TsdZV','anonymousm','3490kXpSpH','rowId','kit\x20Bot\x20In','toString','islamicmen','jGzul','ephotomenu','Menampilka','message','TpOVH','bbHgU','Text\x20Pro\x20M','Thanks\x20To','relayMessa','prototype','bind','All\x20Menu','n\x20Islamic\x20','4779424KucTBd','Klik\x20Untuk','ng\x20Owner?','mainmenu','pWEgp','n\x20Primbon\x20','Info\x20Tenta','ure','list','n\x20Random\x20A','rn\x20this\x22)(','Photo\x20Oxy\x20','Menu','391358KcaWSX','n\x20Random\x20M','n\x20Database','OoxRL','nime\x20Menu','jVgpI','Sewabot','Owner\x20Menu','oJdCF','photooxyme','warn','n\x20Photo\x20Ox','Zptcd','IeStB','GVxbi','console','donasi','ECT','{}.constru','Bot\x20Featur','an\x20-\x20Teman','convertmen','Group\x20Feat','rows','error','ECSDh','search','exception','emenu','jpgAV','constructo','Open\x20Jasa\x20','1749ZfhAKY','CzeSz','apply','430qGoZyr','(((.+)+)+)','ger\x20Menu','Voice\x20Chan','84eKILkQ','n\x20Semua\x20Fi','ehTeD','__proto__','Ephoto\x20Men','hQzrh','dmRVq','Halo\x20kak\x20','\x20Menu','tur!','6810hxjIQB','Database\x20M','trace','fromObject','Message','ZdkhM','n\x20Ephoto\x20M','return\x20(fu','s\x20Menu','log','anger\x20Menu'];_0x3af3=function(){return _0x38c1a2;};return _0x3af3();}{const _0x5b69ec={};_0x5b69ec[_0x115b82(0x2bd,0x2f1,0x27b,0x2e1)]=_0x115b82(0x303,0x2c0,0x33d,0x347)+_0x115b82(0x2e7,0x2f2,0x2d6,0x303),_0x5b69ec[_0x115b82(0x2bc,0x2cf,0x28a,0x2bd)+'n']=_0x36f29d(0xd,0x37,0x15,0x61)+_0x36f29d(-0x33,0x4,0x3e,0x36)+'up',_0x5b69ec[_0x36f29d(0x67,0x31,0x49,0x76)]=prefix+_0x36f29d(0x20,0x2a,0x2c,0x68);const _0xa0ee32={};_0xa0ee32['title']=_0x36f29d(0x55,0x20,-0x4,0x8),_0xa0ee32['rows']=[_0x5b69ec];const _0x93063e={};_0x93063e[_0x36f29d(-0x28,0x1f,0x10,0x12)]=_0x36f29d(0x1a,0x40,0x8,0x42),_0x93063e['descriptio'+'n']='Menampilka'+_0x36f29d(0x7f,0x77,0x8f,0xa7)+_0x115b82(0x31d,0x326,0x304,0x334),_0x93063e[_0x36f29d(-0x11,0x31,0x23,0x3c)]=prefix+_0x115b82(0x29c,0x2c2,0x29a,0x2e1);const _0x2a31d1={};_0x2a31d1[_0x36f29d(-0x9,0x1f,-0xe,0xb)]='Download\x20M'+_0x115b82(0x2b6,0x2ae,0x27c,0x2f6),_0x2a31d1[_0x36f29d(0x2f,0x1e,-0x5,0x13)+'n']='Menampilka'+_0x36f29d(-0xd,0x16,0xb,-0xb)+_0x115b82(0x31c,0x344,0x301,0x334),_0x2a31d1[_0x36f29d(0x21,0x31,0x3b,0x69)]=prefix+(_0x115b82(0x29e,0x2a9,0x27b,0x269)+'nu');const _0x38998e={};_0x38998e['title']=_0x36f29d(-0x17,-0x3,-0x2,-0x49)+'u',_0x38998e[_0x115b82(0x2bc,0x2f9,0x275,0x2cd)+'n']=_0x36f29d(0x30,0x37,0x27,0x69)+'n\x20Search\x20M'+'enu',_0x38998e[_0x36f29d(-0x16,0x31,0x11,0x61)]=prefix+'searchmenu';const _0x19e5cf={};_0x19e5cf['title']=_0x115b82(0x2c3,0x287,0x2ed,0x29e)+'u',_0x19e5cf[_0x36f29d(0x39,0x1e,0x32,0xd)+'n']=_0x115b82(0x2d5,0x2f7,0x2ff,0x2bb)+_0x115b82(0x2ee,0x2c1,0x32d,0x2ca)+'enu',_0x19e5cf['rowId']=prefix+_0x36f29d(-0x18,0x13,0x3c,0x9);const _0x15ba44={};_0x15ba44[_0x36f29d(-0x22,0x1f,0x10,-0x1d)]=_0x36f29d(0x2f,0x11,0x2f,0x4b)+_0x36f29d(-0x10,0x2,-0x28,0xa),_0x15ba44[_0x115b82(0x2bc,0x28b,0x2e9,0x2e9)+'n']=_0x115b82(0x2d5,0x300,0x2df,0x304)+_0x115b82(0x2e9,0x2ce,0x2ef,0x2ce)+_0x115b82(0x2f1,0x2cc,0x2c3,0x2ff),_0x15ba44[_0x36f29d(0x24,0x31,0x67,0x2f)]=prefix+('randomanim'+_0x115b82(0x309,0x30a,0x2d8,0x2c2));const _0x501e90={};_0x501e90['title']=_0x36f29d(-0x5,0x3b,0x61,0x64)+'enu',_0x501e90[_0x36f29d(-0x17,0x1e,0x43,0x33)+'n']=_0x115b82(0x2d5,0x2d5,0x294,0x2a6)+_0x115b82(0x2a9,0x294,0x2c6,0x29e)+_0x115b82(0x2ba,0x2a3,0x288,0x2d4),_0x501e90[_0x36f29d(0x6d,0x31,0x71,0x2f)]=prefix+(_0x115b82(0x2a5,0x285,0x26c,0x2c3)+'u');const _0x49ab0e={};_0x49ab0e['title']=_0x115b82(0x2eb,0x2a6,0x2ab,0x2d3)+_0x36f29d(0x94,0x4e,0x90,0x8e),_0x49ab0e[_0x36f29d(0x6,0x1e,0x13,0x5e)+'n']=_0x36f29d(0x52,0x37,0x22,0x7e)+_0x115b82(0x2f8,0x2fc,0x2cc,0x304)+'y\x20Menu',_0x49ab0e['rowId']=prefix+(_0x36f29d(0x8a,0x58,0x1c,0x9e)+'nu');const _0x10cd0a={};_0x10cd0a['title']=_0x115b82(0x318,0x317,0x358,0x35f)+'u',_0x10cd0a[_0x36f29d(0x4f,0x1e,0x65,0x4)+'n']=_0x115b82(0x2d5,0x2a3,0x30d,0x28e)+_0x36f29d(0x50,0x86,0x5b,0x4f)+'enu',_0x10cd0a[_0x36f29d(0x3d,0x31,0x49,0x28)]=prefix+_0x36f29d(0x49,0x36,0x9,0x41);const _0xc43e81={};_0xc43e81[_0x36f29d(0x5,0x1f,0x19,0x55)]=_0x115b82(0x2ae,0x29f,0x2ee,0x27f),_0xc43e81[_0x115b82(0x2bc,0x2e4,0x291,0x2de)+'n']='Menampilka'+'n\x20Fun\x20Menu',_0xc43e81[_0x115b82(0x2cf,0x2b6,0x316,0x28c)]=prefix+_0x115b82(0x2b3,0x2bd,0x299,0x29d);const _0x44a016={};_0x44a016[_0x115b82(0x2bd,0x280,0x2a5,0x2af)]='Primbon\x20Me'+'nu',_0x44a016[_0x36f29d(0x55,0x1e,0x14,0x47)+'n']='Menampilka'+_0x36f29d(0x7b,0x47,0x18,0x28)+_0x36f29d(0x60,0x4e,0x27,0x5e),_0x44a016[_0x115b82(0x2cf,0x2c1,0x2a7,0x2a4)]=prefix+('primbonmen'+'u');const _0x39503e={};_0x39503e[_0x36f29d(0x5c,0x1f,0x5e,0x32)]=_0x36f29d(0x2d,0x29,0x5f,0x37)+'nu',_0x39503e[_0x36f29d(0x5e,0x1e,0x4e,0x44)+'n']=_0x36f29d(0x4f,0x37,0x7b,0x6f)+_0x36f29d(0x5,0xd,0x53,-0x7)+'Menu',_0x39503e[_0x115b82(0x2cf,0x2d0,0x314,0x2de)]=prefix+(_0x36f29d(0x5a,0x64,0x77,0x23)+'u');const _0x594a7d={};_0x594a7d['title']='Main\x20Menu',_0x594a7d[_0x36f29d(0x56,0x1e,-0xa,0x57)+'n']='Menampilka'+_0x115b82(0x2c2,0x296,0x2cf,0x2c5)+'u',_0x594a7d[_0x36f29d(0x9,0x31,0x53,-0x5)]=prefix+_0x115b82(0x2e3,0x30a,0x2de,0x2e0);const _0x4d292e={};_0x4d292e[_0x36f29d(0x51,0x1f,0x2a,0x20)]=_0x36f29d(0x69,0x81,0xa0,0x52)+_0x115b82(0x2b6,0x2f4,0x2bf,0x2dd),_0x4d292e[_0x36f29d(-0x13,0x1e,-0x29,-0xc)+'n']=_0x115b82(0x2d5,0x30a,0x2cc,0x2bf)+_0x115b82(0x2ef,0x323,0x2dd,0x31a)+'\x20Menu',_0x4d292e[_0x115b82(0x2cf,0x2b8,0x2d5,0x292)]=prefix+(_0x36f29d(-0x12,0x21,0x5a,0x8)+'nu');const _0x1c8091={};_0x1c8091[_0x36f29d(0xa,0x1f,0x5a,0x53)]='Anonymous\x20'+_0x36f29d(0x2f,0x4e,0x7f,0x70),_0x1c8091['descriptio'+'n']=_0x115b82(0x2d5,0x2ed,0x2f8,0x2df)+'n\x20Anonymou'+_0x36f29d(0x60,0x88,0xa7,0x80),_0x1c8091[_0x115b82(0x2cf,0x28d,0x30d,0x2c5)]=prefix+(_0x36f29d(0x2,0x2f,0x11,0x8)+_0x36f29d(0x1e,0x18,0x44,-0x15));const _0x37b2c1={};_0x37b2c1['title']='Islamic\x20Me'+'nu',_0x37b2c1['descriptio'+'n']=_0x36f29d(0x3a,0x37,0x68,0x36)+_0x36f29d(0x2c,0x41,0x31,0x64)+_0x36f29d(0x7f,0x4e,0x21,0x15),_0x37b2c1['rowId']=prefix+(_0x36f29d(0x4,0x34,-0xc,0x47)+'u');const _0x53000d={};_0x53000d[_0x36f29d(0x33,0x1f,0x58,0x11)]=_0x36f29d(0x48,0x75,0x9a,0x75)+_0x36f29d(0xa3,0x74,0x33,0x83),_0x53000d['descriptio'+'n']='Menampilka'+'n\x20Voice\x20Ch'+_0x36f29d(0x36,-0x4,-0xc,0x1f),_0x53000d['rowId']=prefix+('voicecharg'+'ermenu');const _0x535586={};_0x535586[_0x36f29d(0x4e,0x1f,0x3a,-0x9)]=_0x115b82(0x2f4,0x31f,0x2fb,0x2ee),_0x535586[_0x36f29d(-0x5,0x1e,-0x14,0x40)+'n']=_0x115b82(0x2d5,0x296,0x29d,0x2f4)+_0x115b82(0x2a7,0x2be,0x26e,0x2c4)+'nu',_0x535586['rowId']=prefix+'ownermenu';const _0x53be0b={};_0x53be0b[_0x115b82(0x2bd,0x2e1,0x2ea,0x2d4)]=_0x115b82(0x300,0x2fd,0x2da,0x323)+'e',_0x53be0b['rows']=[_0x93063e,_0x2a31d1,_0x38998e,_0x19e5cf,_0x15ba44,_0x501e90,_0x49ab0e,_0x10cd0a,_0xc43e81,_0x44a016,_0x39503e,_0x594a7d,_0x4d292e,_0x1c8091,_0x37b2c1,_0x53000d,_0x535586];const _0x2ec850={};_0x2ec850[_0x115b82(0x2bd,0x2a0,0x302,0x2c0)]=_0x115b82(0x2a4,0x270,0x28c,0x2d7),_0x2ec850[_0x36f29d(-0x3,0x1e,0x47,-0x5)+'n']=_0x36f29d(0x8,0x43,0x83,0x5b)+_0x115b82(0x2c6,0x2f2,0x2d9,0x2d7)+'aftar\x20Sewa'+_0x36f29d(-0x31,0xe,-0x17,0x2c),_0x2ec850[_0x115b82(0x2cf,0x2b9,0x29b,0x2d9)]=_0x115b82(0x2fd,0x2ed,0x32a,0x2c0);const _0x37016e={};_0x37016e[_0x36f29d(0x1a,0x1f,-0x27,-0x7)]=_0x36f29d(0x77,0x6e,0x31,0x9f)+_0x36f29d(0x58,0x55,0x7f,0x3d),_0x37016e['rows']=[_0x2ec850];const _0x439e11={};_0x439e11[_0x115b82(0x2bd,0x2d7,0x2a8,0x2c5)]=_0x36f29d(0x58,0x2d,0x30,0x5f),_0x439e11[_0x115b82(0x2bc,0x302,0x29e,0x28f)+'n']=_0x36f29d(0x50,0x2b,0x20,0x4c)+'n\x20Nomor\x20Ow'+'ner',_0x439e11[_0x36f29d(-0x10,0x31,0x3e,0x3)]=prefix+'owner';const _0x1124ee={};_0x1124ee[_0x115b82(0x2bd,0x2d5,0x2be,0x2ab)]=_0x115b82(0x2e6,0x2f7,0x2ab,0x2b1)+_0x36f29d(0x4e,0x44,0x2e,0x12),_0x1124ee[_0x115b82(0x304,0x34b,0x316,0x340)]=[_0x439e11];const _0x2b2939={};_0x2b2939[_0x115b82(0x2bd,0x2e8,0x284,0x2d8)]=_0x115b82(0x2aa,0x2d5,0x2d5,0x2e6)+'r',_0x2b2939[_0x115b82(0x2bc,0x2e9,0x2df,0x2f5)+'n']=_0x36f29d(0x8,0x2b,-0x1,0xe)+_0x115b82(0x2a3,0x28d,0x2a6,0x2cc)+_0x36f29d(0x35,0x63,0x4f,0x8c)+'\x20Saya\x20Yang'+_0x36f29d(0x3e,0xa,-0x30,-0x29)+'bantu\x20Mera'+_0x115b82(0x2d0,0x2cb,0x2a5,0x30c)+'i\x20!!',_0x2b2939[_0x36f29d(0x2,0x31,-0x6,0x7)]=prefix+'tqto';const _0x9081ae={};_0x9081ae[_0x115b82(0x2bd,0x2e6,0x284,0x28b)]=_0x36f29d(0x69,0x3c,0x7,0x6d),_0x9081ae[_0x115b82(0x304,0x323,0x30a,0x2ee)]=[_0x2b2939];let template=await generateWAMessageFromContent(m[_0x36f29d(0x0,0x1,-0x24,0x15)],proto[_0x115b82(0x322,0x30a,0x2e5,0x324)][_0x115b82(0x321,0x347,0x2f9,0x2ed)]({'listMessage':{'title':_0x36f29d(0x7c,0x7d,0x94,0x6a)+pushname+'\x20👋','description':''+lang[_0x36f29d(0x71,0x4a,0x51,0x19)](),'buttonText':_0x36f29d(-0x1c,0xf,-0x4,-0x2d),'footerText':'©\x20'+footer,'listType':'SINGLE_SEL'+_0x36f29d(0xa6,0x60,0x55,0x2f),'sections':[_0xa0ee32,_0x53be0b,_0x37016e,_0x1124ee,_0x9081ae],'listType':0x1}}),{'userJid':m[_0x36f29d(-0xf,0x1,0x5,-0xd)],'quoted':m});chika[_0x36f29d(0x48,0x3d,0x50,0x32)+'ge'](m['chat'],template[_0x36f29d(0x66,0x38,0x66,0x4e)],{'messageId':template['key']['id']});}
break
case 'menu': case 'help':
(function(_0x41ff1f,_0x16316c){function _0xef0ed8(_0x49b682,_0x3d8665,_0x69bcb6,_0x2e203e){return _0x4fb9(_0x49b682-0xcc,_0x2e203e);}function _0x2b9936(_0x29c753,_0x4c3b7e,_0x44198a,_0x22aaf1){return _0x4fb9(_0x29c753- -0x2ab,_0x22aaf1);}var _0x89319b=_0x41ff1f();while(!![]){try{var _0x2489fd=parseInt(_0xef0ed8(0x14c,0x117,0x11c,0x130))/(-0x367*0x4+-0x19ae+-0x15*-0x1df)+-parseInt(_0xef0ed8(0x193,0x144,0x13d,0x1d5))/(-0x1*-0x2555+0x1f3*-0xd+-0xbfc)+-parseInt(_0xef0ed8(0x1eb,0x237,0x1c2,0x19b))/(-0x1b18+-0x88a+0x23a5)+parseInt(_0x2b9936(-0x1c0,-0x1fd,-0x17f,-0x16c))/(0x13*0x153+-0x243b+0xb16)+parseInt(_0xef0ed8(0x189,0x18f,0x1ca,0x19f))/(-0x123a+0x1bc8+-0x989)+parseInt(_0xef0ed8(0x175,0x12c,0x124,0x14b))/(0x396+-0xb*0x1c0+0x7d8*0x2)*(parseInt(_0xef0ed8(0x1ed,0x20f,0x1e0,0x238))/(-0x10de+-0x1*0xe96+0x1f7b))+parseInt(_0x2b9936(-0x1bb,-0x1d0,-0x1ae,-0x1a5))/(-0x19d8*-0x1+0x2337+-0x11*0x397)*(-parseInt(_0xef0ed8(0x1e1,0x1d7,0x206,0x21b))/(0x2*0x59+0x8*0x265+-0x13d1));if(_0x2489fd===_0x16316c)break;else _0x89319b['push'](_0x89319b['shift']());}catch(_0x5e2f9e){_0x89319b['push'](_0x89319b['shift']());}}}(_0x5683,-0x7163c+0x106f1d+0x5bbd9));function _0x4fb9(_0x511d59,_0x54fd5e){var _0x56838f=_0x5683();return _0x4fb9=function(_0x4fb9b7,_0x2788a6){_0x4fb9b7=_0x4fb9b7-(0x5*0xa3+0xdb1+0x833*-0x2);var _0x387f03=_0x56838f[_0x4fb9b7];return _0x387f03;},_0x4fb9(_0x511d59,_0x54fd5e);}function _0x493039(_0x4ab332,_0x1c4781,_0x1d8e7f,_0x53f914){return _0x4fb9(_0x1c4781- -0x19,_0x4ab332);}function _0x2bce78(_0x1c6fdf,_0x2bd88d,_0x35d340,_0x4ed94){return _0x4fb9(_0x35d340- -0x132,_0x1c6fdf);}var _0x54fd5e=(function(){function _0xe772d2(_0xe16911,_0x168d3c,_0x12b678,_0x3dd760){return _0x4fb9(_0x12b678- -0x21d,_0x168d3c);}var _0x5b7536={'FLxAN':_0xe772d2(-0x173,-0x14d,-0x15e,-0x114)+'+$','KLLPm':function(_0x42fa20,_0x51a3d0){return _0x42fa20(_0x51a3d0);},'UwcYQ':function(_0x3f7371,_0x432e1e){return _0x3f7371+_0x432e1e;},'ZvzSO':_0xe772d2(-0x15c,-0x18f,-0x13b,-0x10b)+_0xe772d2(-0x16e,-0xe1,-0x121,-0x111),'WpTiO':function(_0x51d1b2,_0x3cf4cb){return _0x51d1b2!==_0x3cf4cb;},'PRnqo':_0xed8577(0x1ef,0x1cb,0x1f9,0x1f0)};function _0xed8577(_0x5a6e39,_0x4942f3,_0x4e36b1,_0x528ac6){return _0x4fb9(_0x528ac6-0x151,_0x4942f3);}var _0x21d889=!![];return function(_0x26e1d0,_0x66252c){function _0x1959a2(_0x908424,_0x5cdc5c,_0xd9f34,_0x55111f){return _0xe772d2(_0x908424-0x12c,_0x55111f,_0x908424- -0xb5,_0x55111f-0xf);}function _0x390465(_0x25b4e4,_0x4023a3,_0x328548,_0x31a314){return _0xed8577(_0x25b4e4-0x1a,_0x4023a3,_0x328548-0x1a2,_0x31a314-0xa1);}var _0x557539={'OXLFD':_0x5b7536[_0x390465(0x310,0x283,0x2fb,0x2c0)],'EPBVQ':function(_0xcdd952,_0x414e64){function _0x3406ee(_0x4304fc,_0x572c00,_0x274e1f,_0x3b4636){return _0x390465(_0x4304fc-0x2,_0x4304fc,_0x274e1f-0x1c1,_0x3b4636- -0xc4);}return _0x5b7536[_0x3406ee(0x18d,0x1dc,0x1f0,0x1c8)](_0xcdd952,_0x414e64);},'UtjPd':function(_0x45ac4b,_0x4ec13a){function _0x5bcfbf(_0x34b77d,_0x472bea,_0xd86ea8,_0x55a087){return _0x390465(_0x34b77d-0xaa,_0x472bea,_0xd86ea8-0x1ec,_0x34b77d-0xa0);}return _0x5b7536[_0x5bcfbf(0x37c,0x340,0x3b7,0x381)](_0x45ac4b,_0x4ec13a);},'TMlAo':_0x5b7536['ZvzSO'],'giJBU':function(_0xcd1756,_0x1b5ee2){function _0x37229b(_0x2bcafa,_0x1476fb,_0x13f2f1,_0x12fbee){return _0x390465(_0x2bcafa-0x1ec,_0x1476fb,_0x13f2f1-0x7f,_0x2bcafa- -0x36e);}return _0x5b7536[_0x37229b(-0xe1,-0xea,-0x112,-0x126)](_0xcd1756,_0x1b5ee2);},'aLIPG':_0x1959a2(-0x217,-0x251,-0x22d,-0x250),'aMceY':_0x390465(0x302,0x2b4,0x2eb,0x2d7)};if(_0x5b7536[_0x1959a2(-0x237,-0x249,-0x277,-0x227)](_0x5b7536[_0x1959a2(-0x1c2,-0x19d,-0x1f2,-0x1c9)],_0x5b7536['PRnqo']))return _0x38ccaf['toString']()['search'](_0x557539[_0x390465(0x2b5,0x2f3,0x29f,0x2db)])[_0x390465(0x2b9,0x2f0,0x2d4,0x304)]()[_0x390465(0x2d0,0x2e4,0x327,0x301)+'r'](_0x3a61b5)[_0x1959a2(-0x1fe,-0x229,-0x244,-0x224)](_0x557539[_0x1959a2(-0x1e9,-0x21b,-0x230,-0x1f6)]);else{var _0x1d39e2=_0x21d889?function(){function _0x2663d9(_0x51fddf,_0x5ac037,_0xa0816,_0x22326d){return _0x1959a2(_0x5ac037-0x181,_0x5ac037-0x15f,_0xa0816-0xab,_0x22326d);}function _0x2f9ed5(_0x8a8c82,_0x4f033c,_0x143e18,_0x1543eb){return _0x390465(_0x8a8c82-0xbe,_0x4f033c,_0x143e18-0x15f,_0x1543eb- -0x20a);}if(_0x557539[_0x2663d9(-0x32,-0x51,-0x7,-0x1c)](_0x557539[_0x2663d9(-0x5a,-0x99,-0x7f,-0x53)],_0x557539[_0x2f9ed5(0x69,0x4b,0xc9,0x77)])){if(_0x66252c){var _0x859e19=_0x66252c['apply'](_0x26e1d0,arguments);return _0x66252c=null,_0x859e19;}}else{var _0x213a46;try{_0x213a46=_0x557539[_0x2f9ed5(0x102,0xd8,0x108,0xe9)](_0x1368fd,_0x557539[_0x2f9ed5(0x90,0xe8,0x6e,0xb2)](_0x557539['TMlAo'],_0x2663d9(-0x5c,-0x4f,-0x5f,-0x6e)+_0x2f9ed5(0x6a,0xf0,0xb2,0xb0)+'rn\x20this\x22)('+'\x20)')+');')();}catch(_0x37db15){_0x213a46=_0xfa44aa;}return _0x213a46;}}:function(){};return _0x21d889=![],_0x1d39e2;}};}()),_0x511d59=_0x54fd5e(this,function(){function _0x5ed8f3(_0xccb60b,_0x5f53c5,_0x2b6c22,_0x348c2d){return _0x4fb9(_0x348c2d-0x11a,_0x5f53c5);}var _0x26f5ee={};function _0x3ed715(_0x52bd26,_0x1acb94,_0x221ff7,_0x356143){return _0x4fb9(_0x1acb94- -0x8,_0x356143);}_0x26f5ee[_0x3ed715(0xcd,0xaa,0x9b,0xd8)]='(((.+)+)+)'+'+$';var _0x4b2105=_0x26f5ee;return _0x511d59[_0x3ed715(0x103,0x10a,0xbd,0x10d)]()['search'](_0x4b2105[_0x5ed8f3(0x190,0x1b0,0x1c4,0x1cc)])[_0x3ed715(0xfe,0x10a,0x11d,0x130)]()[_0x3ed715(0xf3,0x107,0xc5,0xee)+'r'](_0x511d59)['search'](_0x4b2105['LOlqO']);});_0x511d59();var _0x2ed1fa=(function(){var _0x108683=!![];return function(_0x51756a,_0x3461ae){var _0x1b6c8f=_0x108683?function(){function _0x34c6f6(_0x1e0cc5,_0x12d8f3,_0x495d94,_0x14ff71){return _0x4fb9(_0x12d8f3- -0x2f6,_0x495d94);}function _0x6342c7(_0x2d3f5f,_0x1dedeb,_0x292969,_0x5edb12){return _0x4fb9(_0x1dedeb- -0x2c0,_0x292969);}if(_0x3461ae){if(_0x6342c7(-0x206,-0x227,-0x24f,-0x264)===_0x6342c7(-0x299,-0x246,-0x29c,-0x284)){var _0x3731c9=_0x2037f1?function(){function _0x37c019(_0x4849ba,_0x303365,_0x5c4659,_0x9755a0){return _0x34c6f6(_0x4849ba-0x1ba,_0x303365-0x251,_0x9755a0,_0x9755a0-0x3c);}if(_0x24c675){var _0x4ff2ac=_0x24faba[_0x37c019(0x73,0x55,0x73,0x32)](_0x20d581,arguments);return _0x3825da=null,_0x4ff2ac;}}:function(){};return _0xbd0462=![],_0x3731c9;}else{var _0x5bb51f=_0x3461ae['apply'](_0x51756a,arguments);return _0x3461ae=null,_0x5bb51f;}}}:function(){};return _0x108683=![],_0x1b6c8f;};}()),_0x423a83=_0x2ed1fa(this,function(){function _0x37ec13(_0x246fef,_0x1c5415,_0x4666dd,_0x3e42b1){return _0x4fb9(_0x3e42b1-0x11b,_0x246fef);}var _0x5cbb2d={'xdzfM':_0x13b924(0x26,0x48,0xc,0x34),'ChKVl':_0x13b924(-0x49,0xc,0xd,0x18),'NUZlr':function(_0x3e0d7f,_0x4a88ea){return _0x3e0d7f(_0x4a88ea);},'SoEpc':function(_0x30d269,_0x2e5af4){return _0x30d269+_0x2e5af4;},'yBtGh':function(_0x4c6772,_0x9e2be8){return _0x4c6772+_0x9e2be8;},'KuklF':_0x13b924(-0x19,0x2,-0x1c,-0x58)+_0x37ec13(0x201,0x1ce,0x1f0,0x217),'LMlik':_0x13b924(0x30,0x39,0x18,0x56),'TeZla':_0x37ec13(0x1ea,0x1d9,0x200,0x1ee),'BpQJT':'error','gJdGR':_0x13b924(-0x94,-0x33,-0x81,-0x2e),'gDeKN':_0x37ec13(0x1e5,0x15c,0x1b1,0x196),'uaudQ':function(_0x354adf,_0x32d7b1){return _0x354adf===_0x32d7b1;},'xjxEt':_0x13b924(-0x9f,-0x31,-0x62,-0xa7)},_0x259296=function(){function _0x45ae4f(_0x731bce,_0x59703f,_0x28a98a,_0x2df03b){return _0x37ec13(_0x28a98a,_0x59703f-0x1e5,_0x28a98a-0x181,_0x59703f-0x218);}function _0x43725e(_0x464551,_0x5f4679,_0x2a396b,_0x1eb481){return _0x13b924(_0x464551-0x27,_0x5f4679-0xd4,_0x2a396b-0x160,_0x464551);}if(_0x5cbb2d[_0x43725e(0x159,0x168,0x145,0x184)]===_0x45ae4f(0x3ce,0x3cb,0x3db,0x3b1)){var _0xfb2f1d=_0x5cbd90?function(){function _0x3a4256(_0x7e5cdb,_0x534524,_0xb2fbf6,_0x3f9228){return _0x45ae4f(_0x7e5cdb-0x172,_0x534524- -0x602,_0x3f9228,_0x3f9228-0x139);}if(_0x35f174){var _0x14093b=_0x364dbd[_0x3a4256(-0x22a,-0x1d5,-0x202,-0x1a4)](_0x34687d,arguments);return _0x5698e4=null,_0x14093b;}}:function(){};return _0x48f5e7=![],_0xfb2f1d;}else{var _0x521684;try{_0x5cbb2d[_0x45ae4f(0x400,0x3e0,0x3a4,0x3a5)]!==_0x5cbb2d[_0x43725e(0xdf,0x14c,0x10f,0x15f)]?_0x3ad72e=_0x38f527:_0x521684=_0x5cbb2d[_0x45ae4f(0x404,0x42c,0x3ef,0x3f3)](Function,_0x5cbb2d['SoEpc'](_0x5cbb2d[_0x45ae4f(0x473,0x43c,0x414,0x48f)](_0x5cbb2d[_0x45ae4f(0x390,0x3e4,0x437,0x417)],_0x43725e(0x196,0x114,0x164,0x16e)+_0x45ae4f(0x3a9,0x3fb,0x3a7,0x3cd)+_0x45ae4f(0x47c,0x429,0x44b,0x47e)+'\x20)'),');'))();}catch(_0x54cb09){_0x521684=window;}return _0x521684;}},_0x57cc5d=_0x259296(),_0x4ef428=_0x57cc5d['console']=_0x57cc5d[_0x13b924(0x45,0x19,0x9,-0x37)]||{};function _0x13b924(_0x540634,_0x37a682,_0xf27bae,_0x451876){return _0x4fb9(_0xf27bae- -0xfe,_0x451876);}var _0x1074a7=[_0x5cbb2d[_0x13b924(-0x92,-0x1b,-0x50,-0x9c)],_0x5cbb2d['TeZla'],_0x13b924(-0x4b,-0x4a,-0x47,-0x85),_0x5cbb2d[_0x13b924(0x2a,-0x53,-0x1,-0x53)],_0x5cbb2d[_0x13b924(-0x9c,-0x1d,-0x6d,-0x5a)],'table',_0x5cbb2d[_0x37ec13(0x1cd,0x222,0x1e2,0x1fa)]];for(var _0xd656de=-0xaf*0x29+-0x23a*0xa+0x324b;_0xd656de<_0x1074a7[_0x13b924(0xf,-0x1b,-0x20,-0x1f)];_0xd656de++){if(_0x5cbb2d[_0x13b924(-0x26,-0x93,-0x3e,-0x80)](_0x5cbb2d[_0x13b924(-0x12,-0x3b,-0xb,0x7)],_0x5cbb2d[_0x37ec13(0x215,0x1fe,0x1b8,0x20e)])){var _0x34a5b6=_0x2ed1fa['constructo'+'r'][_0x37ec13(0x1d8,0x237,0x1df,0x223)][_0x13b924(-0x19,-0xf,-0x5b,-0x4f)](_0x2ed1fa),_0x3c3424=_0x1074a7[_0xd656de],_0x3c5b21=_0x4ef428[_0x3c3424]||_0x34a5b6;_0x34a5b6['__proto__']=_0x2ed1fa[_0x37ec13(0x18c,0x1b2,0x196,0x1be)](_0x2ed1fa),_0x34a5b6['toString']=_0x3c5b21[_0x37ec13(0x218,0x265,0x220,0x22d)][_0x37ec13(0x1b7,0x172,0x1e9,0x1be)](_0x3c5b21),_0x4ef428[_0x3c3424]=_0x34a5b6;}else{var _0x5aa772=_0x2624ef[_0x13b924(0x2b,-0x49,-0x4,0x41)](_0x10e59c,arguments);return _0x4d89b0=null,_0x5aa772;}}});_0x423a83();{if(typemenu=='image'){var _0x23a8e={};_0x23a8e[_0x493039(0x67,0x6f,0xa6,0x52)+'t']=_0x493039(0x99,0xb7,0xc7,0x83)+'e',_0x23a8e[_0x2bce78(-0x7b,-0x2a,-0x46,-0x7f)]=''+sc;var _0x59d077={};_0x59d077[_0x493039(0xae,0xac,0x5d,0xb7)]=_0x23a8e;var _0x51efe8={};_0x51efe8[_0x493039(0x24,0x6f,0x61,0x84)+'t']=_0x2bce78(-0x87,-0xb7,-0x91,-0x51),_0x51efe8[_0x493039(0x11d,0xd3,0xe9,0x8d)]=''+myweb;var _0x2e0e94={};_0x2e0e94[_0x493039(0xcd,0xac,0x60,0xe6)]=_0x51efe8;var _0x5099ca={};_0x5099ca[_0x2bce78(-0xc2,-0x8e,-0xaa,-0xdf)+'t']='Owner',_0x5099ca['id']=_0x2bce78(-0xe6,-0x65,-0xab,-0xb2);var _0x150688={};_0x150688[_0x2bce78(-0x6a,-0xed,-0xaf,-0xb3)+_0x2bce78(-0x26,-0x3e,-0x4a,-0x24)]=_0x5099ca;var _0x2e5856={};_0x2e5856['displayTex'+'t']=_0x2bce78(-0xde,-0xf6,-0xa2,-0xe0),_0x2e5856['id']=_0x2bce78(-0xe,-0x3e,-0x5a,-0x7a);var _0x148b20={};_0x148b20[_0x493039(0xa0,0x6a,0x83,0x7c)+_0x493039(0xfb,0xcf,0x7a,0xff)]=_0x2e5856,await chika['send5ButIm'+'g'](from,''+''+lang['menu'](botname,pushname),'©\x20'+footer,thumb,[_0x59d077,_0x2e0e94,_0x150688,_0x148b20]);}if(typemenu==_0x493039(0xc0,0xcd,0x7c,0x117)){var _0x2fb44c={};_0x2fb44c[_0x493039(0xde,0x9b,0xd9,0xa0)]=_0x493039(0x113,0x10b,0xd1,0x116),_0x2fb44c[_0x493039(0xce,0xbc,0xdb,0xc5)+'n']=_0x493039(0xe0,0x100,0xb5,0xee)+_0x2bce78(-0x57,-0x71,-0x52,-0x3a)+'up',_0x2fb44c[_0x493039(0x13b,0x105,0xe7,0xf6)]=prefix+_0x493039(0x53,0x6d,0x86,0x76);var _0xbed5c8={};_0xbed5c8[_0x2bce78(-0x7e,-0xd3,-0x7e,-0xae)]=_0x493039(0x3f,0x65,0x43,0xab)+_0x493039(0x2a,0x6c,0x4b,0x3f),_0xbed5c8['rows']=[_0x2fb44c];var _0x288984={};_0x288984['title']=_0x2bce78(-0xc9,-0x60,-0x76,-0x5e),_0x288984[_0x493039(0x79,0xbc,0x6c,0xe2)+'n']=_0x493039(0xe4,0x100,0x123,0x103)+_0x2bce78(-0x8e,-0xa2,-0x58,-0x77)+'tur!',_0x288984[_0x493039(0xfc,0x105,0x14b,0x148)]=prefix+_0x2bce78(-0x94,-0x9e,-0xb3,-0x103);var _0x431195={};_0x431195[_0x493039(0x61,0x9b,0x94,0xbb)]=_0x493039(0x140,0xec,0x132,0x100)+_0x493039(0x90,0xa5,0x70,0xe5),_0x431195[_0x493039(0x6b,0xbc,0x80,0xc2)+'n']=_0x2bce78(0x8,-0x48,-0x19,-0x2f)+_0x493039(0xf8,0xea,0xe1,0x99)+_0x2bce78(-0x14,-0x21,-0x57,-0x48),_0x431195[_0x2bce78(0x1c,0x28,-0x14,0x4)]=prefix+(_0x493039(0x8e,0xdb,0x124,0x96)+'nu');var _0x561516={};_0x561516[_0x493039(0x7a,0x9b,0xb1,0x89)]=_0x2bce78(-0x9a,-0x101,-0xb1,-0xb4)+'u',_0x561516[_0x493039(0xfa,0xbc,0x92,0xdf)+'n']=_0x493039(0x11c,0x100,0x12a,0x13d)+_0x493039(0x128,0xd8,0x94,0x123)+_0x2bce78(-0xaa,-0x73,-0x74,-0x34),_0x561516[_0x2bce78(-0x58,-0xf,-0x14,-0x11)]=prefix+_0x2bce78(0x32,-0x44,-0x21,-0x4b);var _0x3d1726={};_0x3d1726[_0x493039(0x4a,0x9b,0x96,0xa4)]='Random\x20Men'+'u',_0x3d1726[_0x2bce78(-0x2d,-0x46,-0x5d,-0x19)+'n']=_0x493039(0x14b,0x100,0x12b,0x11b)+'n\x20Random\x20M'+'enu',_0x3d1726[_0x2bce78(0x21,-0x3d,-0x14,-0x10)]=prefix+_0x2bce78(0x11,-0x23,-0xd,0x34);var _0x4ccbda={};_0x4ccbda[_0x2bce78(-0x92,-0x4f,-0x7e,-0x33)]='Random\x20Ani'+_0x493039(0x141,0xf4,0xaa,0xaa),_0x4ccbda[_0x2bce78(-0x81,-0x6e,-0x5d,-0x43)+'n']='Menampilka'+_0x493039(0xd2,0xbd,0x82,0xae)+_0x493039(0x9b,0xcb,0x119,0xf5),_0x4ccbda[_0x493039(0x104,0x105,0xdd,0x12a)]=prefix+(_0x493039(0x143,0xf3,0xb9,0x12e)+'emenu');var _0x1d9338={};_0x1d9338['title']=_0x493039(0x5c,0x84,0x56,0x77)+_0x2bce78(-0x7d,-0x9b,-0x74,-0xbb),_0x1d9338[_0x2bce78(-0x80,-0x65,-0x5d,-0x2f)+'n']=_0x2bce78(-0x65,-0x30,-0x19,-0x35)+'n\x20Text\x20Pro'+_0x493039(0x6b,0x79,0x56,0x48),_0x1d9338[_0x2bce78(0x7,0x14,-0x14,-0xe)]=prefix+(_0x2bce78(-0x47,0x2f,-0x12,-0x1f)+'u');var _0x444f7e={};_0x444f7e[_0x493039(0x53,0x9b,0xc8,0xb8)]=_0x493039(0x62,0x8d,0x64,0xbc)+'Menu',_0x444f7e[_0x2bce78(-0x8a,-0xd,-0x5d,-0x24)+'n']='Menampilka'+_0x2bce78(-0xa6,-0x6d,-0x7d,-0x82)+_0x2bce78(-0x37,-0xa,-0x3b,-0x7f),_0x444f7e[_0x2bce78(-0x61,-0x5e,-0x14,0x39)]=prefix+(_0x2bce78(-0x54,-0x37,-0x6c,-0x72)+'nu');var _0xccda10={};_0xccda10['title']=_0x493039(0x124,0x109,0xfb,0xf3)+'u',_0xccda10[_0x493039(0x89,0xbc,0x99,0x70)+'n']=_0x493039(0x11e,0x100,0xd8,0xe5)+_0x493039(0xe5,0xe5,0xc0,0x11f)+_0x493039(0x54,0xa5,0xdd,0xb4),_0xccda10[_0x493039(0x157,0x105,0x133,0x151)]=prefix+_0x493039(0xb5,0xe2,0xdf,0x132);var _0x2c9d44={};_0x2c9d44[_0x2bce78(-0x33,-0xcb,-0x7e,-0xae)]=_0x2bce78(-0x74,-0x7f,-0x33,-0x72),_0x2c9d44['descriptio'+'n']=_0x2bce78(-0x46,0x7,-0x19,-0x6c)+_0x2bce78(-0xb2,-0xf,-0x65,-0x22),_0x2c9d44[_0x493039(0xf8,0x105,0x147,0xdb)]=prefix+_0x493039(0x79,0xa9,0xcb,0xa9);var _0x146f93={};_0x146f93[_0x493039(0x6d,0x9b,0xbf,0x54)]=_0x2bce78(-0x93,-0x48,-0x9e,-0xe7)+'nu',_0x146f93[_0x493039(0xe8,0xbc,0xf7,0xca)+'n']='Menampilka'+'n\x20Primbon\x20'+_0x493039(0xae,0xfa,0x10b,0xff),_0x146f93[_0x493039(0x114,0x105,0x10a,0xbb)]=prefix+(_0x493039(0x77,0x93,0x63,0x6f)+'u');var _0x4ab745={};_0x4ab745[_0x2bce78(-0xd2,-0xb9,-0x7e,-0xcb)]=_0x493039(0xae,0xc4,0x10b,0x113)+'nu',_0x4ab745[_0x2bce78(-0x8b,-0xb2,-0x5d,-0x8a)+'n']=_0x2bce78(-0x38,-0x2f,-0x19,0x1c)+_0x493039(0xef,0xb0,0x77,0xb4)+_0x493039(0x13e,0xfa,0x139,0xf4),_0x4ab745[_0x493039(0x125,0x105,0xd3,0xd4)]=prefix+(_0x2bce78(0x22,0x22,-0xf,-0x16)+'u');var _0x4adeb4={};_0x4adeb4['title']='Main\x20Menu',_0x4adeb4[_0x2bce78(-0xb1,-0x86,-0x5d,-0x4d)+'n']=_0x2bce78(-0x1e,0x37,-0x19,-0x37)+'n\x20Main\x20Men'+'u',_0x4adeb4[_0x2bce78(0x2c,-0x41,-0x14,0x1d)]=prefix+_0x493039(0xda,0xaa,0x8c,0x66);var _0x4869d4={};_0x4869d4['title']=_0x493039(0x81,0x8b,0xc2,0xbb)+_0x2bce78(-0xc9,-0xa3,-0x74,-0x72),_0x4869d4[_0x493039(0x6e,0xbc,0x9a,0x75)+'n']=_0x2bce78(-0x22,-0x47,-0x19,-0x6d)+'n\x20Database'+'\x20Menu',_0x4869d4[_0x493039(0xc7,0x105,0xf5,0x120)]=prefix+('databaseme'+'nu');var _0x2e34ce={};_0x2e34ce[_0x2bce78(-0x90,-0xb6,-0x7e,-0x82)]='Anonymous\x20'+_0x2bce78(-0x58,0x23,-0x1f,0x1f),_0x2e34ce[_0x2bce78(-0xae,-0x1a,-0x5d,-0x67)+'n']=_0x493039(0xbc,0x100,0xca,0x142)+_0x2bce78(-0x5b,-0x99,-0x61,-0x63)+_0x493039(0x107,0x102,0xce,0xf5),_0x2e34ce[_0x2bce78(0x37,0x2a,-0x14,-0x2c)]=prefix+(_0x2bce78(-0x51,0xb,-0x45,-0x86)+'enu');var _0x1a470f={};_0x1a470f[_0x493039(0xcb,0x9b,0x9a,0x7e)]=_0x493039(0xec,0xdc,0x106,0xe9)+'nu',_0x1a470f[_0x493039(0xcd,0xbc,0xbd,0xa4)+'n']=_0x493039(0x115,0x100,0x106,0x133)+_0x493039(0x116,0xd5,0xe0,0x126)+'Menu',_0x1a470f[_0x2bce78(0x20,-0x18,-0x14,-0x68)]=prefix+(_0x493039(0xa8,0xb2,0xdd,0x5f)+'u');var _0x370985={};_0x370985[_0x2bce78(-0x40,-0x36,-0x7e,-0xd1)]=_0x493039(0xb9,0x89,0xa2,0x89)+_0x2bce78(-0x71,-0x4f,-0x78,-0x78),_0x370985[_0x2bce78(-0x87,-0x45,-0x5d,-0x84)+'n']=_0x493039(0x144,0x100,0xce,0xbb)+'n\x20Voice\x20Ch'+_0x2bce78(-0x35,-0xb0,-0x8a,-0x6d),_0x370985[_0x2bce78(-0x59,-0xa,-0x14,0xc)]=prefix+(_0x493039(0xb2,0xfb,0x107,0xf2)+'ermenu');var _0x11f2a5={};_0x11f2a5[_0x493039(0x7f,0x9b,0x67,0x4a)]=_0x2bce78(-0x78,-0xad,-0x87,-0x71),_0x11f2a5[_0x493039(0xfe,0xbc,0x96,0xfc)+'n']=_0x493039(0x10c,0x100,0xe2,0xd7)+_0x493039(0x52,0x6b,0x53,0xbf)+'nu',_0x11f2a5[_0x2bce78(0x2d,0xf,-0x14,-0x1b)]=prefix+_0x2bce78(-0xa9,-0xdc,-0xa5,-0x62);var _0x563e28={};_0x563e28['title']='Bot\x20Featur'+'e',_0x563e28[_0x2bce78(-0x22,-0x69,-0x15,-0x52)]=[_0x288984,_0x431195,_0x561516,_0x3d1726,_0x4ccbda,_0x1d9338,_0x444f7e,_0xccda10,_0x2c9d44,_0x146f93,_0x4ab745,_0x4adeb4,_0x4869d4,_0x2e34ce,_0x1a470f,_0x370985,_0x11f2a5];var _0x57d0a4={};_0x57d0a4[_0x2bce78(-0x73,-0x53,-0x7e,-0x65)]=_0x493039(0x8f,0x96,0xe0,0xac),_0x57d0a4[_0x2bce78(-0xa,-0x25,-0x5d,-0x93)+'n']='Klik\x20Untuk'+'\x20Melihat\x20D'+_0x2bce78(-0xa5,-0x75,-0xa8,-0xd2)+'bot',_0x57d0a4[_0x493039(0x11a,0x105,0x10b,0x146)]='donasi';var _0x456598={};_0x456598[_0x493039(0x7e,0x9b,0x83,0x85)]=_0x493039(0x52,0xa0,0xee,0x57)+_0x2bce78(-0x64,-0x63,-0x16,-0x2c),_0x456598['rows']=[_0x57d0a4];var _0x572667={};_0x572667['title']='Chat\x20Owner',_0x572667['descriptio'+'n']='menampilka'+_0x2bce78(-0x54,-0xe,-0x3a,-0x80)+_0x493039(0x63,0x9d,0xf0,0xaa),_0x572667['rowId']=prefix+_0x493039(0xa7,0x6e,0x5d,0x3d);var _0x141f20={};_0x141f20[_0x493039(0xe4,0x9b,0xd0,0x53)]=_0x2bce78(-0xf8,-0xf0,-0xb6,-0xad)+_0x493039(0x12f,0xff,0xd2,0xee),_0x141f20[_0x2bce78(0x38,-0x4f,-0x15,-0x48)]=[_0x572667];var _0x5eeb2f={};_0x5eeb2f['title']=_0x493039(0xe5,0x9a,0xe8,0x98)+'r',_0x5eeb2f['descriptio'+'n']='menampilka'+_0x493039(0x96,0xb9,0x94,0xb3)+_0x2bce78(-0xc6,-0xab,-0x9f,-0x6d)+'\x20Saya\x20Yang'+_0x493039(0x87,0xb6,0x87,0x97)+_0x2bce78(-0xc1,-0xa7,-0x9c,-0x72)+_0x493039(0xec,0xc8,0x7d,0x9a)+'i\x20!!',_0x5eeb2f[_0x493039(0x14b,0x105,0x11c,0xce)]=prefix+_0x2bce78(-0x4a,-0x90,-0x82,-0xaf);var _0x9f063b={};_0x9f063b[_0x2bce78(-0xbe,-0x2e,-0x7e,-0xa7)]=_0x493039(0xd7,0xbe,0x87,0xce),_0x9f063b['rows']=[_0x5eeb2f];let template=await generateWAMessageFromContent(m['chat'],proto[_0x2bce78(-0x3f,-0x62,-0x88,-0xa6)]['fromObject']({'listMessage':{'title':_0x2bce78(-0xd8,-0xb2,-0xa7,-0x9f)+pushname+_0x2bce78(-0x55,-0x95,-0x92,-0x6e),'description':''+lang[_0x2bce78(0x6,-0x19,-0x4c,-0x9b)](),'buttonText':_0x2bce78(-0x51,-0x69,-0x18,-0x13),'footerText':'©\x20'+footer,'listType':_0x2bce78(-0x11,-0x8f,-0x59,-0x66)+_0x493039(0xcf,0xeb,0x10d,0xf4),'sections':[_0xbed5c8,_0x563e28,_0x456598,_0x141f20,_0x9f063b],'listType':0x1}}),{'userJid':m[_0x493039(0x5b,0x69,0x34,0x2d)],'quoted':m});chika['relayMessa'+'ge'](m[_0x493039(0x6c,0x69,0x41,0x90)],template[_0x493039(0x70,0x73,0x62,0x2a)],{'messageId':template[_0x493039(0xfd,0xf5,0xc3,0xd5)]['id']});}if(typemenu==_0x2bce78(-0x63,-0xe8,-0xa4,-0x5a)){var _0x3bf608={};_0x3bf608[_0x493039(0x68,0x85,0xc3,0x71)]=chika[_0x493039(0xbc,0xa8,0xfb,0x87)+_0x2bce78(-0x3f,-0xcd,-0x8d,-0xc0)];var messa=await prepareWAMessageMedia({'image':fs[_0x493039(0xb6,0xd6,0x8b,0x113)+'nc'](_0x2bce78(-0x8e,-0x2c,-0x40,0xf)+_0x493039(0xcf,0x8e,0x87,0x51))},_0x3bf608),catalog=generateWAMessageFromContent(m[_0x2bce78(-0x105,-0xce,-0xb0,-0xb5)],proto[_0x2bce78(-0x46,-0xa5,-0x88,-0x70)][_0x493039(0xb5,0xb3,0xbd,0xc6)]({'productMessage':{'product':{'productImage':messa[_0x493039(0x54,0x70,0xb6,0x68)+'ge'],'productId':_0x493039(0xf7,0xab,0xaf,0x73)+'232528','title':_0x2bce78(-0x79,-0x57,-0x9b,-0x9f),'description':''+lang[_0x2bce78(-0x83,-0xe1,-0xb3,-0x64)](prefix),'footerText':'©\x20'+ownername,'currencyCode':_0x493039(0xc3,0xce,0xb1,0xc1),'priceAmount1000':'1000000000'+_0x493039(0x10a,0xfe,0x10d,0xc1),'productImageCount':0x1,'firstImageId':0x1,'salePriceAmount1000':'1000','retailerId':'©\x20'+ownername,'url':''+sc},'businessOwnerJid':'6281575886'+_0x493039(0xfc,0xed,0xeb,0x102)+_0x493039(0xd9,0xc3,0xaf,0x91)}}),{'userJid':m[_0x2bce78(-0x104,-0x68,-0xb0,-0x98)],'quoted':m});chika[_0x493039(0xcb,0x7c,0x32,0xae)+'ge'](m[_0x493039(0x15,0x69,0x61,0x8c)],catalog['message'],{'messageId':catalog[_0x2bce78(-0x4d,-0x1c,-0x24,-0x67)]['id']});}}function _0x5683(){var _0x23b075=['Text\x20Pro\x20M','upload','pPxfr','\x20👋','Website','Voice\x20Chan','bind','Database\x20M','Server','Photo\x20Oxy\x20','ika.jpg','anger\x20Menu','228QztFBQ','Message','Owner\x20Menu','primbonmen','ChKVl','LMlik','Sewa\x20Bot','tqto','KuklF','LOlqO','Contributo','title','n\x20Photo\x20Ox','ner','info','aLIPG','Open\x20Jasa\x20','ger\x20Menu','GugjG','All\x20Menu','3547655FmxIjy','enu','(((.+)+)+)','uaudQ','waUploadTo','funmenu','mainmenu','7091718154','urlButton','photooxyme','1532874JLfBRR','ctor(\x22retu','n\x20Convert\x20','UtjPd','islamicmen','fromObject','n\x20Fun\x20Menu','FLxAN','\x20Sudah\x20Mem','Source\x20Cod','n\x20Anonymou','n\x20Nama\x20Tem','warn','search','descriptio','n\x20Random\x20A','Thanks\x20To','command','SINGLE_SEL','n\x20Semua\x20Fi','\x20Menu','sapp.net','Convert\x20Me','length','gDeKN','n\x20Fitur\x20Gr','kit\x20Bot\x20In','return\x20(fu','xdzfM','nime\x20Menu','WqqtD','list','IDR','Button','OXLFD','UwcYQ','7515100WazHxn','url','anonymousm','n\x20Islamic\x20','readFileSy','104784ubofzu','n\x20Search\x20M','./image/ch','xjxEt','downloadme','Islamic\x20Me','rn\x20this\x22)(','y\x20Menu','n\x20Nomor\x20Ow','NUZlr','apply','ephotomenu','nction()\x20','BpQJT','n\x20Ephoto\x20M','Fun\x20Menu','giJBU','EPBVQ','{}.constru','n\x20Download','ECT','Download\x20M','399@s.what','console','prototype','yBtGh','ngeym','XwEHM','randomanim','me\x20Menu','key','constructo','PRnqo','searchmenu','toString','Menu','voicecharg','1629tVppHG','log','00000000','ng\x20Owner?','Menampilka','CLICK\x20HERE','s\x20Menu','Sewabot','rows','rowId','1191267KMTDFe','textpromen','37191dHjoHP','Ephoto\x20Men','convertmen','Group\x20Menu','randommenu','JLifk','trace','Info\x20Tenta','exception','Group\x20Feat','allmenu','1732410zRRyFg','Search\x20Men','chat','quickReply','n\x20Owner\x20Me','ure','groupmenu','owner','displayTex','imageMessa','aftar\x20Sewa','Halo\x20kak\x20','message','ownermenu','catalog','aMceY','List\x20Menu','gJdGR','\x20menu','an\x20-\x20Teman','Primbon\x20Me','relayMessa','bantu\x20Mera','ALL\x20MENU','FbHTr','Yxsdn','KLLPm','WpTiO','UjhJs'];_0x5683=function(){return _0x23b075;};return _0x5683();}
break

case 'allmenu':
var riych = await getBuffer(picak+'All Menu')
await chika.send5ButImg(from, `` + '' + lang.allmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}}] )
break
case 'groupmenu':
var riych = await getBuffer(picak+'Group Menu')
await chika.send5ButImg(from, `` + '' + lang.groupmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'downloadermenu':
var riych = await getBuffer(picak+'Downloader Menu')
await chika.send5ButImg(from, `` + '' + lang.downloadermenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'searchmenu':
var riych = await getBuffer(picak+'Search Menu')
await chika.send5ButImg(from, `` + '' + lang.searchmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'randommenu':
var riych = await getBuffer(picak+'Random Menu')
await chika.send5ButImg(from, `` + '' + lang.randommenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'randomanimemenu':
var riych = await getBuffer(picak+'Random Anime Menu')
await chika.send5ButImg(from, `` + '' + lang.randomanimemenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'searchmenu':
var riych = await getBuffer(picak+'Search Menu')
await chika.send5ButImg(from, `` + '' + lang.searchmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'textpromenu':
var riych = await getBuffer(picak+'Textpro Menu')
await chika.send5ButImg(from, `` + '' + lang.textpromenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'photooxymenu':
var riych = await getBuffer(picak+'Photo Oxy Menu')
await chika.send5ButImg(from, `` + '' + lang.photooxymenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'ephotomenu':
var riych = await getBuffer(picak+'Ephoto Menu')
await chika.send5ButImg(from, `` + '' + lang.ephotomenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'funmenu':
var riych = await getBuffer(picak+'Fun Menu')
await chika.send5ButImg(from, `` + '' + lang.funmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'primbonmenu':
var riych = await getBuffer(picak+'Primbon Menu')
await chika.send5ButImg(from, `` + '' + lang.primbonmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'convertmenu':
var riych = await getBuffer(picak+'Converter Menu')
await chika.send5ButImg(from, `` + '' + lang.convertmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'mainmenu':
var riych = await getBuffer(picak+'Main Menu')
await chika.send5ButImg(from, `` + '' + lang.mainmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'databasemenu':
var riych = await getBuffer(picak+'Database Menu')
await chika.send5ButImg(from, `` + '' + lang.groupmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'anonymousmenu':
var riych = await getBuffer(picak+'Anonymous Menu')
await chika.send5ButImg(from, `` + '' + lang.anonymousmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'islamicmenu':
var riych = await getBuffer(picak+'Islamic Menu')
await chika.send5ButImg(from, `` + '' + lang.islamicmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'voicechargermenu':
var riych = await getBuffer(picak+'Voice Charger Menu')
await chika.send5ButImg(from, `` + '' + lang.voicechargermenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'ownermenu':
var riych = await getBuffer(picak+'Owner Menu')
await chika.send5ButImg(from, `` + '' + lang.ownermenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'donasi':
var riych = await getBuffer(picak+'Donasi')
await chika.send5ButImg(from, `` + '' + lang.donasi(ownernomer), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'thanksto': case 'tqto':
var riych = await getBuffer(picak+'Constributor')
await chika.send5ButImg(from, `` + '' + lang.thanksto(), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }
                
                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    chika.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
