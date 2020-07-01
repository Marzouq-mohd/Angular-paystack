import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

// import { ConfirmedValidator } from "./confirmed.validator";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  // id: number;
  private sub: any;
  accessPaystack: FormGroup;
  createPaystack: FormGroup;
  showPassword: any;
  showConfirmedPassword: any;
  login: boolean = true;
  constructor(AccessForm: FormBuilder, private route: Router) {
    this.accessPaystack = AccessForm.group({
      user: ["", Validators.required],
      password: ["", Validators.required],
    });
    this.createPaystack = AccessForm.group({
      businessName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        Validators.pattern(
          "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}"
        ),
      ],
      confirmPassword: [""],
      country: ["", [Validators.required]],
    });
  }

  // checkPasswords(group: FormGroup) {
  //   // here we have the 'passwords' group
  //   let pass = group.get("password").value;
  //   let confirmPass = group.get("confirmPass").value;
  //   // return pass === confirmPass ? null : { notSame: true };
  // }
  validatePassword(password) {
    // console.log(password.value);
    // let confirmPass = this.createPaystack?.get("confirmPass")?.value;
    // return password === confirmPass ? null : { notSame: true };
  }
  loginScreen() {
    this.login = true;
    this.route.navigateByUrl("/login");
  }
  signUpScreen() {
    this.login = false;
    this.route.navigateByUrl("sign-up");
  }
  ngOnInit(): void {
    if (this.route.url.includes("login")) {
      this.login = true;
    } else if (this.route.url.includes("sign-up")) {
      this.login = false;
    }
  }
}
