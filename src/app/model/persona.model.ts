export class Persona {
    id?: number; 
    nombreP: string;
    apellidoP: string;
    imgP: string;
    tituloP: string;
    descP: string;
    imgPortada: string;
    
    constructor(nombreP: string, apellidoP: string, imgP: string, tituloP: string, descP: string, imgPortada: string){
        this.nombreP= nombreP;
        this.apellidoP=apellidoP;
        this.imgP= imgP;
        this.tituloP= tituloP
        this.descP= descP;
        this.imgPortada=imgPortada;
    }

}