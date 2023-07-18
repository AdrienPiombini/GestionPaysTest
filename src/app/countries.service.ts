import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs'
import {CountryModel} from './country-model'
import {COUNTRIES} from './mock-countries'

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  country: CountryModel = {id: 0, nom: '', population: 0, superficie: 0, continent: '', pib: '', image: ''}
  private filteredCountriesSubject = new BehaviorSubject<CountryModel[]>(COUNTRIES);
  filteredCountries$ = this.filteredCountriesSubject.asObservable();

  getCountries(): Observable<CountryModel[]>{
    const countries = of(COUNTRIES)
    return countries
  }

  getCountryById(id:number){
    const countries = COUNTRIES;
    const country = countries.find(country => country.id === id);
    return country?country : this.country;
  }

  addCountry(country:CountryModel){
    const countries = COUNTRIES;
    countries.push(country)
  }

  filterCountries(searchText: string) :void{
    const filterCountries = COUNTRIES.filter(country => country.nom.toLowerCase().includes(searchText.toLowerCase()));
    this.filteredCountriesSubject.next(filterCountries);
  }

}
