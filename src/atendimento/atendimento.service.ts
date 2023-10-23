import { Injectable } from '@nestjs/common';
import { CreateAtendimentoDto } from './dto/create-atendimento.dto';
import { UpdateAtendimentoDto } from './dto/update-atendimento.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AtendimentoService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createAtendimentoDto: CreateAtendimentoDto) {
    return await this.prismaService.atendimento.create({
      data: {
        pacienteId: createAtendimentoDto.pacienteId,
        medicoId: createAtendimentoDto.medicoId,
        retiradaSenha: createAtendimentoDto.retiradaSenha,
        triagem: createAtendimentoDto.triagem,
        guicheDocumentacao: createAtendimentoDto.guicheDocumentacao,
        consultorioMedico: createAtendimentoDto.consultorioMedico,
        examesMedicacao: createAtendimentoDto.examesMedicacao,
        retornoMedico: createAtendimentoDto.retornoMedico,
        altaInternacao: createAtendimentoDto.altaInternacao,
        estado: createAtendimentoDto.estado,
        observacoes: createAtendimentoDto.observacoes,
      },
    });
  }

  async findAll() {
    return await this.prismaService.atendimento.findMany;
  }

  async findOne(id: number) {
    return await this.prismaService.atendimento.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateAtendimentoDto: UpdateAtendimentoDto) {
    return await this.prismaService.atendimento.update({
      where: {
        id: id,
      },
      data: {
        retiradaSenha: updateAtendimentoDto.retiradaSenha,
        triagem: updateAtendimentoDto.triagem,
        guicheDocumentacao: updateAtendimentoDto.guicheDocumentacao,
        consultorioMedico: updateAtendimentoDto.consultorioMedico,
        examesMedicacao: updateAtendimentoDto.examesMedicacao,
        retornoMedico: updateAtendimentoDto.retornoMedico,
        altaInternacao: updateAtendimentoDto.altaInternacao,
        estado: updateAtendimentoDto.estado,
        observacoes: updateAtendimentoDto.observacoes,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.atendimento.delete({
      where: {
        id: id,
      },
    });
  }
}
