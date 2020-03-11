import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  
  base64textString: string;

  selectFile(event) {
    var files = event.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();
      reader.onload = this.handleFile.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleFile(event) {
    var binaryString = event.target.result;
    this.base64textString = "data:image/jpeg;base64," + btoa(binaryString);
    console.log(btoa(binaryString));
  }
}
