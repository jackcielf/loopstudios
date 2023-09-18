import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  icons = [
    {
      url: "/assets/images/icon-facebook.svg",
      name: "Facebook",
    },
    {
      url: "/assets/images/icon-twitter.svg",
      name: "Twitter",
    },
    {
      url: "/assets/images/icon-pinterest.svg",
      name: "Pinterest",
    },
    {
      url: "/assets/images/icon-instagram.svg",
      name: "Instagram",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
