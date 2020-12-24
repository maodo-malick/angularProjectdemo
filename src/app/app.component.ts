import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nom = '#19weuzy';
  age = 26;
  ok = false;
champs = 'activer';


onClickBtn(): void{
    this.ok = !this.ok;
    this.champs = this.ok ? 'desactiver' : 'activer';
   /* if (this.ok) {
      this.champs = 'activer';
    } else {
      this.champs = 'désactiver';
    }*/
  }
}
