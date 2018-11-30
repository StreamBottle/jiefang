import { Injectable } from '@angular/core';
import { ReplaceChangeState } from './replace.mock';
@Injectable()
export class ReplaceService {
  constructor() { }
  getReplaceChangeState(): any {
    return ReplaceChangeState;
  }
}
