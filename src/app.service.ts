import { Injectable, OnModuleInit } from '@nestjs/common';
import { EmployeeService } from './employee/employee.service';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private readonly employeeService: EmployeeService) {}

  // Auto seed when run project
  async onModuleInit() {
    await this.employeeService.seed();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
