import { Component } from '@angular/core';
import {
  Plugins,
  CameraResultType,
  CameraSource,
  Capacitor,
} from '@capacitor/core';
const { Camera } = Plugins;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  async onPickImage() {
    if (!Capacitor.isPluginAvailable('Camera')) {
      return;
    }
    // unexpected behaviour seems to appear while calling Camera.getPhoto
    const capturedImage = await Camera.getPhoto({
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
      quality: 100,
      correctOrientation: true,
    }).catch(error => {
      console.log(error);
      return null;
    });
    console.dir(capturedImage);
  }
}
