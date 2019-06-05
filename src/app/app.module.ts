import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoryApiService } from './category/services/category-api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    CategoryModule,
    HttpClientModule
  ],
  providers: [CategoryApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
