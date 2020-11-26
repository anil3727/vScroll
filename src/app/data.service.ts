import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, of, Subject,  } from 'rxjs';
import {flatMap, map, takeUntil, takeWhile} from 'rxjs/operators'
import { MimicApiService } from "./mimic-api.service";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private mimicApiService: MimicApiService) { }
  getData(){
    const secondsCounter = interval(2000); 
    return secondsCounter
    .pipe(

      flatMap((res) => {
         return this.mimicApiService.getScrollingData(res, res+10)
      })
    );
  }
}
