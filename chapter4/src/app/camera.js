import { Container } from 'aurelia-framework';

export class Camera{
    takePhoto(){
        let options = {
            quality: 75,
            destinationType: navigator.camera.DestinationType.FILE_URI,
            sourceType: navigator.camera.PictureSourceType.CAMERA,
            allowEdit: true,
        };

        navigator.camera.getPicture(this.success,this.error,options);		
    }

    success(imageData){
        let that = Container.instance.get(Camera);
        that.imgURI = "data:image/jpeg;base64," + imageData;
    }

    error(err){
        // An error occured. Show a message to the user
    }
}