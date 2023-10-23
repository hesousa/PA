import { Module } from '@nestjs/common';
import { AtendimentoService } from './atendimento.service';
import { AtendimentoController } from './atendimento.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AtendimentoController],
  providers: [AtendimentoService, PrismaService],
})
export class AtendimentoModule {}
