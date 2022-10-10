import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {DataService} from './../../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imagenPrevia: any;
  imaganesF: any=[];
  files: any = [];
  resultados: any =[];
  resultadosF: any =[];
  aparecer: boolean = false;

  constructor(private sanitizer: DomSanitizer, private rest: DataService) { }

  ngOnInit(): void {
  }
  
  public onFileSelected(event: any) {

    const imagen = event.target.files;
    for(let ima of imagen){
      if(ima.type.includes('image')){
        this.files.push(ima);
        this.blobFile(ima).then((res: any) => {
          this.imagenPrevia = res.base;
          this.imaganesF.push({
            url: this.imagenPrevia,
            name: ima.name
          });
          
        })
      }else{
       alert("no es imagen");
      }
    }
    console.log(this.imaganesF);
  }

  loadImages = async () => {
    try {
      this.aparecer = true;
      const formData = new FormData();
      this.files.forEach((item: string | Blob) => {
        formData.append('files', item)
        console.log(item);
      });
      this.rest.postImage(`http://localhost:8000/prediction`, formData)
        .subscribe(res => {
          this.resultados = res;
          this.aparecer = false;
          for (const [key,value] of Object.entries(this.resultados)){
            let i = this.imaganesF.filter((element: { name: string; }) => element.name === key);
            this.resultadosF.push({
              url: i[0].url,
              prediccion: value
            });
          }
        });
    } catch (e) {
      console.log('ERROR', e);
    }
  }

  blobFile = async ($event: any) => new Promise((resolve) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          blob: $event,
          image,
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          blob: $event,
          image,
          base: null
        });
      };

    } catch (e) {
      return null;
    }
    return null;
  })

  delete(nombre: string): void{
    console.log(this.imaganesF);
    var newA = this.imaganesF.filter((imaa: { name: string; })=> imaa.name !== nombre);
    this.imaganesF = newA;
  } 
  deleteAll(): void{
    var canti = this.imaganesF.length;
    console.log(canti);
    this.imaganesF.splice(0,canti);
    var canti2 = this.resultadosF.length;
    this.resultadosF.splice(0,canti2);
    var canti3 = this.files.length;
    this.files.splice(0,canti3);
  }
}
