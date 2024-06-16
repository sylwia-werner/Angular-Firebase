import { ExpenseService } from './../../core/services/expense.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IExpense } from '../../core/models/common.model';

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.scss',
})
export class ExpenseFormComponent implements OnInit {
  expenseForm!: FormGroup;
  expenseId = '';

  constructor(
    private fb: FormBuilder,
    private expenseService: ExpenseService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.expenseForm = this.fb.group({
      price: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d+(\.\d{1,2})?$/),
      ]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl(''),
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.expenseId = params['id'];
        this.getExpense(this.expenseId);
      },
    });
  }

  onSubmit() {
    if (this.expenseForm.valid) {
      if (this.expenseId !== '') {
        this.expenseService.updateExpense(
          this.expenseId,
          this.expenseForm.value
        );
      } else {
        this.expenseService.addExpense(this.expenseForm.value);
      }

      this.router.navigate(['/']);
    } else {
      this.expenseForm.markAllAsTouched();
    }
  }

  getExpense(key: string) {
    this.expenseService
      .getExpense(key)
      .snapshotChanges()
      .subscribe({
        next: (data) => {
          let expense = data.payload.toJSON() as IExpense;
          this.expenseForm.setValue(expense);
        },
      });
  }
}
