import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { JogoService } from './jogo.service';
import { Jogo, Prisma } from '@prisma/client';

@Controller('jogos')
export class JogoController {
  constructor(private readonly jogoService: JogoService) {}

  @Post()
  criarJogo(
    @Body() novoJogo: Prisma.JogoCreateInput,
    @Body('desenvolvedorId') desenvolvedorId: string,
  ): Promise<Jogo> {
    return this.jogoService.criarJogo(novoJogo, desenvolvedorId);
  }
  @Get()
  listarJogos(): Promise<Jogo[]> {
    return this.jogoService.listarJogos();
  }

  @Get(':id')
  encontrarJogoPorId(@Param('id') id: string): Promise<Jogo | null> {
    return this.jogoService.encontrarJogoPorId(id);
  }

  @Patch(':id')
  atualizarJogo(
    @Param('id') id: string,
    @Body() atualizacaoJogo: Jogo,
  ): Promise<Jogo> {
    return this.jogoService.atualizarJogo(id, atualizacaoJogo);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jogoService.deletarJogo(id);
  }
}
