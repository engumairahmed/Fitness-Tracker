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
  
  export interface Progress {
    _id?: string;
    bmi:number;
    bodyMeasurements?: {
      weight?: number;
      weightUnit?: string;
      chest?: number;
      chestUnit?: string;
      waist?: number;
      waistUnit?: string;
    };
    createdAt: string;
    performanceMetrics?: {
      runTime?: number;
      runTimeUnit?: string;
      liftingWeight?: number;
      liftingWeightUnit?: string;
    };
  }

export type UnitType = "kg" | "lbs" | "cm" | "ft-in";