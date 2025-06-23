import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default {
  inject: [ConfigService],
  useFactory: (configService: ConfigService): TypeOrmModuleOptions => {
    return {
      type: 'mssql',
      host: configService.get<string>('DB_HOST'),
      port: parseInt(configService.get<string>('DB_PORT') || '5000', 10),
      username: configService.get<string>('DB_USERNAME'),
      password: configService.get<string>('DB_PASSWORD'),
      database: configService.get<string>('DB_NAME'),
      entities: [join(__dirname, '../', '**/*.entity.{ts,js}')],
      logging: false,
      autoLoadEntities: true,
      synchronize:
        configService.get<string>('DB_ALLOW_SYNC_WITH_TYPEORM') === 'true',
      options: {
        encrypt: true,
        trustServerCertificate: true,
      },
    };
  },
};
