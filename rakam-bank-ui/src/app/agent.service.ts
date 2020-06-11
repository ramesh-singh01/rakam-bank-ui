import { Injectable } from '@angular/core';
import {Agent} from './agent';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private messageService: MessageService,
             private http: HttpClient) { }

  private getAgentsUrl= 'http://localhost:8088//payout/v1/agents';

  getAgents(): Observable<Agent[]> {
    this.messageService.add('AgentService: fetched Agents');
    return this.http.get<Agent []>(this.getAgentsUrl);
  }
}
