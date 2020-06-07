import { Component, OnInit } from '@angular/core';
import {Agent} from '../agent';
import {AgentService} from '../agent.service';
import {MessageService} from '../message.service'

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {

  constructor(private agentService: AgentService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAgents();
  }

  agents: Agent[];

  selectedAgent: Agent;

  editAgent(agent: Agent): void {
    this.selectedAgent= agent;
    this.messageService.add('AgentService: Selected agent id=${agent.id}');
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
    this.agentService.getAgents()
    .subscribe(agents =>this.agents= agents);
  }

}
