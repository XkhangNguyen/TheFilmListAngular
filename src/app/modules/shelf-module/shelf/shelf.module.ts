import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShelfComponent } from './shelf.component';
import { SharedModule } from 'src/app/shared/components/shared-module/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { TabContentComponent } from '../components/tab-content/tab-content.component';

@NgModule({
  declarations: [ShelfComponent, TabContentComponent],
  imports: [CommonModule, SharedModule, MatTabsModule],
})
export class ShelfModule {}
