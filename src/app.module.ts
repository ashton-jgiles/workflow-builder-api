import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',       // or 'mysql'
      host: 'localhost',
      port: 5432,             // 3306 for MySQL
      username: 'your_db_user',
      password: 'your_db_password',
      database: 'your_db_name',
      autoLoadEntities: true, // loads entities automatically
      synchronize: true,      // auto-create schema in dev (turn off in prod!)
    }),
  ],
})
export class AppModule {}
