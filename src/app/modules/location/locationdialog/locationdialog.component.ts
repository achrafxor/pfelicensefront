import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocationComponent } from '../location.component';

@Component({
	selector: 'app-locationdialog',
	templateUrl: './locationdialog.component.html',
	styleUrls: [ './locationdialog.component.scss' ]
})
export class LocationdialogComponent implements OnInit {
	locationdata = [];
	ActionType = '';
	clickedrow = {};
	constructor(public dialogRef: MatDialogRef<LocationComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

	ngOnInit(): void {
		this.fillActionType();
		console.log(this.data);
		this.fillProductDatawithClickerRow();
	}
	fillActionType() {
		this.ActionType = this.data[0].type;
		console.log(this.ActionType);
	}
	fillProductDatawithClickerRow() {
		if (this.ActionType == 'edit') {
			this.clickedrow = this.data[1];
			this.locationdata[0] = this.clickedrow['pays'];
			this.locationdata[1] = this.clickedrow['region'];
			this.locationdata[2] = this.clickedrow['zip_code'];
		}
	}
	onSubmit() {
		this.dialogRef.close(this.locationdata);
	}
}
