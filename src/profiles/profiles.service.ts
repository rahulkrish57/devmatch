import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'Aarav Menon',
      description:
        'Product designer who loves long bike rides, startup talks, and filter coffee conversations. Looking for someone ambitious yet grounded.',
    },
    {
      id: randomUUID(),
      name: 'Ishita Rao',
      description:
        'Data analyst by profession, classical dancer by passion. I enjoy deep conversations and spontaneous travel plans.',
    },
    {
      id: randomUUID(),
      name: 'Rohan Kapoor',
      description:
        'Fitness enthusiast and fintech engineer. Weekdays are for code, weekends are for trekking and exploring hidden cafes.',
    },
  ];

  findAll() {
    return this.profiles;
  }
}
