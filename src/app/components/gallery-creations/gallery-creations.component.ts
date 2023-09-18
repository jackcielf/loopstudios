import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-gallery-creations",
  templateUrl: "./gallery-creations.component.html",
  styleUrls: ["./gallery-creations.component.scss"],
})
export class GalleryCreationsComponent implements OnInit {
  images = [
    {
      url: "/assets/images/desktop/image-deep-earth.jpg",
      name: "Deep earth",
    },
    {
      url: "/assets/images/desktop/image-night-arcade.jpg",
      name: "Night arcade",
    },
    {
      url: "/assets/images/desktop/image-soccer-team.jpg",
      name: "Soccer team VR",
    },
    {
      url: "/assets/images/desktop/image-grid.jpg",
      name: "The grid",
    },
    {
      url: "/assets/images/desktop/image-from-above.jpg",
      name: "From up above VR",
    },
    {
      url: "/assets/images/desktop/image-pocket-borealis.jpg",
      name: "Pocket borealis",
    },
    {
      url: "/assets/images/desktop/image-curiosity.jpg",
      name: "The curiosity",
    },
    {
      url: "/assets/images/desktop/image-fisheye.jpg",
      name: "Make it fisheye",
    }
  ];

  constructor() {}

  ngOnInit() {}
}
