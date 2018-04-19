'use strict';

const Discord = require('discord.io');
const Logger = require('winston');
const Auth = require('./auth.json');
const SpoilerBot = require('discord-spoiler-bot');

// Configure Logger settings
Logger.remove(Logger.transports.Console);
Logger.add(Logger.transports.Console, {
    colorize: true
});
Logger.level = 'debug';

// Initialize Discord Bot
var bot = new SpoilerBot({
   token: Auth.token
});

bot.connect();