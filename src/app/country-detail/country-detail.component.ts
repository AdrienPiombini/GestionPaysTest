import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {subscribeOn, takeUntil} from 'rxjs'
import {CountryModel} from '../country-model'
import {CountriesService} from '../countries.service'

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit{
  constructor( private route: ActivatedRoute,private countriesService: CountriesService, private router: Router) {
  }

  country: CountryModel | undefined
  id: number | undefined
  ngOnInit(): void {
    this.route.parent?.paramMap.pipe().subscribe((paramMap) => {
      this.id = Number(location.pathname.split('/')[2])
      this.country = this.countriesService.getCountryById(this.id)
    })
  }
  
  goBack(){
    this.router.navigateByUrl('')
  }

}
