import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { ModalService } from './modal.service';
import {ActivatedRoute} from '@angular/router'
import {CountriesService} from '../countries.service'
import {CountryModel} from '../country-model'
import { COUNTRIES } from '../mock-countries';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{
  constructor(private route: ActivatedRoute,private countriesService: CountriesService, private modalService: ModalService) {
  }

  country: CountryModel = {id: 0,nom: '', population: 0, superficie:0, continent: '', pib: '', image:'' }
  @Input() id: number =0
  showModal = false;
  ngOnInit(): void {
    this.openModal()
  }

  openModal(){
    this.modalService.showModal$.subscribe((id: number) => {
      const c = this.countriesService.getCountryById(id)
      this.country = c?c:this.country
      this.showModal = !!id;
      this.id = id;
    });
  }
  closeModal(country?: CountryModel) {
    if(country){
      if(!country.id){
        this.saveCountry(country)
      }
    }
    this.modalService.closeModal();
  }

  saveCountry(country: CountryModel){
    if(country.nom && country.continent && country.population && country.superficie && country.pib){
      country.id = Number(COUNTRIES.length) + 2;
      COUNTRIES.push(country)
    }
  }

}

