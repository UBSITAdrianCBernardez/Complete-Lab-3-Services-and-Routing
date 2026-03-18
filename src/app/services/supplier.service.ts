import { Injectable } from '@angular/core';
import { Supplier } from '../models/supplier.interface';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  private suppliers: Supplier[] = [
    {
      id: 1,
      supplierName: 'TechSource Solutions',
      location: 'Quezon City',
      email: 'sales@techsource.com',
      contactPerson: 'Adrian Cruz',
      phone: '0917-100-1001',
      productsSupplied: ['Laptops', 'Monitors', 'Keyboards'],
      status: 'Active',
      notes: 'Main electronics supplier',
    },
    {
      id: 2,
      supplierName: 'Metro Device Hub',
      location: 'Makati City',
      email: 'contact@metrodevicehub.com',
      contactPerson: 'Bianca Lim',
      phone: '0917-100-1002',
      productsSupplied: ['Phones', 'Tablets'],
      status: 'Active',
      notes: 'Fast delivery for mobile devices',
    },
    {
      id: 3,
      supplierName: 'Northwind Components',
      location: 'Baguio City',
      email: 'orders@northwindcomponents.com',
      contactPerson: 'Carlos Mendoza',
      phone: '0917-100-1003',
      productsSupplied: ['Mouse', 'Headsets', 'Webcams'],
      status: 'Active',
      notes: 'Accessories specialist',
    },
    {
      id: 4,
      supplierName: 'Prime Office Gear',
      location: 'Cebu City',
      email: 'hello@primeofficegear.com',
      contactPerson: 'Diana Reyes',
      phone: '0917-100-1004',
      productsSupplied: ['Printers', 'Scanners', 'Ink'],
      status: 'Limited',
      notes: 'Printer stocks vary weekly',
    },
    {
      id: 5,
      supplierName: 'Silverline Digital',
      location: 'Davao City',
      email: 'support@silverlinedigital.com',
      contactPerson: 'Ethan Flores',
      phone: '0917-100-1005',
      productsSupplied: ['Smartwatches', 'Chargers'],
      status: 'Active',
      notes: 'Wearable devices supplier',
    },
    {
      id: 6,
      supplierName: 'Apex Audio World',
      location: 'Pasig City',
      email: 'service@apexaudio.com',
      contactPerson: 'Faith Navarro',
      phone: '0917-100-1006',
      productsSupplied: ['Speakers', 'Microphones'],
      status: 'Active',
      notes: 'Good for audio equipment',
    },
    {
      id: 7,
      supplierName: 'Vertex Imaging',
      location: 'Taguig City',
      email: 'sales@verteximaging.com',
      contactPerson: 'Gabriel Santos',
      phone: '0917-100-1007',
      productsSupplied: ['Cameras', 'Tripods'],
      status: 'Limited',
      notes: 'Camera stock is seasonal',
    },
    {
      id: 8,
      supplierName: 'Omni Hardware Co.',
      location: 'Manila',
      email: 'info@omnihardware.com',
      contactPerson: 'Hannah De Leon',
      phone: '0917-100-1008',
      productsSupplied: ['Storage Devices', 'RAM'],
      status: 'Active',
      notes: 'Reliable for computer parts',
    },
    {
      id: 9,
      supplierName: 'BrightFuture IT',
      location: 'Antipolo',
      email: 'team@brightfutureit.com',
      contactPerson: 'Ivan Garcia',
      phone: '0917-100-1009',
      productsSupplied: ['Networking Devices', 'Routers'],
      status: 'Active',
      notes: 'Networking products only',
    },
    {
      id: 10,
      supplierName: 'Summit Tech Partners',
      location: 'Caloocan',
      email: 'partners@summittech.com',
      contactPerson: 'Julia Ramos',
      phone: '0917-100-1010',
      productsSupplied: ['Desktops', 'UPS', 'Cables'],
      status: 'Active',
      notes: 'Handles bulk orders',
    },
  ];

  getSuppliers(): Supplier[] {
    return this.suppliers;
  }

  getSupplierById(id: number): Supplier | undefined {
    return this.suppliers.find((supplier) => supplier.id === id);
  }

  updateSupplier(updatedSupplier: Supplier): void {
    const index = this.suppliers.findIndex(
      (supplier) => supplier.id === updatedSupplier.id,
    );

    if (index !== -1) {
      this.suppliers[index] = {
        ...updatedSupplier,
        productsSupplied: [...updatedSupplier.productsSupplied],
      };
    }
  }
}
