import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './paciente/paciente.module';
import { MedicoModule } from './medico/medico.module';
import { AtendimentoModule } from './atendimento/atendimento.module';

@Module({
  imports: [PacienteModule, MedicoModule, AtendimentoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
