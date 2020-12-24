import { Injectable } from '@angular/core';
import {Bien} from './bien.model';

@Injectable({
  providedIn: 'root'
})
export class BiensService {
  private biens: Bien[] = [
    {
      id: 1,
      title: 'voiture',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Ad animi, aperiam consectetur dicta esse in ipsa officia quod ratione veritatis? ' +
        'Asperiores at deleniti earum fugit ipsum iure laboriosam nostrum vero?',
      category: 'immobilier',
      createAt: new Date(2019, 4, 3, 33, 45),
      price: 400000,
      image: 'https://source.unsplash.com/1080x720/?cars',
      sale: false,
      state: 1
    },
    {
      id: 2,
      title: 'bureau',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Ad animi, aperiam consectetur dicta esse in ipsa officia quod ratione veritatis?' +
        ' Asperiores at deleniti earum fugit ipsum iure laboriosam nostrum vero?',
      category: 'Informatique',
      createAt: new Date(2018, 4, 3, 33, 45),
      price: 40000,
      image: 'https://source.unsplash.com/1080x720/?office',
      sale: false,
      state: 1
    },
    {
      id: 3,
      title: 'livre',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Ad animi, aperiam consectetur dicta esse in ipsa officia quod ratione veritatis? ' +
        'Asperiores at deleniti earum fugit ipsum iure laboriosam nostrum vero?',
      category: 'Education',
      createAt: new Date(),
      price: 1000,
      image: 'https://source.unsplash.com/1080x720/?book',
      sale: true,
      state: 1
    },
    {
      id: 4,
      title: 'city',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Ad animi, aperiam consectetur dicta esse in ipsa officia quod ratione veritatis? ' +
        'Asperiores at deleniti earum fugit ipsum iure laboriosam nostrum vero?',
      category: 'contry',
      createAt: new Date(2010, 4, 3, 33, 45),
      price: 1900000,
      image: 'https://source.unsplash.com/1080x720/?city',
      sale: false,
      state: 1
    },
    {
      id: 5,
      title: 'laptop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Ad animi, aperiam consectetur dicta esse in ipsa officia quod ratione veritatis?' +
        ' Asperiores at deleniti earum fugit ipsum iure laboriosam nostrum vero?',
      category: 'live',
      createAt: new Date(2012, 4, 3, 33, 45),
      price: 1500000,
      image: 'https://source.unsplash.com/1080x720/?computer',
      sale: false,
      state: 1
    },
    {
      id: 6,
      title: 'sport',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Ad animi, aperiam consectetur dicta esse in ipsa officia quod ratione veritatis?' +
        ' Asperiores at deleniti earum fugit ipsum iure laboriosam nostrum vero?',
      category: 'sport',
      createAt: new Date(2012, 4, 3, 33, 45),
      price: 15000,
      image: 'https://source.unsplash.com/1080x720/?sport',
      sale: true,
      state: 1
    }
  ];
  constructor() { }

  getAllBiens(): Bien[] {
    return this.biens;
  }

  /**
   * TODO permet de rechercher un bien par sin ID
   * @param id
   * return: un Bien
   */
  getBienById(id: number): Bien {
    const bienFound = this.biens.find(
      (b: Bien) => {
       return  b.id === id;
      }
    );
    return bienFound;
  }
  addBien(newBien: Bien): void {
    this.biens.push(newBien);
  }
  updateBien(bienUpdated: Bien) {
    let oldBien: Bien = this.biens.find(
      (b: Bien) => {
        return b.id === bienUpdated.id;
      }
    );
    if (oldBien) {
      oldBien = {...bienUpdated};
    }
  }
  //deleteBien(id:number)
  getLastId(): number {
    return this.biens[this.biens.length - 1] ?
      this.biens[this.biens.length - 1].id : 0;
  }
}
