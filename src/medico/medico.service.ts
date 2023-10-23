import { Injectable } from '@nestjs/common';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MedicoService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createMedicoDto: CreateMedicoDto) {
    return await this.prismaService.medico.create({
      data: {
        nome: createMedicoDto.nome,
      },
    });
  }

  async findAll() {
    return await this.prismaService.paciente.findMany;
  }

  async findOne(id: number) {
    return this.prismaService.medico.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateMedicoDto: UpdateMedicoDto) {
    return await this.prismaService.medico.update({
      where: {
        id: id,
      },
      data: {
        nome: updateMedicoDto.nome,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.medico.delete({
      where: {
        id: id,
      },
    });
  }
}
