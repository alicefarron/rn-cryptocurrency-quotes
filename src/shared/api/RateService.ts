import {get} from './core';
import {CurrencyList} from '@shared/types';

export class RateService {
  static async getRate(command: string = 'returnTicker') {
    return await get<CurrencyList>('public', {command});
  }
}
