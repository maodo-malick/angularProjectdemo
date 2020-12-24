import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeLeft'
})
export class TimeLeftPipe implements PipeTransform {

  transform(value: Date): string {
    const currentTime = new Date();
    const diff = currentTime.getTime() - value.getTime();
    const y = Math.floor(diff / 1000 / 60 / 60 / 24 / 12 / 365);
    if (y > 0) { return  y + ' an'; }
    const mo = Math.floor((diff / 1000 / 60 / 60 / 24 / 12) % 365 );
    if (mo > 0) { return  mo + ' mois'; }
    const d = Math.floor((diff / 1000 / 60 / 60 / 24) % 12) ;
    if (d > 0) { return  d + ' j'; }
    const h = Math.floor((diff / 1000 / 60 / 60) % 24 );
    if (h > 0) { return  h + ' heure'; }
    const m = Math.floor((diff / 1000 / 60) % 60 );
    if (m > 0) { return  m + ' minutes'; }
    const s = Math.floor((diff / 1000) % 60);
    if (s > 0) { return  s + ' s'; }
  }

}
