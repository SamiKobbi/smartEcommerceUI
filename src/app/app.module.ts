import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoryApiService } from './category/services/category-api.service';
import { AuthService } from './services/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    CategoryModule,
    HttpClientModule
  ],
  providers: [CategoryApiService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
