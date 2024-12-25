import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  // Add data
  async seed() {
    const employees = [
      {
        name: 'John Doe',
        category: 'Business',
        avatar:
          'https://drive.google.com/file/d/16_W9MDT-uG8oIvFwvWxlClv3dIBQR1kj/view',
      },
      {
        name: 'Jane Smith',
        category: 'Business',
        avatar:
          'https://drive.google.com/file/d/16_W9MDT-uG8oIvFwvWxlClv3dIBQR1kj/view',
      },
      {
        name: 'Alice Johnson',
        category: 'Technical',
        avatar:
          'https://drive.google.com/file/d/16_W9MDT-uG8oIvFwvWxlClv3dIBQR1kj/view',
      },
      {
        name: 'Michael Brown',
        category: 'Business',
        avatar:
          'https://drive.google.com/file/d/16_W9MDT-uG8oIvFwvWxlClv3dIBQR1kj/view',
      },
      {
        name: 'Emma Davis',
        category: 'Technical',
        avatar:
          'https://drive.google.com/file/d/16_W9MDT-uG8oIvFwvWxlClv3dIBQR1kj/view',
      },
      {
        name: 'Oliver Martinez',
        category: 'Technical',
        avatar:
          'https://drive.google.com/file/d/16_W9MDT-uG8oIvFwvWxlClv3dIBQR1kj/view',
      },
      {
        name: 'Sophia Garcia',
        category: 'Business',
        avatar:
          'https://drive.google.com/file/d/16_W9MDT-uG8oIvFwvWxlClv3dIBQR1kj/view',
      },
      {
        name: 'Liam Wilson',
        category: 'Technical',
        avatar:
          'https://drive.google.com/file/d/16_W9MDT-uG8oIvFwvWxlClv3dIBQR1kj/view',
      },
      {
        name: 'Mia Anderson',
        category: 'Business',
        avatar:
          'https://drive.google.com/file/d/16_W9MDT-uG8oIvFwvWxlClv3dIBQR1kj/view',
      },
      {
        name: 'Lucas Harris',
        category: 'Technical',
        avatar:
          'https://drive.google.com/file/d/16_W9MDT-uG8oIvFwvWxlClv3dIBQR1kj/view',
      },
    ];

    // Check
    const count = await this.employeeRepository.count();
    if (count === 0) {
      await this.employeeRepository.save(employees);
      console.log('Seed data inserted!');
    } else {
      console.log('Database already seeded.');
    }
  }
}
