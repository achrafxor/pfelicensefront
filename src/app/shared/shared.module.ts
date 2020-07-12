import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SideabarComponent } from './components/sideabar/sideabar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule, MatDivider } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { TableComponent } from './widgets/table/table.component';
import { MatTableModule, MatHeaderCell, MatCell } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CdkTableModule } from '@angular/cdk/table';
import { DialogueaddComponent } from './widgets/dialogueadd/dialogueadd.component';
import { DialogueupdateComponent } from './widgets/dialogueupdate/dialogueupdate.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		SideabarComponent,
		TableComponent,
		DialogueaddComponent,
		DialogueupdateComponent
	],
	imports: [
		CommonModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		FlexLayoutModule,
		MatMenuModule,
		MatDividerModule,
		MatListModule,
		RouterModule,
		MatTableModule,
		MatFormFieldModule,
		CdkTableModule,
		MatInputModule,
		MatDialogModule,
		ReactiveFormsModule
	],
	exports: [
		HeaderComponent,
		FooterComponent,
		SideabarComponent,
		TableComponent,
		DialogueaddComponent,
		DialogueupdateComponent
	]
})
export class SharedModule {}
