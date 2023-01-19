import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    educator: 'John Doe',
    name: 'Node.js',
    duration: 10,
  });

  return response.send();
}
