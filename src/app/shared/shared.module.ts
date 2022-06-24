import { Injector, NgModule } from "@angular/core";
import { AnalyticsService } from "../analytics.service";

@NgModule({
  declarations: [],
  imports: [],
  providers: [AnalyticsService]
})
export class SharedModule {
  static injector: Injector;

  constructor(injector: Injector) {
    SharedModule.injector = injector;
  }
}