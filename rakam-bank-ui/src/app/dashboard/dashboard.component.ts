import { Component, OnInit } from '@angular/core';
import { Agent } from '../agent';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  agents: Agent[] = [];

  constructor(private agentService: AgentService) { }

  ngOnInit() {
    this.getAgents();
  }

  getAgents(): void {
    this.agentService.getAgents()
    .subscribe(agents => this.agents = agents);
  }
}
