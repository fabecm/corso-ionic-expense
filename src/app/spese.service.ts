import { v4 } from 'uuid';

import {SpesaInterface} from './spese.model';
export class SpeseService {
    categorie = ['Viaggi', 'Svago', 'Lavoro', 'Elettronica', 'Informatica'];
    expenses: SpesaInterface[] = this.loadExpenses();

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

    getSpesa(idSpesa: number) {
        let spesaDetail = this.expenses.find(e => e.id === idSpesa);
        return Object.assign({}, spesaDetail);
    }

    saveSpesa(idSpesa: number, nuovaSpesa: SpesaInterface){
        let spesaDetailIndex = this.expenses.findIndex(e => e.id === idSpesa);
        this.expenses[spesaDetailIndex] = nuovaSpesa;
        this.saveExpenses();
    }

    removeSpesa (idSpesa: number) {
        let spesaDetailIndex = this.expenses.findIndex(e => e.id === idSpesa);
        this.expenses.splice(spesaDetailIndex, 1);
        this.saveExpenses();
    }

    addSpesa(nuovaSpesa: SpesaInterface) {
        nuovaSpesa.id = v4();
        this.expenses.push(nuovaSpesa);
        this.saveExpenses();
    }
}