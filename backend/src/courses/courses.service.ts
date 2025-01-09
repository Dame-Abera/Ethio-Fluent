import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseDto } from './dto/create.courses.dto';
import { UpdateCourseDto } from './dto/update.courses.dto';
@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}

  getAllCourse() {
    return this.prisma.course.findMany({});
  }
  getCourse(userId: number) {
    return this.prisma.course.findMany({
      where: {
        userId,
      },
    });
  }
  getCourseById(
    userId: number,
    CourseId: number,
  ) {
    return this.prisma.course.findFirst({
      where: {
        id: CourseId,
        userId,
      },
    });
  }
  

  async updateCourseById(userId: number, 
    courseId: number, 
    dto: UpdateCourseDto
  ) {
    // get the expense by id
    const course = await this.prisma.course.findUnique({
      where: {
        id: courseId,
        
      },
    });

    if (!course) {
      throw new Error('course not found');
    }

    return this.prisma.course.update({
      where: {
        id: courseId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteCourseById(userId: number, courseId: number) {
    const course = await this.prisma.course.findFirst({
      where: {
        id: courseId,
        userId,
      },
    });

    if (!course) {
      throw new Error('course not found');
    }

    return this.prisma.course.delete({
      where: {
        id: courseId,
      },
      
    });
  }
}
