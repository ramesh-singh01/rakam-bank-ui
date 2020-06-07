import { Injectable } from '@angular/core';
import {Agent} from './agent';
import {AGENTS} from './mock-agents';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private messageService: MessageService) { }

  getAgents(): Observable<Agent[]> {
    this.messageService.add('AgentService: fetched Agents');
    return of(AGENTS);
  }
}
