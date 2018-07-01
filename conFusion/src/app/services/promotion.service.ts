import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';


@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  
  constructor() { }

  getPromttions(): Promotion[]{
    return PROMOTIONS;
  }

  getFeaturedPromotion(): Promotion{
    return PROMOTIONS.filter((promo) => (promo.featured))[0];
  }

  getPromotion(id:number): Promotion{
    return PROMOTIONS.filter((promo) => (promo.id === id))[0];
  }
}
