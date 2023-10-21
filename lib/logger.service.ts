import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.REQUEST,
})
export class UzzeLoggerService extends ConsoleLogger {
  constructor(context?: string) {
    super(context);
  }
}
