import { Component, OnInit } from '@angular/core';
import { LocationService } from './location.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LocationdialogComponent } from './locationdialog/locationdialog.component';

@Component({
	selector: 'app-location',
	templateUrl: './location.component.html',
	styleUrls: [ './location.component.scss' ]
})
export class LocationComponent implements OnInit {
	LocationList: any[];
	datatopass = [];
	updatedata = {};
	locationData = {
		pays: String,
		region: String,
		zip_code: String
	};

	constructor(private _locationService: LocationService, public dialog: MatDialog) {}

	ngOnInit(): void {
		this.serviceManager();
	}
	serviceManager(): void {
		this._locationService.getLocationList().subscribe((data) => {
			this.LocationList = data;
			console.log(data);
		});
	}
	openAddDialogue() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.width = '500px';
		dialogConfig.height = '500px';
		this.datatopass.push({ type: 'add' });
		dialogConfig.data = this.datatopass;
		const dialogRef = this.dialog.open(LocationdialogComponent, dialogConfig);
		dialogRef.afterClosed().subscribe((data) => {
			this.locationData.pays = data[0];
			this.locationData.region = data[1];
			this.locationData.zip_code = data[2];
			this._locationService.postLocation(this.locationData).subscribe(
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
		let idLocation = this.updatedata['id_lieu'];
		const dialogConfig = new MatDialogConfig();
		dialogConfig.width = '500px';
		dialogConfig.height = '500px';
		this.datatopass.push({ type: 'edit' });
		this.datatopass.push(this.updatedata);
		dialogConfig.data = this.datatopass;
		const dialogRef = this.dialog.open(LocationdialogComponent, dialogConfig);
		dialogRef.afterClosed().subscribe((data) => {
			console.log(data);
			this.locationData.pays = data[0];
			this.locationData.region = data[1];
			this.locationData.zip_code = data[2];
			this._locationService.putLocation(this.locationData, idLocation).subscribe(
				(response: any) => {
					console.log(response);
				},
				(error: any) => console.log(error)
			);
		});
		this.datatopass = [];
		this.updatedata = [];
	}
}
