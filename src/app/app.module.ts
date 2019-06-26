import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./template/navbar/navbar.component";
import { SearchbarComponent } from './template/searchbar/searchbar.component';
import { MainLayoutComponent } from './template/home/main-layout/main-layout.component';
import { FooterComponent } from './template/home/footer/footer.component';
import { ResultDisplayComponent } from './template/search-result/result-display/result-display.component';
import { SingleItemResultComponent } from './template/search-result/single-item-result/single-item-result.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, SearchbarComponent, MainLayoutComponent, FooterComponent, ResultDisplayComponent, SingleItemResultComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
