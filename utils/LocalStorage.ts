"use client";
class LocalStorage {
  static setItem(
    name: string,
    value: string,
    json?: boolean | undefined
  ): string {
    if (json) {
      localStorage.setItem(name, JSON.stringify(value));
      return name;
    }
    localStorage.setItem(name, value);
    return name;
  }

  static getItem(name: string, json?: boolean | undefined) {
    if (json) return JSON.parse(localStorage.getItem(name) || "");
    return localStorage.getItem(name);
  }
}

export default LocalStorage;
