import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BiensComponent } from './biens/biens.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AddBienComponent } from './biens/add-bien/add-bien.component';
import { DetailBienComponent } from './biens/detail-bien/detail-bien.component';
import { ListBienComponent } from './biens/list-bien/list-bien.component';
import { JumbotronBienComponent } from './biens/jumbotron-bien/jumbotron-bien.component';
import {ItemBienComponent} from './biens/list-bien/item-bien/item-bien.component';
import { SeparatorPipe } from './pipes/separator.pipe';
import { TimeLeftPipe } from './pipes/time-left.pipe';
import { SummarizePipe } from './pipes/summarize.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import {RouterModule, Routes} from '@angular/router';
import { ReservationBienComponent } from './biens/reservation-bien/reservation-bien.component';
import { DetailReservationComponent } from './biens/reservation-bien/detail-reservation/detail-reservation.component';
import { EditReservationComponent } from './biens/reservation-bien/edit-reservation/edit-reservation.component';
import { PageNotFoungComponent } from './page-not-foung/page-not-foung.component';
const appRoute: Routes = [
  { path: '', redirectTo: '/biens', pathMatch: 'full' },
  { path: 'biens', component: ListBienComponent },
  { path: 'biens/add', component: AddBienComponent },
  { path: 'biens/:id', component: DetailBienComponent},
  { path: 'reservations', component : ReservationBienComponent,
   children: [
     { path: ':id', component : DetailReservationComponent},
     { path: ':id/edit', component: EditReservationComponent},
   ]},






  { path: 'notFound', component: PageNotFoungComponent},
  {path: '**', redirectTo: '/notFound'},
];
@NgModule({
  declarations: [
    AppComponent,
    BiensComponent,
    FooterComponent,
    HeaderComponent,
    AddBienComponent,
    DetailBienComponent,
    ListBienComponent,
    JumbotronBienComponent,
    ItemBienComponent,
    SeparatorPipe,
    TimeLeftPipe,
    SummarizePipe,
    FilterPipe,
    ReservationBienComponent,
    DetailReservationComponent,
    EditReservationComponent,
    PageNotFoungComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
