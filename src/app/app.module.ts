import { ProductService } from './product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routerConfig';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
