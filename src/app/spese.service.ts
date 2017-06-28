import {Spesa} from './spese.model';
export class SpeseService {
    categorie = ['Viaggi', 'Svago', 'Lavoro', 'Elettronica', 'Informatica'];
    expenses: Spesa[] = [{
        data: '2017-05-03',
        testo: 'Biglietto per Venezia',
        categoria: 'Viaggi',
        spesa: 26
    }, {
        data: '2017-02-17',
        testo: 'Concerto',
        categoria: 'Svago',
        spesa: 82
    }, {
        data: '2017-01-23',
        testo: 'Ingresso presepe vivente',
        categoria: 'Viaggi',
        spesa: 100
    }]
}