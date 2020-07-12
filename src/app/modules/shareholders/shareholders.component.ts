import { Component, OnInit } from '@angular/core';
import { ShareholdersService } from './shareholders.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ShareholderdialogComponent } from './shareholderdialog/shareholderdialog.component';

@Component({
	selector: 'app-shareholders',
	templateUrl: './shareholders.component.html',
	styleUrls: [ './shareholders.component.scss' ]
})
export class ShareholdersComponent implements OnInit {
	tierlist = [];
	ListOfLocations = {};
	datatopass = [];
	updatedata = {};

	TierData = {
		nom_tier: String,
		tel: String
	};

	constructor(private _TierService: ShareholdersService, public dialog: MatDialog) {}

	ngOnInit(): void {
		this.tierServiceManager();
		this.lieuServiceManager();
	}
	tierServiceManager() {
		this._TierService.getTierlist().subscribe((data) => {
			this.addDataToTable(data);
			this.filterDataTable();
		});
	}
	lieuServiceManager() {
		this._TierService.getLocationList().subscribe((data) => {
			this.fillLocationForeignKeys(data);
		});
	}
	addDataToTable(data: any) {
		this.tierlist = data;
	}
	filterDataTable() {
		this.tierlist.forEach((element) => {
			for (var key in element) {
				if (key == 'lieu_de_tier') {
					element[key] = element[key].region;
				}
			}
		});
	}
	fillLocationForeignKeys(data: any) {
		let counter = 0;
		data.forEach((element) => {
			this.ListOfLocations[counter] = element.id_lieu;
			counter++;
		});
		console.log(this.ListOfLocations);
	}
	openAddDialogue() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.width = '500px';
		dialogConfig.height = '500px';
		this.datatopass.push(this.ListOfLocations);
		this.datatopass.push({ type: 'add' });
		dialogConfig.data = this.datatopass;
		const dialogRef = this.dialog.open(ShareholderdialogComponent, dialogConfig);
		dialogRef.afterClosed().subscribe((data) => {
			this.TierData.nom_tier = data[0];
			this.TierData.tel = data[1];

			this._TierService.posttier(this.TierData, data[2]).subscribe(
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
		let idtier = this.updatedata['id_tier'];
		const dialogConfig = new MatDialogConfig();
		dialogConfig.width = '500px';
		dialogConfig.height = '500px';
		this.datatopass.push(this.ListOfLocations);
		this.datatopass.push({ type: 'edit' });
		this.datatopass.push(this.updatedata);
		dialogConfig.data = this.datatopass;
		const dialogRef = this.dialog.open(ShareholderdialogComponent, dialogConfig);
		dialogRef.afterClosed().subscribe((data) => {
			this.TierData.nom_tier = data[0];
			this.TierData.tel = data[1];
			console.log(this.TierData);
			console.log(idtier);
			console.log(data[2]);
			this._TierService.puttier(this.TierData, idtier, data[2]).subscribe(
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
