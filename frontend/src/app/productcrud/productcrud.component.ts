import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-productcrud',
  imports: [],
  templateUrl: './productcrud.component.html',
  styleUrl: './productcrud.component.scss',
})
export class ProductcrudComponent {
  StudentArray: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  stname: string = '';
  course: string = '';
  fee: string = '';
  currentStudentID = '';

  constructor(private http: HttpClient) {
    this.getAllStudent();
  }

  ngOnInit(): void {}
  getAllStudent() {
    this.http
      .get('http://localhost:8085/api/student/')
      .subscribe((resultData: any) => {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.StudentArray = resultData.data;
      });
  }

  register() {
    let bodyData = {
      stname: this.stname,
      course: this.course,
      fee: this.fee,
    };

    this.http
      .post('http://localhost:9002/api/student/add', bodyData)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Student Registered Successfull');
        this.getAllStudent();
      });
  }

  setUpdate(data: any) {
    this.stname = data.stname;
    this.course = data.course;
    this.fee = data.fee;

    this.currentStudentID = data.id;
  }

  updateRecords() {
    let bodyData = {
      stname: this.stname,
      course: this.course,
      fee: this.fee,
    };

    this.http
      .put(
        'http://localhost:9002/api/student/update' +
          '/' +
          this.currentStudentID,
        bodyData
      )
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Student Registered Updatedd');
        this.getAllStudent();
      });

    save();
    {
      if (this.currentStudentID == '') {
        this.register();
      } else {
        this.UpdateRecords();
      }
    }
  }
  UpdateRecords() {
    throw new Error('Method not implemented.');
  }
  setDelete(data: any) {
    this.http
      .delete('http://localhost:9002/api/student/delete' + '/' + data.id)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Student Deletedddd');
        this.getAllStudent();
      });
  }
}

function save() {
  throw new Error('Function not implemented.');
}
