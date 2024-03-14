import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class UserProfileService {
    constructor(private http: HttpClient) { }

    userLogin(email: any, pass: any, id: any) {
        let data = {
            email: email,
            pass: pass,
            instituteId: id
        };
        return this.http.post(ApiService.userLoginURL, data);
    }
}
