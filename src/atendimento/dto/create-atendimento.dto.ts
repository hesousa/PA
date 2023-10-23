export class CreateAtendimentoDto {
  pacienteId: number;
  medicoId: number;
  retiradaSenha: Date;
  triagem: Date;
  guicheDocumentacao: Date;
  consultorioMedico: Date;
  examesMedicacao: Date;
  retornoMedico: Date;
  altaInternacao: Date;
  estado: string;
  observacoes: string;
}
