import { Command, flags } from "@oclif/command";
const Minerva = require("mcgill-minerva-api");

export default class GetTranscript extends Command {
  static description = "describe the command here";

  static flags = {
    help: flags.help({ char: "h" }),
    username: flags.string({
      char: "u",
      description: "minerva username (mcgill email)"
    }),
    password: flags.string({ char: "p", description: "minerva password" })
  };

  // static args = [{ name: "file" }];

  async run() {
    const { args, flags } = this.parse(GetTranscript);

    if (flags.username == undefined || flags.password == undefined) {
      this.log(`username and password flags must be entered (see --help)`);
      return;
    }
    this.log(`Getting transcript for ${flags.username}`);

    await this.getTranscript(flags.username, flags.password);
  }

  getTranscript(username: string, password: string) {
    this.log(`User : ${username}`);
    this.log(`Pass : ${password}`);
    const that = this;

    let minerva = new Minerva(username, password);

    minerva
      .getTranscript()
      .then(function(transcript: object) {
        that.log("TRANSCRIPT:");
        console.log(transcript);
      })
      .catch(function(err: any) {
        that.log(err);
      });
  }
}
