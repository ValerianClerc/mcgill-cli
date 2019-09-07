import { Command, flags } from "@oclif/command";
const Minerva = require("mcgill-minerva-api");

export default class GetTranscript extends Command {
  static description =
    "getTranscript retrieves current transcript from Minerva";

  static flags = {
    help: flags.help({ char: "h" }),
    username: flags.string({
      char: "u",
      description: "minerva username (mcgill email)"
    }),
    password: flags.string({ char: "p", description: "minerva password" }),
    current: flags.boolean({ char: "c", description: "current year only" })
  };

  // static args = [{ name: "file" }];

  async run() {
    const { args, flags } = this.parse(GetTranscript);

    if (flags.username == undefined || flags.password == undefined) {
      this.log(`username and password flags must be entered (see --help)`);
      return;
    }
    this.log(`Getting transcript for ${flags.username}`);

    await this.getTranscript(flags.username, flags.password, flags.current);
  }

  getTranscript(username: string, password: string, current: boolean) {
    this.log(`User : ${username}`);
    this.log(`Pass : ${password}`);
    const that = this;

    let minerva = new Minerva(username, password);

    minerva
      .getTranscript()
      .then(function(transcript: Object[]) {
        that.log("TRANSCRIPT:");
        if (current) {
          transcript = transcript.filter(
            (course: any) => course.completed == "RW"
          );
        }
        console.info(transcript);
      })
      .catch(function(err: any) {
        that.log(err);
      });
  }
}
