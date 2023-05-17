import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  nombre="Juan";
  apellido="Díaz";
  edad=18;
  empresa="Video 16";
  /* cambiaEmpresa(event:Event){
    this.empresa=(<HTMLInputElement>event.target).value;
  } */
  /*getEdad(){
    return this.edad;
  }*/

  habilitacionCuadro=false;

  usuRegistrado=false;

  textoRegistro="No hay registros";
  getRegistroUsuario(){
    this.usuRegistrado=false;
  }
  setUsuarioRegistrado(event:Event){
    //alert("El usuario esta registrado");
    //this.textoRegistro="Ya hay registro";
    //alert(event.target);
    if((<HTMLInputElement>event.target).value=="si"){
      this.textoRegistro="Ya hay registro";
    }else{
      this.textoRegistro="No hay registro";
    }
  }


  

}
