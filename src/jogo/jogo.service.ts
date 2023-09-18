import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Jogo, Prisma } from '@prisma/client';

@Injectable()
export class JogoService {
  constructor(private readonly prisma: PrismaService) {}

  async criarJogo(
    novoJogo: Prisma.JogoCreateInput,
    desenvolvedorId: string,
  ): Promise<Jogo> {
    return this.prisma.jogo.create({
      data: {
        ...novoJogo,
        Desenvolvedor: {
          connect: { id: desenvolvedorId },
        },
      },
    });
  }

  async listarJogos(): Promise<Jogo[]> {
    return this.prisma.jogo.findMany({
      include: {
        Desenvolvedor: true,
      },
    });
  }
  async encontrarJogoPorId(id: string): Promise<Jogo | null> {
    return this.prisma.jogo.findUnique({
      where: { id },
      include: {
        Desenvolvedor: true,
      },
    });
  }

  async atualizarJogo(
    id: string,
    atualizacaoJogo: Prisma.JogoUpdateInput,
  ): Promise<Jogo> {
    return this.prisma.jogo.update({
      where: { id: id },
      data: {
        ...atualizacaoJogo,
        Desenvolvedor: {
          connect: { id: id },
        },
      },
    });
  }

  async deletarJogo(id: string): Promise<Jogo> {
    return this.prisma.jogo.delete({
      where: { id },
    });
  }
}
