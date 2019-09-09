const Minerva = require("mcgill-minerva-api");

export async function addCourse(
  username: string,
  password: string,
  season: string,
  year: string,
  crn: string
) {
  let minerva = new Minerva(username, password);

  let newCourse = {
    season,
    year,
    crn
  };

  try {
    const response = await minerva.addCourses(newCourse);
    console.info("Course add attempted successfully");
    console.info(response);
  } catch (e) {
    console.error("ERROR:");
    console.error(e);
  }
}

export async function getCourse(
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
    console.info("Course retrieved");
    console.info(courses);
  } catch (e) {
    console.error("error:");
    console.error(e);
  }
}

export async function getTranscript(
  username: string,
  password: string,
  current: boolean
) {
  console.debug(`User : ${username}`);
  console.debug(`Pass : ${password}`);

  let minerva = new Minerva(username, password);

  minerva
    .getTranscript()
    .then(function(transcript: Object[]) {
      console.info("TRANSCRIPT:");
      if (current) {
        transcript = transcript.filter(
          (course: any) => course.completed == "RW"
        );
      }
      console.info(transcript);
    })
    .catch(function(err: any) {
      console.error(err);
    });
}
