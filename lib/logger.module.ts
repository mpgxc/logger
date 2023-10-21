import { DynamicModule } from '@nestjs/common';
import { createLoggerProviders } from './logger.providers';
import { UzzeLoggerService } from './logger.service';

export class LoggerModule {
  static tokensForLoggers = new Array<string>();

  static forRoot(): DynamicModule {
    const prefixedLoggerProviders = createLoggerProviders(
      this.tokensForLoggers,
    );

    return {
      module: LoggerModule,
      providers: [UzzeLoggerService, ...prefixedLoggerProviders],
      exports: [UzzeLoggerService, ...prefixedLoggerProviders],
    };
  }
}
