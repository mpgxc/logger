import { Provider } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { getLoggerToken } from './logger.utils';

const loggerFactory = (logger: LoggerService, token?: string) => {
  if (token) {
    logger.setContext(token);
  }

  return logger;
};

const createLoggerProvider = (token?: string): Provider<LoggerService> => ({
  inject: [LoggerService],
  provide: getLoggerToken(token),
  useFactory: (logger) => loggerFactory(logger, token),
});

export const createLoggerProviders = (
  tokens: string[],
): Array<Provider<LoggerService>> =>
  tokens.map((token) => createLoggerProvider(token));
