import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
num :number[] = [80,90,70];
// data :string[] = [""]
// data :[{nameis}] = [{name:"html" },{name:"css" },{name:"html" },{name:"html" },];
// data :string{} = {name:"html",};
datas :[{nameis:string,num:number},{nameis:string,num:number},{nameis:string,num:number},{nameis:string,num:number},{nameis:string,num:number},{nameis:string,num:number},{nameis:string,num:number},{nameis:string,num:number},{nameis:string,num:number},{nameis:string,num:number},{nameis:string,num:number}] =[{nameis:"html",num:85},{nameis:"css",num:90},{nameis:"jquery",num:95},{nameis:"javascript",num:80},{nameis:"typescript",num:70},{nameis:"sass",num:90},{nameis:"laravel",num:70},{nameis:"php",num:90},{nameis:"bootstrep",num:50},{nameis:"mysql",num:90},{nameis:"git&github",num:90}];
}
