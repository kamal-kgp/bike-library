import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikeModule } from './bike/bike.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'bike-library.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,  
    }),
    BikeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
