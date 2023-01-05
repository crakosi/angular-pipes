import { NgModule } from '@angular/core';

//PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule
  ],
  imports:[]
})
export class PrimeNgModule { }
