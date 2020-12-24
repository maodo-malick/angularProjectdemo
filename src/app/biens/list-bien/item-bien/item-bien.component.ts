import {Component, Input, OnInit} from '@angular/core';
import {Bien} from '../../bien.model';
import {UtilsService} from '../../../utils.service';

@Component({
  selector: 'app-item-bien',
  templateUrl: './item-bien.component.html',
  styleUrls: ['./item-bien.component.css']
})
export class ItemBienComponent implements OnInit {

  @Input() bien: Bien;
  prix: string;
  constructor() { }

  ngOnInit(): void {
  }
}
