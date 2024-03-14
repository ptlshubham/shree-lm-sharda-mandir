import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

function _window(): any {
    // return the global native browser window object
    return window;
}

@Injectable({ providedIn: 'root' })
export class DonationService {
    constructor(
        private http: HttpClient
    ) { }

    get nativeWindow(): any {
        return _window();
    }

    saveDonnerDetails(data: any) {

        return this.http.post(ApiService.saveDonnerListDetailsURL, data);
    }

    getAllDonnerDetailsData() {
        return this.http.get(ApiService.getAllDonnerListURL);
    }

    saveBulkDonnersDetails(data: any) {

        return this.http.post(ApiService.saveBulkDonnersDetailsURL, data);
    }
    removeDonnerDetailsById(id: any) {

        return this.http.get(ApiService.removeDonnerDetailsByIdURL + id);
    }
    saveBeneficiaryDetails(data: any) {

        return this.http.post(ApiService.saveBeneficiaryDetailsURL, data);
    }
    getAllBeneficiaryDetailsData() {
        return this.http.get(ApiService.getAllBeneficiaryListURL);
    }
    getAllBeneficiaryYear() {
        return this.http.get(ApiService.getBeneficiaryYearURL);
    }
    removeBeneficiaryDetailsById(id: any) {

        return this.http.get(ApiService.removeBeneficiaryDetailsByIdURL + id);
    }
    saveBulkBeneficiaryDetails(data: any) {

        return this.http.post(ApiService.saveBulkBeneficiaryDetailsURL, data);
    }
    getVerifiedMicroDonnerDetails() {
        return this.http.get(ApiService.getRahatokarshDonationListURL);
    }
}