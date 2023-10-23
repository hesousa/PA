import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PacienteService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createPacienteDto: CreatePacienteDto) {
    return await this.prismaService.paciente.create({
      data: {
        nome: createPacienteDto.nome,
        idade: createPacienteDto.idade,
      },
    });
  }

  async findAll() {
    return await this.prismaService.paciente.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.paciente.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updatePacienteDto: UpdatePacienteDto) {
    return await this.prismaService.paciente.update({
      where: {
        id: id,
      },
      data: {
        nome: updatePacienteDto.nome,
        idade: updatePacienteDto.idade,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.paciente.delete({
      where: {
        id: id,
      },
    });
  }
}
