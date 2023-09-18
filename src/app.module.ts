import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DesenvolvedorModule } from './desenvolvedor/desenvolvedor.module';
import { JogoModule } from './jogo/jogo.module';
import { ConsoleModule } from './console/console.module';
import { PrismaModule } from './database/prisma.module';

@Module({
  imports: [DesenvolvedorModule, JogoModule, ConsoleModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
