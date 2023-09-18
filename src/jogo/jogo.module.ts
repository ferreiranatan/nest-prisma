import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service'; // Importe o PrismaService

@Module({
  providers: [PrismaService],
})
export class JogoModule {}
