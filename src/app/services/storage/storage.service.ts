import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  saveToStorage(key: string, value: any) {
    if (typeof value != 'string') {
      value = JSON.stringify(value);
    }

    localStorage.setItem(key, value);
  }
}
