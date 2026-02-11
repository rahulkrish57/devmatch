import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
@Controller('profiles')
export class ProfilesController {
  constructor(private profileService: ProfilesService) {}
  //GET /profiles
  @Get()
  findAll() {
    return this.profileService.findAll()
  }
  // GET profiles/id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
  // POST /profiles
  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return {
      name: createProfileDto.name,
      description: createProfileDto.description,
    };
  }
  // PUT /profiles/:id
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return {
      ...updateProfileDto,
      id,
    };
  }
  //DELETE /profiles/:id
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return { message: 'Success' };
  }
}
