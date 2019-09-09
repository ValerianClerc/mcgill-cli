import { Command, flags } from "@oclif/command";
import { getCourse, addCourse, ICourse } from "../lib/minervaInteractions";

export default class Watch extends Command {
  static description =
    "watches a specific course, and signs you up as soon as a spot becomes available";

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
    year: flags.string({ char: "y", description: "year of class" }),
    crn: flags.string({ char: "c", description: "CRN code for desired class" })
  };

  // static args = [{name: 'file'}]

  async run() {
    const { args, flags } = this.parse(Watch);
    if (
      flags.username == undefined ||
      flags.password == undefined ||
      flags.subject == undefined ||
      flags.classNum == undefined ||
      flags.season == undefined ||
      flags.year == undefined ||
      flags.crn == undefined
    ) {
      this.log(
        "error: one of the required fields was left blank (see --help, must have username, password, subject, classNum, season, year, crn)"
      );
      return;
    }

    while (1) {
      let courses: ICourse[] | undefined = await getCourse(
        flags.username!,
        flags.password!,
        flags.subject!,
        flags.classNum!,
        flags.season!,
        flags.year!
      );

      if (courses == undefined) {
        console.error("watch error: error fetching course");
        return;
      }

      courses = courses.filter(
        (course: ICourse) =>
          course.type == "Lecture" && course.status == "Active"
      );

      console.debug(courses);
      for (const course of courses) {
        // TODO: This if statement needs work!
        if (course.is_full || (course.rem == "0" && course.wlrem == "0")) {
          continue;
        }
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
}
