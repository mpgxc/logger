import { Inject } from '@nestjs/common';
import { LoggerModule } from './logger.module';
import { getLoggerToken } from './logger.utils';

/**
 * Injects a `UzzeLoggerService`
 *
 * @param token Token which gets prepended before every log message
 */
export const LoggerInject = (token: string = '') => {
  if (!LoggerModule.tokensForLoggers.includes(token)) {
    LoggerModule.tokensForLoggers.push(token);
  }

  return Inject(getLoggerToken(token));
};
