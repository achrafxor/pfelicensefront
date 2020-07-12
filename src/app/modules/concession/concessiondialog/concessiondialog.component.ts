import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConcessionComponent } from '../concession.component';

@Component({
	selector: 'app-concessiondialog',
	templateUrl: './concessiondialog.component.html',
	styleUrls: [ './concessiondialog.component.scss' ]
})
export class ConcessiondialogComponent implements OnInit {
	constructor(public dialogRef: MatDialogRef<ConcessionComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
	clickedrow = [];
	listofLocation = [];
	concessiondata = [];
	foreignkeys = [];
	type = '';
	ngOnInit(): void {
		this.fillForeignKeys();
		this.fillTypeOfAction();
		this.fillClickedrow();
	}

	fillForeignKeys() {
		let counter = 0;
		this.foreignkeys.push(this.data[0]);
		this.foreignkeys.forEach((element) => {
			for (var key in element) {
				if (element.hasOwnProperty(key)) {
					this.listofLocation[counter] = element[key];
				}
				counter++;
			}
		});
	}
	fillTypeOfAction() {
		this.type = this.data[1].type;
		console.log(this.type);
	}
	fillClickedrow() {
		if (this.type == 'edit') {
			this.clickedrow = this.data[2];
			this.concessiondata[0] = this.clickedrow['nom_concession'];
			this.concessiondata[1] = this.clickedrow['date_ouverture'];
			this.concessiondata[2] = this.clickedrow['date_cloture'];
		}
	}
	onSubmit() {
		this.dialogRef.close(this.concessiondata);
	}
}
