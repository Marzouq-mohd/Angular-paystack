import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit, AfterViewInit {
  @ViewChild("playVideo") videoplayer: ElementRef;
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.videoplayer.nativeElement.play();
  }
}
