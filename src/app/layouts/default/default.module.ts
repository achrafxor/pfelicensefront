import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConcessionComponent } from 'src/app/modules/concession/concession.component';
import { ConcessionserviceService } from 'src/app/modules/concession/concessionservice.service';
import { HttpClientModule } from '@angular/common/http';
import { LocationComponent } from 'src/app/modules/location/location.component';
import { ProductComponent } from 'src/app/modules/product/product.component';
import { ProductionComponent } from 'src/app/modules/production/production.component';
import { UserComponent } from 'src/app/modules/user/user.component';
import { WellComponent } from 'src/app/modules/well/well.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogueupdateComponent } from 'src/app/shared/widgets/dialogueupdate/dialogueupdate.component';
import { DialogueaddComponent } from 'src/app/shared/widgets/dialogueadd/dialogueadd.component';
import { ReserveComponent } from 'src/app/modules/reserve/reserve.component';
import { ShareholdersComponent } from 'src/app/modules/shareholders/shareholders.component';
import { ConcessiondialogComponent } from 'src/app/modules/concession/concessiondialog/concessiondialog.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductiondialogComponent } from 'src/app/modules/production/productiondialog/productiondialog.component';
import { WelldialogComponent } from 'src/app/modules/well/welldialog/welldialog.component';
import { ProductService } from 'src/app/modules/product/product.service';
import { ProductdialogueComponent } from 'src/app/modules/product/productdialogue/productdialogue.component';
import { LocationdialogComponent } from 'src/app/modules/location/locationdialog/locationdialog.component';
import { ShareholderdialogComponent } from 'src/app/modules/shareholders/shareholderdialog/shareholderdialog.component';
import { PartComponent } from 'src/app/modules/part/part.component';
import { CameradialogComponent } from 'src/app/modules/user/cameradialog/cameradialog.component';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { RegisterComponent } from 'src/app/modules/register/register.component';

@NgModule({
	declarations: [
		DefaultComponent,
		DashboardComponent,
		ConcessionComponent,
		LocationComponent,
		ProductComponent,
		ProductionComponent,
		UserComponent,
		WellComponent,
		ReserveComponent,
		ShareholdersComponent,
		ConcessiondialogComponent,
		ProductiondialogComponent,
		WelldialogComponent,
		ProductdialogueComponent,
		LocationdialogComponent,
		ShareholderdialogComponent,
		PartComponent,
		CameradialogComponent,
		LoginComponent,
		RegisterComponent
	],
	entryComponents: [
		ConcessiondialogComponent,
		ProductiondialogComponent,
		WelldialogComponent,
		ProductdialogueComponent,
		LocationdialogComponent,
		ShareholderdialogComponent,
		CameradialogComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		SharedModule,
		MatSidenavModule,
		MatDividerModule,
		FlexLayoutModule,
		MatCardModule,
		MatPaginatorModule,
		MatTableModule,
		HttpClientModule,
		MatIconModule,
		MatButtonModule,
		MatDialogModule,
		MatInputModule,
		FormsModule,
		MatFormFieldModule
	],
	providers: [ ConcessionserviceService ]
})
export class DefaultModule {}
