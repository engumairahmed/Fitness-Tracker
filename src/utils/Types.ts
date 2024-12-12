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