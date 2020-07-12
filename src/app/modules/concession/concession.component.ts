import { Component, OnInit, OnChanges } from '@angular/core';
import { ConcessionserviceService } from './concessionservice.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogueaddComponent } from 'src/app/shared/widgets/dialogueadd/dialogueadd.component';
import { DialogueupdateComponent } from 'src/app/shared/widgets/dialogueupdate/dialogueupdate.component';
import { compilePipeFromMetadata } from '@angular/compiler';
import { ConcessiondialogComponent } from './concessiondialog/concessiondialog.component';

var concessionlabel = [];

@Component({
	selector: 'app-concession',
	templateUrl: './concession.component.html',
	styleUrls: [ './concession.component.scss' ]
})
export class ConcessionComponent implements OnInit, OnChanges {
	updatedata = {};
	concessionlist = [];
	listofLocation = {};
	datatopass = [];
	concessionData = {
		nom_concession: String,
		date_ouverture: Date,
		date_cloture: Date
	};

	//putarray: concessionData;

	constructor(private _concessionservice: ConcessionserviceService, public dialog: MatDialog) {}

	ngOnInit(): void {
		this.serviceManager();
	}
	ngOnChanges(): void {}

	serviceManager(): void {
		let counter = 0;
		let counter2 = 0;
		this._concessionservice.getConcessionlist().subscribe((data) => {
			this.fillForeinKeys(data);
			this.fillAndFilterConcessionList(data);
		});
	}

	openDialogueAdd(): void {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.width = '500px';
		dialogConfig.height = '500px';
		this.datatopass.push(this.listofLocation);
		this.datatopass.push({ type: 'add' });
		dialogConfig.data = this.datatopass;
		const dialogRef = this.dialog.open(ConcessiondialogComponent, dialogConfig);

		dialogRef.afterClosed().subscribe((data) => {
			this.concessionData.nom_concession = data[0];
			this.concessionData.date_ouverture = data[1];
			this.concessionData.date_cloture = data[2];
			this._concessionservice.postConcession(this.concessionData, data[3]).subscribe(
				(response: any) => {
					console.log(response);
				},
				(error: any) => console.log(error)
			);
		});
		this.datatopass = [];
	}

	updateData(data: any) {
		this.updatedata = data;
		let idconcession = this.updatedata['id_concession'];
		console.log(idconcession);
		const dialogConfig = new MatDialogConfig();
		dialogConfig.width = '500px';
		dialogConfig.height = '500px';
		this.datatopass.push(this.listofLocation);
		this.datatopass.push({ type: 'edit' });
		this.datatopass.push(this.updatedata);
		dialogConfig.data = this.datatopass;

		const dialogRef = this.dialog.open(ConcessiondialogComponent, dialogConfig);
		dialogRef.afterClosed().subscribe((data) => {
			this.concessionData.nom_concession = data[0];
			this.concessionData.date_ouverture = data[1];
			this.concessionData.date_cloture = data[2];
			this._concessionservice.putConcession(this.concessionData, idconcession, data[3]).subscribe(
				(response: any) => {
					console.log(response);
				},
				(error: any) => console.log(error)
			);
		});
		this.datatopass = [];
		this.updatedata = [];
	}

	fillForeinKeys(data: any) {
		let counter = 0;
		data.forEach((element) => {
			this.listofLocation[counter] = element['lieu_de_concession'].id_lieu;
			counter++;
		});
	}
	fillAndFilterConcessionList(data: any) {
		this.concessionlist = data;
		this.concessionlist.forEach((element) => {
			for (var key in element) {
				if (key == 'lieu_de_concession') {
					element[key] = element[key].region;
				}
			}
		});
	}
}
