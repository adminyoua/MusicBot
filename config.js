module.exports = {
    TOKENS: ["MTM2NTI3ODU1NzcxNDI1NTkyMw.GqxHHY.v008nbX8s4NUA2w0J8D7uyqJoBu3T44vQWH5lk"],
    ownerID: ["1073863060843937812"], //write your discord user id. example: ["id"] or ["id1","id2"]
    botInvite: "https://discord.com/oauth2/authorize?client_id=1365278557714255923&permissions=8&integration_type=0&scope=bot", //write your discord bot invite.
    supportServer: "https://discord.gg/aBFc7BRq", //write your discord bot support server invite.
    mongodbURL: "mongodb+srv://inutarou351:nekotaoru4490@cluster0.zoqeiad.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", //write your mongodb url.
    status: '❤️ codeshare.me',
    commandsDir: './commands', //Please don't touch
    language: "ja", //ar, de, en, es, fr, id, it, ja, nl, pt, ru, tr, zh_TW
    embedColor: "ffa954", //hex color code
    errorLog: "1165786582561853450", //write your discord error log channel id.


    playlistSettings: {
        maxPlaylist: 10, //max playlist count
        maxMusic: 75, //max music count
    },


    opt: {
        DJ: {
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'] //Please don't touch
        },


        voiceConfig: {
            leaveOnFinish: false, //If this variable is "true", the bot will leave the channel the music ends.
            leaveOnStop: false, //If this variable is "true", the bot will leave the channel when the music is stopped.

            leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
                status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
                cooldown: 10000000, //1000 = 1 second
            },

        },

        maxVol: 200, //You can specify the maximum volume level.
    },


    sponsor: {
        status: true, //true or false
        url: "https://codeshare.me", //write your discord sponsor url.
    },


    voteManager: { //optional
        status: false, //true or false
        api_key: "", //write your top.gg api key. 
        vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "play", "playlist", "queue", "resume", "save", "search", "skip", "stop", "time", "volume"], //write your use by vote commands.
        vote_url: "", //write your top.gg vote url.
    },


    shardManager: {
        shardStatus: false //If your bot exists on more than 1000 servers, change this part to true.
    },


}
