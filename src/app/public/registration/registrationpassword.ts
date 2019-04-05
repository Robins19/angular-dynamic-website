import {FormGroup} from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
export const passwordValidator:
ValidatorFn = (control: FormGroup):
ValidationErrors | null => {
  const password = control.get('password');
  const  confirmpassword = control.get(' confirmpassword');
  // tslint:disable-next-line:triple-equals
  return password && confirmpassword && password.value == confirmpassword.value ? { passwordsMismatch: true } : null;
};
