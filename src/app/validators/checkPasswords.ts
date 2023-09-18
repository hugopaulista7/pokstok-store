import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const checkPasswords: ValidatorFn = (
  group: AbstractControl
): ValidationErrors | null => {
  let password = group.get('password')?.value;
  let confirmPassword = group.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { passwordNotMatch: true };
};
