import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "paystack-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  scrolled: boolean = false;
  mobileNav: boolean = false;
  status: boolean = false;
  @HostListener("window:scroll", ["$event"])
  onScroll(event) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }
  displayMobileNav() {
    this.mobileNav = !this.mobileNav;
  }
  ngOnInit(): void {}
}
