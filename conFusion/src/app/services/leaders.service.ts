import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeadersService {

  constructor() { }

  getFeaturedLeader(): Promise<Leader> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(LEADERS.filter( (leader) => leader.featured)[0]), 2000);
    });
  }
  getLeaders(): Promise<Leader[]> {
    return new Promise( (resolve) => {
      setTimeout( () => resolve(LEADERS), 2000);
    });
  }
}
