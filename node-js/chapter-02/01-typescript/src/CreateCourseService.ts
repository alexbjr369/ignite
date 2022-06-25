interface Course {
  name: string;
  duration: Number;
  educator: string;
}

class CreateCourseService {
  execute({ name, duration, educator }: Course) {
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService();
