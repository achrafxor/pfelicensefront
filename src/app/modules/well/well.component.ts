import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogueaddComponent } from 'src/app/shared/widgets/dialogueadd/dialogueadd.component';
import { DialogueupdateComponent } from 'src/app/shared/widgets/dialogueupdate/dialogueupdate.component';
import { WellService } from './well.service';
import { WelldialogComponent } from './welldialog/welldialog.component';

@Component({
	selector: 'app-well',
	templateUrl: './well.component.html',
	styleUrls: [ './well.component.scss' ]
})
export class WellComponent implements OnInit {
	welllist: any[];
	listofconcessionid = {};
	datatopass = [];
	wellData = {
		nom_puit: String
	};
	updatedata = {};

	constructor(private _wellService: WellService, public dialog: MatDialog) {}

	ngOnInit(): void {
		this.wellServiceManager();
		this.concessionServiceManager();
	}
	/*
	
	
	

	TODO
	open the add dialogue with add action
	TODO
	open the add dialogue with edit action
	*/
	//?call main service
	wellServiceManager(): void {
		this._wellService.getWellList().subscribe((data) => {
			this.addToDataTable(data);
			this.filterDataTable();
		});
	}
	//?call concession service
	concessionServiceManager(): void {
		this._wellService.getConcessionlist().subscribe((data) => {
			console.log(data);
			this.fillConcessionid(data);
		});
	}
	//?fill concession id FK
	fillConcessionid(data: any) {
		let counter = 0;
		data.forEach((element) => {
			this.listofconcessionid[counter] = element.id_concession;
			counter++;
		});
		console.log('this.listofconcessionid');
		console.log(this.listofconcessionid);
	}
	addToDataTable(data: any) {
		this.welllist = data;
	}
	filterDataTable() {
		this.welllist.forEach((element) => {
			for (var key in element) {
				if (key == 'concession_de_puit') {
					element[key] = element[key].nom_concession;
				}
			}
		});
	}

	openDialogAdd() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.width = '500px';
		dialogConfig.height = '500px';
		this.datatopass.push(this.listofconcessionid);
		this.datatopass.push({ type: 'add' });
		console.log(this.datatopass);
		dialogConfig.data = this.datatopass;

		const dialogRef = this.dialog.open(WelldialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe((data) => {
        this.wellData.nom_puit = data[0];
        this._wellService.postWell(this.wellData, data[1]).subscribe(
          (response: any) => {
            console.log(response);
          },
          (error: any) => console.log(error)
        );
      });
		this.datatopass = [];
	}
	openUpdateDialogue(data: any) {
		this.updatedata = data;
		let idwell = this.updatedata['id_puit'];
		console.log(this.updatedata);
		const dialogConfig = new MatDialogConfig();
		dialogConfig.width = '500px';
		dialogConfig.height = '500px';
		this.datatopass.push(this.listofconcessionid);
		this.datatopass.push({ type: 'edit' });
		this.datatopass.push(this.updatedata);
		dialogConfig.data = this.datatopass;
		const dialogRef = this.dialog.open(WelldialogComponent, dialogConfig);
		dialogRef.afterClosed().subscribe((data) => {
			this.wellData.nom_puit = data[0];
			this._wellService.putwell(this.wellData, idwell, data[1]).subscribe(
				(response: any) => {
					console.log(response);
				},
				(error: any) => console.log(error)
			);
		});

		this.datatopass = [];
		this.updatedata = {};
	}
}
