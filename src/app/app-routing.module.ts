import {RouterModule, Routes} from '@angular/router'
import {NgModule} from '@angular/core'
import {CountryManagementHeaderComponent} from './country-management-header/country-management-header.component'
import {CountryDetailComponent} from './country-detail/country-detail.component'
const routes: Routes = [
  {
    path: 'country',
    component: CountryManagementHeaderComponent
  },
  {
    path: 'details/:id',
    component: CountryDetailComponent
  },
  {
    path: '',
    redirectTo: 'country',
    pathMatch: 'full',
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
