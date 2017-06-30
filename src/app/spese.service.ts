import { v4 } from 'uuid';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {SpesaInterface} from './spese.model';

@Injectable()
export class SpeseService {
    private apiUrl = 'http://ionic-backend.crispybacon.us';
    categorie = ['Viaggi', 'Svago', 'Lavoro', 'Elettronica', 'Informatica'];
    expenses: SpesaInterface[] = this.loadExpenses();

    constructor(private http: Http) {
    }
    saveExpenses () {
        localStorage.setItem('expenses', JSON.stringify(this.expenses));
    }

    loadExpenses () {
        const savedExpenses = localStorage.getItem('expenses');
        if (!savedExpenses) {
            return [];
        } else {
            return JSON.parse(savedExpenses);
        }
    }

    getExpenses (): Promise<any>{
        let url = `${this.apiUrl}/expenses`;
        return this.http
            .get(url)
            .toPromise();
    }

    getSpesa(idSpesa: number): Promise<any> {
        let url = `${this.apiUrl}/expenses/${idSpesa}`;
        return this.http
            .get(url)
            .toPromise();
    }

    saveSpesa(idSpesa: number, nuovaSpesa: SpesaInterface){
        let url = `${this.apiUrl}/expenses/${idSpesa}`;
        return this.http
            .put(url, nuovaSpesa)
            .toPromise();
    }

    removeSpesa (idSpesa: number) {
        let url = `${this.apiUrl}/expenses/${idSpesa}`;
        return this.http
            .delete(url)
            .toPromise();
    }

    addSpesa(nuovaSpesa: SpesaInterface) {
        nuovaSpesa.id = v4();
        let url = `${this.apiUrl}/expenses`;
        return this.http
            .post(url, nuovaSpesa)
            .toPromise();
    }
}