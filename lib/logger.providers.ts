import { Provider } from '@nestjs/common';
import { UzzeLoggerService } from './logger.service';
import { getLoggerToken } from './logger.utils';

const loggerFactory = (logger: UzzeLoggerService, token?: string) => {
  if (token) {
    logger.setContext(token);
  }

  return logger;
};

const createLoggerProvider = (token?: string): Provider<UzzeLoggerService> => ({
  inject: [UzzeLoggerService],
  provide: getLoggerToken(token),
  useFactory: (logger) => loggerFactory(logger, token),
});

export const createLoggerProviders = (
  tokens: string[],
): Array<Provider<UzzeLoggerService>> =>
  tokens.map((token) => createLoggerProvider(token));
