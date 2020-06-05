import { Component, OnInit } from '@angular/core';
import {Agent} from '../agent';
import {AGENTS} from '../mock-agents';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  agents= AGENTS;

  selectedAgent: Agent;

  editAgent(agent: Agent): void {
    this.selectedAgent= agent;
  }

}
