import { Command, flags } from "@oclif/command";
const Minerva = require("mcgill-minerva-api");

export default class GetCourse extends Command {
  static description =
    "getCourse returns the information for a specific course";

  static flags = {
    help: flags.help({ char: "h" }),
    username: flags.string({
      char: "u",
      description: "minerva username (mcgill email)"
    }),
    password: flags.string({ char: "p", description: "minerva password" }),
    subject: flags.string({
      char: "S",
      description: 'class/department subject (ex: "COMP")'
    }),
    classNum: flags.string({
      char: "n",
      description: 'class number (ex: "303" for COMP 303'
    }),
    season: flags.string({
      char: "s",
      description:
        "season as 1 letter: 'f' for fall, 'w' for winter, 's' for summer"
    }),
    year: flags.string({ char: "y", description: "year of class" })
  };

  static args = [{ name: "file" }];

  async run() {
    const { args, flags } = this.parse(GetCourse);

    if (
      flags.username == undefined ||
      flags.password == undefined ||
      flags.subject == undefined ||
      flags.classNum == undefined ||
      flags.season == undefined ||
      flags.year == undefined
    ) {
      this.log(
        "error: one of the required fields was left blank (see --help, must have username, password, subject, classNum, season, year)"
      );
      return;
    }

    this.getCourse(
      flags.username!,
      flags.password!,
      flags.subject!,
      flags.classNum!,
      flags.season!,
      flags.year!
    );
  }

  async getCourse(
    username: string,
    password: string,
    subject: string,
    classNum: string,
    season: string,
    year: string
  ) {
    let courseInfo = {
      dep: subject,
      number: classNum,
      season: season,
      year: year
    };

    console.debug(`User : ${username}`);
    console.debug(`Pass : ${password}`);

    console.debug(`Course Info:`);
    console.debug(courseInfo);

    let minerva = new Minerva(username, password);

    try {
      let courses = await minerva.getCourses(courseInfo);
      console.log("Course retrieved");
      console.log(courses);
    } catch (e) {
      console.log("error:");
      console.log(e);
    }
  }
}
