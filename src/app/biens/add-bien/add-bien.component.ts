import {Component, Input, OnInit} from '@angular/core';
import {Bien} from '../bien.model';

@Component({
  selector: 'app-add-bien',
  templateUrl: './add-bien.component.html',
  styleUrls: ['./add-bien.component.css']
})
export class AddBienComponent implements OnInit {
 @Input() bien: Bien;
  constructor() { }

  ngOnInit(): void {
  }

}
