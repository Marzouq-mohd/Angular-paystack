import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit, AfterViewInit {
  @ViewChild("playVideo") videoplayer: ElementRef;
  @ViewChild("heroVideo") videoModal: ElementRef;
  constructor(protected sanitizer: DomSanitizer) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.videoplayer.nativeElement.play();
  }
  openHeroVideo: boolean = false;
  public cleanURL(value: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
