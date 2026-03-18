import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from '../../models/supplier.interface';
import { SupplierService } from '../../services/supplier.service';

@Component({
  selector: 'app-supplier-details',
  imports: [FormsModule],
  templateUrl: './supplier-details.html',
  styleUrl: './supplier-details.css',
})
export class SupplierDetails implements OnInit {
  supplier: Supplier | undefined;
  supplierId = 0;
  productsText = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private supplierService: SupplierService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.supplierId = Number(params['id']);
      const supplierData = this.supplierService.getSupplierById(this.supplierId);

      if (supplierData) {
        this.supplier = {
          ...supplierData,
          productsSupplied: [...supplierData.productsSupplied],
        };
        this.productsText = this.supplier.productsSupplied.join(', ');
      }
    });
  }

  saveChanges(): void {
    if (!this.supplier) {
      return;
    }

    this.supplier.productsSupplied = this.productsText
      .split(',')
      .map((product) => product.trim())
      .filter((product) => product.length > 0);

    this.supplierService.updateSupplier(this.supplier);
    this.goBack();
  }

  goBack(): void {
    this.router.navigate(['/suppliers']);
  }
}
