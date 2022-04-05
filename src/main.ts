import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export function getbaseurl(){
  return "https://hsp.krishnasmartsystem.com/api_project/public/api";
}

const providers = [
  {provide:'baseurl',useFactory:getbaseurl,deps:[]}
]

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));
