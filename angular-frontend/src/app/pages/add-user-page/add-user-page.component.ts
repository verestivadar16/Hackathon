import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-add-user-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-user-page.component.html',
  styleUrl: './add-user-page.component.scss'
})
export class AddUserPageComponent implements OnInit{


  items = ['user', 'admin', 'boss', 'dolgozo'];
  // selectedValue: string = '';
  selectedValue: string | null = null; // Initialize selectedValue as null
  showOptions = false;

  toggleOptions(): void {
    this.showOptions = !this.showOptions; // Toggle the showOptions flag
  }

  selectItem(item: string): void {
    this.selectedValue = item; // Set selectedValue when an item is selected
    this.toggleOptions(); // Hide options after selection
  }

  deviceForm = new FormGroup({
    userName: new FormControl(''),
    userPassword: new FormControl(''),
    userPasswordConfirmation: new FormControl('')
  });

  submitUser() {
    this.UserService.submitUser(
      this.deviceForm.value.userName ?? '',
      this.deviceForm.value.userPassword ?? ''
    );
  }
  constructor(private fb: FormBuilder, private UserService: UserService) {}

  ngOnInit(): void {
    this.deviceForm = this.fb.group({
      userName: ['', Validators.required],
      userPassword: ['', Validators.required],
      userPasswordConfirmation: ['', [Validators.required, this.passwordMatchValidator]]
    });
  }

  passwordMatchValidator(control: FormGroup): { [key: string]: boolean } | null {
    const password = control.get('userPassword');
    const passwordConfirmation = control.get('userPasswordConfirmation');
    if (password?.pristine || passwordConfirmation?.pristine) {
      return null;
    }
    return password && passwordConfirmation && password.value !== passwordConfirmation.value
      ? { passwordMismatch: true }
      : null;
  }



}
