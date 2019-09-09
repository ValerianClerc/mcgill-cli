import { Command, flags } from "@oclif/command";

export default class Watch extends Command {
  static description =
    "watches a specific course, and signs you up as soon as a spot becomes available";

  static flags = {
    help: flags.help({ char: "h" })
  };

  // static args = [{name: 'file'}]

  async run() {
    const { args, flags } = this.parse(Watch);
  }
}
