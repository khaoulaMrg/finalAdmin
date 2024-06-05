export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    userRole: UserRole; // Assurez-vous que UserRole est correctement importé
  }
  export enum UserRole {
    ADMIN = 'ADMIN',
    CUSTOMER = 'CUSTOMER',
    // Ajoutez d'autres rôles au besoin
  }