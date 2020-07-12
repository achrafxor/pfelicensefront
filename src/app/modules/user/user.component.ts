import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CameradialogComponent } from './cameradialog/cameradialog.component';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: [ './user.component.scss' ]
})
export class UserComponent implements OnInit {
	constructor(public dialog: MatDialog) {}

	ngOnInit(): void {}
	openCameraDialog() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.width = '500px';
		dialogConfig.height = '300px';
		const dialogRef = this.dialog.open(CameradialogComponent, dialogConfig);
	}
}
