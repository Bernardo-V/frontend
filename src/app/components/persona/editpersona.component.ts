import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { SPersonaService } from 'src/app/service/s-persona.service';

@Component({
  selector: 'app-editpersona',
  templateUrl: './editpersona.component.html',
  styleUrls: ['./editpersona.component.css']
})
export class EditpersonaComponent implements OnInit {pers: Persona = null;

  constructor(private sPersona: SPersonaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void { 
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(
      data =>{
        this.pers = data;
      }, err =>{        
        alert ('Error al editar la persona')
        this.router.navigate(['']);
      }
      )
    }
  
    onUpdate(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sPersona.update(id, this.pers).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert ("Error al editar la persona");
          this.router.navigate(['']);
        }
      )
  
    }
  
  }
  
