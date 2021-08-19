import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/security/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  urlImage1:any = "assets/images/image1.jpg";
  urlImage2:any = "assets/images/photo_luxembourg.jpg";
  urlImage3:any = "assets/images/image3.jpg";
  urlImage4:any = "assets/images/image4.jpg";
  urlLogoFb:any = "assets/images/logo_fb.png";
  urlLogoLinkedin:any = "assets/images/logo_linkedin.png";
  urlLogoInsta:any = "assets/images/logo_insta.png";
  url:string = "";

  public loginForm: FormGroup = this.formBuilder.group({
    mail: ['', Validators.required],
    'password': ['', Validators.required]
  });

  public loading = false;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }


  ngOnInit(): void {
  }

  onSubmit(): void {

    if (this.loginForm) {

      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
        return;
      }

      this.loading = true;
      this.authService.login(
        this.loginForm.controls.mail.value,
        this.loginForm.controls.password.value)
        
        .subscribe(
          message => {
            this.url = "/agent/accueil";
            this.router.navigate([this.url]).then(over => {window.location.reload()});
          },
          error => {
            this.loading = false;
          }
        );
    }
  }
}
