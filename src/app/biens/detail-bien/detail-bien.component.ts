import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BiensService} from '../biens.service';
import {Bien} from '../bien.model';

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.css']
})
export class DetailBienComponent implements OnInit {
id : number;
sub : Bien;
  constructor( private  route: ActivatedRoute, private bienservice: BiensService) { }

  ngOnInit(): void {
     this.route.params.subscribe( params => {
      this.id = +params['id'];
      this.sub = this.bienservice.getBienById(this.id);
      }
    );
  }

}
