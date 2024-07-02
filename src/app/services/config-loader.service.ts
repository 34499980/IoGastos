
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import * as packageJson from '../../../package.json';

@Injectable({
    providedIn: 'root'
  })
  export class ConfigsLoaderService {
    private httpClient: HttpClient;
    prod: string = 'https://gastos-api-2-git-main-34499980s-projects.vercel.app/api';
    dev: string = 'http://localhost:8080/api';
    private config: Configs = {
      apiUrl: `${this.prod}`
    };
    get packageJson() {return packageJson}
    
    constructor(handler: HttpBackend) {
        this.httpClient = new HttpClient(handler);
      }
    get apiUrl() {
        return this.config.apiUrl;
    }
    public async loadConfigs(): Promise<void> {
      //  this.config = await firstValueFrom(this.httpClient.get<Configs>('config/config.json'));
    }    
  }

  export interface Configs {
    apiUrl: string;
  }