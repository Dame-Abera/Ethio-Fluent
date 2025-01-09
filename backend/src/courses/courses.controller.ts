import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  ForbiddenException
} from '@nestjs/common';

import { CourseService } from './courses.service';
import { CreateCourseDto } from './dto/create.courses.dto';
import { UpdateCourseDto } from './dto/update.courses.dto';

import { GetUser } from '../auth/decorator';
import { JwtGuard} from '../auth/guard';
@UseGuards(JwtGuard)
@Controller('courses')
export class CourseController {
  constructor(private readonly  CourseService: CourseService) {}

  @Get('all')
getAllCourses(@GetUser() user: any) {
  console.log(user)
  if (user.role !== '') {
    throw new ForbiddenException('Access denied');
  }
  return this. CourseService.getAllCourse();
}

  @Get()
  getCourses(@GetUser('id') userId: number) {
    return this.CourseService.getAllCourse(
      
    );
  }
  // Example NestJS controller for admin to fetch all expenses


  @Get(':id')
  getCourseById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) CourseId: number,
  ) {
    return this.CourseService.getCourseById(
      userId,
      CourseId,
    );
  }

 
 
  @Patch(':id')
  updateExpenseById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) ExpenseId: number,
    @Body() dto: UpdateCourseDto,
  ) {
    return this.CourseService.updateCourseById(
      userId,
      ExpenseId,
      dto,
    );
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteExpenseById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) expenseId: number,
  ) {
    return this.CourseService.deleteCourseById(
      userId,
      expenseId,
    );
  }
}
