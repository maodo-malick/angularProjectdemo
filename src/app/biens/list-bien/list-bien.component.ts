import { Component, OnInit } from '@angular/core';
import {Bien} from '../bien.model';
import {BiensService} from '../biens.service';

@Component({
  selector: 'app-list-bien',
  templateUrl: './list-bien.component.html',
  styleUrls: ['./list-bien.component.css']
})
export class ListBienComponent implements OnInit {
  search = '';
  biens: Bien[];
  constructor(private biensService: BiensService) {

  }

  ngOnInit(): void {
    this.biens = this.biensService.getAllBiens();
  }

}
