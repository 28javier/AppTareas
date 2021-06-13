import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listaTareas: Tarea[] = [];
  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){
    console.log(this.nombreTarea);
    // crear un objeto tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }
    // agregar el objeto a un array
    this.listaTareas.push(tarea);
    // reset forms
    this.nombreTarea = '';
  }

  eliminarTarea(i: number){
    console.log(i);
    this.listaTareas.splice(i, 1);
  }

  actualizarTarea(tarea: Tarea, i: number){
    this.listaTareas[i].estado = !tarea.estado;
    
  }

}
