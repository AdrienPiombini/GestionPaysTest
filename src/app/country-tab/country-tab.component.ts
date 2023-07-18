import {Component, OnInit} from '@angular/core';
import {CountryModel} from '../country-model'
import {CountriesService} from '../countries.service'
import {Router} from '@angular/router'
import {ModalService} from '../modal/modal.service'
import { COUNTRIES } from '../mock-countries';

@Component({
  selector: 'app-country-tab',
  templateUrl: './country-tab.component.html',
  styleUrls: ['./country-tab.component.css']
})
export class CountryTabComponent implements OnInit{
countries: CountryModel[]=[]

filteredCountries: CountryModel[] = COUNTRIES;
searchText: string = '';
sortKey:string = '';
sortDirection:number = 1;
sortArrow: string = '/assets/arrowDown.png'

  constructor(private countriesService: CountriesService,private router: Router,private modalService: ModalService) {
  }

  ngOnInit(): void {
  this.getCountries()
  }

  getCountries(): void{
  this.countriesService.filteredCountries$.subscribe(countries  =>{
    this.filteredCountries = countries});
  }

  getCountryDetail(country: CountryModel){
  this.router.navigateByUrl('/details/'+country.id)
  }

  openModal(id:number){
  if (id !== 0){
  this.modalService.openModal(id)
  }
  }

  excludeEvent(e: MouseEvent) {
    e.stopPropagation()
  }

  deleteCountry(id: number): void {
    const index: number = COUNTRIES.findIndex((c: CountryModel) => c.id === id);
    COUNTRIES.splice(index, 1);
  }

  sortData(key: string): void {
    if (this.sortKey === key) {
      // Inverse la direction du tri
      this.sortArrow = '/assets/arrowDown.png'
      this.sortDirection *= -1;
    }
    else {
      // Change la colonne de tri et réinitialise la direction du tri
      this.sortArrow = '/assets/arrowUp.png'
      this.sortKey = key;
      this.sortDirection = 1;
    }
    
    if (key !== null){
      this.filteredCountries = COUNTRIES.sort((a, b) => {
        if (a[key as keyof CountryModel] < b[key as keyof CountryModel]) {
          return -1 * this.sortDirection;
        }
        if (a[key as keyof CountryModel] > b[key as keyof CountryModel]) {
          return 1 * this.sortDirection;
        }
        return 0;
      });
    }
  }
  
}
