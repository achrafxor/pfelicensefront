import { Component, OnInit } from '@angular/core';
import { RegistreserviceService } from './registreservice.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.scss' ]
})
export class RegisterComponent implements OnInit {
	constructor(private _RegistreService: RegistreserviceService) {}

	ngOnInit(): void {}
	userData = {
		nom: String,
		prenom: String,
		mail: String,
		mdp: String,
		admin: Number
	};
	registerdata = [];
	onSubmit() {
		console.log(this.registerdata);
		if (this.registerdata[5] != null) {
			this.registerdata[5] = 1;
		} else {
			this.registerdata[5] = 0;
		}
		console.log(this.registerdata);
		this.userData.nom = this.registerdata[0];
		this.userData.prenom = this.registerdata[1];
		this.userData.mail = this.registerdata[2];
		this.userData.mdp = this.registerdata[3];
		this.userData.admin = this.registerdata[5];
		console.log(this.userData);
		this._RegistreService.postUser(this.userData).subscribe(
			(response: any) => {
				console.log(response);
			},
			(error: any) => console.log(error)
		);
	}
}
