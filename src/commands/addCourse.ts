import { Command, flags } from "@oclif/command";
import { addCourse } from "../lib/minervaInteractions";

export default class AddCourse extends Command {
  static description = "addCourse signs you up for a course (by CRN)";

  static flags = {
    help: flags.help({ char: "h" }),
    username: flags.string({
      char: "u",
      description: "minerva username (mcgill email)"
    }),
    password: flags.string({ char: "p", description: "minerva password" }),
    season: flags.string({
      char: "s",
      description:
        "season as 1 letter: 'f' for fall, 'w' for winter, 's' for summer"
    }),
    year: flags.string({ char: "y", description: "year of class" }),
    crn: flags.string({ char: "c", description: "CRN code for desired class" })
  };

  // static args = [{ name: "file" }];

  async run() {
    const { args, flags } = this.parse(AddCourse);

    if (
      flags.username == undefined ||
      flags.password == undefined ||
      flags.season == undefined ||
      flags.year == undefined ||
      flags.crn == undefined
    ) {
      this.error("Username, Password, Season, Year, or CRN was left empty");
      return;
    }

    await addCourse(
      flags.username!,
      flags.password!,
      flags.season!,
      flags.year!,
      flags.crn!
    );
  }
}
