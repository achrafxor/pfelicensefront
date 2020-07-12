import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShareholdersComponent } from '../shareholders.component';

@Component({
	selector: 'app-shareholderdialog',
	templateUrl: './shareholderdialog.component.html',
	styleUrls: [ './shareholderdialog.component.scss' ]
})
export class ShareholderdialogComponent implements OnInit {
	tierdata = [];
	listOfLocationId = [];
	foreignkeys = [];
	ActionType = '';
	clickedrow = {};
	constructor(public dialogRef: MatDialogRef<ShareholdersComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

	ngOnInit(): void {
		console.log(this.data);
		this.fillLocationsId();
		this.fillActionType();
		this.fillWellDataWithClickedRow();
	}
	fillLocationsId() {
		let counter = 0;
		this.foreignkeys.push(this.data[0]);
		this.foreignkeys.forEach((element) => {
			for (var key in element) {
				if (element.hasOwnProperty(key)) {
					this.listOfLocationId[counter] = element[key];
				}
				counter++;
			}
		});
		console.log(this.listOfLocationId);
	}
	fillActionType() {
		this.ActionType = this.data[1].type;
		console.log(this.ActionType);
	}
	fillWellDataWithClickedRow() {
		if (this.ActionType == 'edit') {
			this.clickedrow = this.data[2];
			this.tierdata[0] = this.clickedrow['nom_tier'];
			this.tierdata[1] = this.clickedrow['tel'];
		}
	}
	onSubmit() {
		this.dialogRef.close(this.tierdata);
	}
}
