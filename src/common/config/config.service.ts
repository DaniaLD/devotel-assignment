import { Injectable } from '@nestjs/common';
import * as config from 'config';

@Injectable()
export default class ConfigService {
  static get<T>(key: string): T {
    return config.get<T>(key);
  }
}
