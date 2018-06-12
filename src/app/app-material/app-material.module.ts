import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatMenuModule, MatCardModule, MatToolbarModule, MatDialogModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSpinner } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule, 
    MatMenuModule, 
    MatCardModule, 
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatExpansionModule, 
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule, 
    MatInputModule,
    MatDividerModule
  ],
  declarations: []
})
export class AppMaterialModule { 
  
}
