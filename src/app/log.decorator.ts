import { Injectable } from '@angular/core';
import { AnalyticsService } from './analytics.service';
import { SharedModule } from './shared/shared.module';

export function Log() {
  return (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args) {
      const service =
        SharedModule.injector.get<AnalyticsService>(AnalyticsService);

      service.logEvent(args);
      // run original implementation if user confirms
      const result = originalMethod.apply(this, args);
      return result;
    };
    return descriptor;
  };
}
