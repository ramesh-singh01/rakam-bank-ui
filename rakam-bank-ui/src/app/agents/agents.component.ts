import { Component, OnInit } from '@angular/core';
import {Agent} from '../agent';
import {AgentService} from '../agent.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {

  constructor(private agentService: AgentService) { }

  ngOnInit(): void {
    this.agents= this.agentService.getAgents();
  }

  agents: Agent[];

  selectedAgent: Agent;

  editAgent(agent: Agent): void {
    this.selectedAgent= agent;
  }

  cancelAgent(): void{
    this.selectedAgent= null;
  }

  updateAgent(agent: Agent): void{
    console.log("Call backend API method.");
  }

  deleteAgent(agent: Agent): void{
    console.log("Call backend API method.")
  }

  getAgents(): void{
    this.agents= this.agentService.getAgents();
  }

}
