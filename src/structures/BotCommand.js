/*
    SwitchChat Chatbox Module for SwitchCraft

    Copyright (c) 2019 Alessandro "Ale32bit"

    https://github.com/Ale32bit/SwitchChat
 */

module.exports = class BotCommand {
    constructor(client, data) {
        this.client = client;

        this.command = data.command;
        this.args = data.args;
        this.rawCommand = data.rawCommand;
        this.player = data.player;
    }

    /**
     * Tell a message to a player
     * @param {string} message Content of the message
     * @param {string} [label] Label of the message
     * @param {string} [mode] Mode preferred to display the message. "markdown" and "format"
     * @example
     * reply("Hello, world!", "SteveBot", "markdown")
     */
    async reply(message, label, mode = "markdown") {
        return await this.player.tell(message, label, mode)
    }
};