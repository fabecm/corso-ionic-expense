import {SpesaInterface} from './spese.model';
export class SpeseService {
    categorie = ['Viaggi', 'Svago', 'Lavoro', 'Elettronica', 'Informatica'];
    nextId = 4;
    expenses: SpesaInterface[] = [{
        id: 1,
        data: '2017-05-03',
        testo: 'Biglietto per Venezia',
        categoria: 'Viaggi',
        spesa: 26
    }, {
        id: 2,
        data: '2017-02-17',
        testo: 'Concerto',
        categoria: 'Svago',
        spesa: 82
    }, {
        id: 3,
        data: '2017-01-23',
        testo: 'Ingresso presepe vivente',
        categoria: 'Viaggi',
        spesa: 100
    }];

    getSpesa(idSpesa: number) {
        let spesaDetail = this.expenses.find(e => e.id === idSpesa);
        return Object.assign({}, spesaDetail);
    }

    saveSpesa(idSpesa: number, nuovaSpesa: SpesaInterface){
        let spesaDetailIndex = this.expenses.findIndex(e => e.id === idSpesa);
        this.expenses[spesaDetailIndex] = nuovaSpesa;
    }

    removeSpesa (idSpesa: number) {
        let spesaDetailIndex = this.expenses.findIndex(e => e.id === idSpesa);
        this.expenses.splice(spesaDetailIndex, 1);
    }

    addSpesa(nuovaSpesa: SpesaInterface) {
        nuovaSpesa.id = this.nextId;
        this.expenses.push(nuovaSpesa);
        this.nextId ++;
        console.log(this.expenses);
    }
}