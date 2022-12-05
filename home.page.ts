import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddnewTaskPage } from '../addnew-task/addnew-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todolist = []

  today : number = Date.now()

  constructor(public modalCtrl:ModalController) {}

  async addTask(){
    const modal = await this.modalCtrl.create({
      component:AddnewTaskPage
    })

    modal.onDidDismiss().then(newTaskObj =>{
      console.log(newTaskObj.data);
      this.todolist.push(newTaskObj.data)

    })

    return await modal.present()
  }
  delete(index){
    this.todolist.splice(index,1)
  }

}
