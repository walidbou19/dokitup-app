import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'login.component.html',
    styleUrls: ['login.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private spinnerService: Ng4LoadingSpinnerService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.spinnerService.show();
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.spinnerService.hide();
                    if (data !== false) {
                        localStorage.setItem('currentUser', JSON.stringify({'username': data.username, 'firstname': data.firstname}) );
                        this.router.navigate([this.returnUrl]);
                    } else {
                        this.alertService.error('Username ou password incorrect');
                    }
                },
                error => {
                    this.alertService.error(error);
                    this.spinnerService.hide();
                });
    }
}
