import {Component} from '@angular/core';
import {ModalService} from '../modal/modal.service'

import {DatePipe} from '@angular/common'
import {CountriesService} from '../countries.service'
import {AngularCsv, Options} from 'angular-csv-ext/dist/Angular-csv'
import { COUNTRIES } from '../mock-countries';
import { CountryModel } from '../country-model';

@Component({
  selector: 'app-country-management-header',
  templateUrl: './country-management-header.component.html',
  styleUrls: ['./country-management-header.component.css']
})
export class CountryManagementHeaderComponent {
  constructor(private modalService: ModalService, private datePipe: DatePipe, private countriesService: CountriesService) {
}

filteredCountries: CountryModel[] = COUNTRIES;
searchText: string = '';
countries: CountryModel[] = [];

filterCountries() {
  this.countriesService.filterCountries(this.searchText)
  }

export(){
  const data: any[] = [{nom: 'Nom', population: 'Population', superficie: 'Superficie', continent:'Continent', pib:'Produit intérieur brut', image: 'image' }]
  this.countriesService.getCountries().subscribe(countriesExport => {
    countriesExport.forEach(country =>
    data.push({
      nom: country.nom,
      population: country.population,
      superficie: country.superficie,
      continent: country.continent,
      pib: country.pib,
      image: country.image
    }))
    const now = this.datePipe.transform(new Date, 'yyyy_MM_dd')
    const options: Options = {
      filename: `${now}_export_country`,
      fieldSeparator: ';',
      quoteStrings: '',
      decimalseparator: ',',
      showLabels: false,
      showTitle: false,
      title: '',
      objHeader: null,
      useObjHeader: false,
      useBom: true,
      noDownload: false,
      headers: [],
      useHeader: false,
      nullToEmptyString: true,
    }
    new AngularCsv(data, options.filename, options)
  })
}

openModal(id:number){
  this.modalService.openModal(id)
}

}
