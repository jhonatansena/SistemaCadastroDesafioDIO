import {Component} from '@angular/core';
import { Data } from '@angular/router';

export interface User {
  id?: number;
  photo: string;
  name: string;
  email: string;
  emailAlternative: string;
  dataAdmission: Data;
}
