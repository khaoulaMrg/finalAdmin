export interface Post {
    id: number;
    name: string;
    content: string;
    postedBy: string;
    date: Date;
    categoryId: number;
    categoryName: string; // Changez le type si nécessaire
    // Changez le type si nécessaire
    img: string; // Si l'image est stockée sous forme de chaîne Base64
    picPath: string;
    approved: boolean;
    posted: boolean;
    expirationMinutes: number;
  }
  