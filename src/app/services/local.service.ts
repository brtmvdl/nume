import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  retrieveRaw (key: string): string {
    return window.localStorage.getItem(key)
  }

  retrieve (key: string): string {
    return JSON.parse(this.retrieveRaw(key))
  }

  setRaw (key: string, value: string): void {
    window.localStorage.setItem(key, value)
  }

  set (key: string, value: any = ''): void {
    this.setRaw(key, JSON.stringify(value))
  }
}
