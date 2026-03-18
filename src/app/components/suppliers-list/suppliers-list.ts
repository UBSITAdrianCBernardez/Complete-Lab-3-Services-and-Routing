import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from '../../models/supplier.interface';
import { SupplierService } from '../../services/supplier.service';

@Component({
  selector: 'app-suppliers-list',
  imports: [],
  templateUrl: './suppliers-list.html',
  styleUrl: './suppliers-list.css',
})
export class SuppliersList implements OnInit {
  suppliers: Supplier[] = [];

  constructor(
    private supplierService: SupplierService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.suppliers = this.supplierService.getSuppliers();
  }

  viewSupplierDetails(id: number): void {
    this.router.navigate(['/suppliers', id]);
  }
}
