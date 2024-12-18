export interface DecodedToken {
    id?: string;
    email?: string;
    name?: string;
    role?: string;
  }

  export interface GoogleUserProfile {
    sub: string;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
    email: string;
    email_verified: boolean;
    locale: string;
  }

  export interface UserProfile {
    name: string;
    email: string;
    contact?: string;
    gender?: string;
    dob?: string;
    picture?: string;
  }

  export interface Nutrition {
    name: string;
    calories: number;
    carbs: number;
    fats: number;
    protein: number;
    sodium: number;
    sugar: number;
    cholesterol: number;
    vitamins: { [key: string]: number };
    minerals: { [key: string]: number };
    quantity: number;
    weight: number;
  }
  
  
interface Food {
    name: string;
    calories?: number;
    fats?: number;
    protein?: number;
    carbs?: number;
    sodium?: number;
    sugar?: number;
    cholesterol?: number;
    vitamins?: string[];
    minerals?: string[];
}

 export interface State {
    meal: string;
    food: Food;
    index: number;
}