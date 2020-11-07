import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PartserviceService } from './partservice.service';

@Component({
	selector: 'app-part',
	templateUrl: './part.component.html',
	styleUrls: [ './part.component.scss' ]
})
export class PartComponent implements OnInit {
	PartList: any[];

	constructor(private _partService: PartserviceService, public dialog: MatDialog) {}

	ngOnInit(): void {
		this.serviceManager();
	}
	serviceManager(): void {
		this._partService.getPartList().subscribe((data) => {
			this.PartList = data;
		});
	}
}
