import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.REQUEST,
})
export class LoggerService extends ConsoleLogger {
  constructor(context?: string) {
    super(context);
  }
}
