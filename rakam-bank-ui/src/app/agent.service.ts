import { Injectable } from '@angular/core';
import {Agent} from './agent';
import {AGENTS} from './mock-agents';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor() { }

  getAgents(): Agent[] {
    return AGENTS;
  }
}
