import { RecruitmentService } from './../shared/services/recruitment.service';
import { SubscribeForm } from './../shared/models/subscribe-form.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'app-subscribe',
	templateUrl: './subscribe.component.html',
	styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {
	subscribeForm: FormGroup;
	signatureImage: any;

	subscription: SubscribeForm = new SubscribeForm();
	signaturePadOptions: Object = {
		'minWidth': 2,
		'canvasWidth': 400,
		'canvasHeight': 200
	};

	@ViewChild(SignaturePad) signaturePad: SignaturePad;

	constructor(public service: RecruitmentService, public snackBar: MatSnackBar) { }

	ngOnInit(): void {
		this.subscribeForm = new FormGroup({
			fullName: new FormControl(this.subscription.fullName, [
				Validators.required,
				Validators.minLength(4)
			]),
			email: new FormControl(this.subscription.email, [
				Validators.required,
				Validators.minLength(4)
			]),
			phoneNumber: new FormControl(this.subscription.phoneNumber, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
			acceptTermsAndConditions: new FormControl(this.subscription.acceptTermsAndConditions, Validators.required)
		});
	}

	drawComplete() {
		this.signatureImage = this.signaturePad.toDataURL();
	}

	drawClear() {
		this.signaturePad.clear();
	}

	submit(): void {
		this.drawComplete();
		this.subscribeForm.value.signatureImage = this.signatureImage;
		this.service.save(this.subscribeForm.value).subscribe(() => {
			let snackBarRef = this.snackBar.open('Gracias', 'Recargar');
			snackBarRef.afterDismissed().subscribe(() => {
				window.location.reload();
			  })
		}, (error: any) => {
			this.snackBar.open('Ocurrió un error por favor intentelo nuevamente', 'Cerrar')
		});
	}
}
