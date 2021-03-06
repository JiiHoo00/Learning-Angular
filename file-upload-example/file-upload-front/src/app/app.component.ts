import { Component, OnInit } from '@angular/core';

// the magic from ng2-file-upload
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // define the constant url we would be uploading to.
  URL = 'http://localhost:3000/upload';

  // declare a property called fileuploader and assign it to an instance of a new fileUploader.
  // pass in the Url to be uploaded to,
  // and pass the itemAlias, which would be the name of the file input when sending the post request.
  // itemAlias needs to match the parameter in multer.single()- or multer.multiple()-calls in the backend.
  public uploader: FileUploader = new FileUploader({ url: this.URL, itemAlias: 'file' });

  ngOnInit() {
    // override the onAfterAddingfile property of the uploader so it doesn't authenticate with credentials.
    this.uploader.onAfterAddingFile = file => {
      file.withCredentials = false;
    };
    // overide the onCompleteItem property of the uploader so we are able to deal with the server response.
    this.uploader.onCompleteItem = (
      item: any,
      response: any,
      status: any,
      headers: any
    ) => {
      console.log('ImageUpload:uploaded:', item, status, response);
    };
  }
}
