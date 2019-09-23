import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http: HttpClient) { }

  getPoll(pollID) {
    return this.http.get(`https://lets-poll.herokuapp.com/getPoll?pollID=${pollID}`);
  }
}
