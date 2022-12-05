import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addnew-task',
  templateUrl: './addnew-task.page.html',
  styleUrls: ['./addnew-task.page.scss'],
})
export class AddnewTaskPage implements OnInit {

  itemname = ''
  itemdisc=''
  itemDate=''
  const taskObject:any
  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }


  AddTask(){
    const taskObject = ({itemname:this.itemname,itemdisc:this.itemdisc,itemDate:this.itemDate})
    this.dismiss()
  }
  async dismiss(){
    await this.modalCtrl.dismiss(this.taskObject)
  }

}
