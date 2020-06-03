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

  agentName= "Ramesh Singh";

  agent: Agent= {
    id: 1,
    name: "Ramesh Singh",
    code: "PL70403",
    email: "abc@gmail.com"
  }

  agents= AGENTS;

}
