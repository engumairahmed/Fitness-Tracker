import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';
import * as jwt from 'jwt-decode';
import { googleLogout } from '@react-oauth/google';

interface DecodedToken {
  id: string;
  role: string;
  name: string;
  email: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  authToken: string | null;
  getUser: () => DecodedToken | null;
  getUserId: () => string | null;
  getEmail: () => string | null;
  getRole: () => string | null;
  getName: () => string | null;
  login: (userToken: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

  const [authToken, setToken] = useState<string | null>(null);
  const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null);
  

  useEffect(() => {
    const token = Cookies.get('authToken');
    if (token) {
      try {
        const decodedEffectToken: DecodedToken = jwt.jwtDecode(token);
        setDecodedToken(decodedEffectToken);
        setToken(token);
      } catch (error) {
        Cookies.remove('authToken');
        setDecodedToken(null);
        setToken(null);
      }
    } else {
      Cookies.remove('authToken');
      setDecodedToken(null);
      setToken(null);
    }
  }, []);

  const getUserId = (): string | null => {
    const token = Cookies.get('authToken');
    if (token) {
      const decoded: DecodedToken = jwt.jwtDecode(token);
      return decoded.id;
    }
    return null;
  };

  const getRole = (): string | null => {
    const token = Cookies.get('authToken');
    if (token) {
      const decoded: DecodedToken = jwt.jwtDecode(token);
      return decoded.role;
    }
    return null;
  };

  const getName = (): string | null => {
    const token = Cookies.get('authToken');
    if (token) {
      const decoded: DecodedToken = jwt.jwtDecode(token);
      return decoded.name;
    }
    return null;
  };

  const getEmail = (): string | null => {
    const token = Cookies.get('authToken');
    if (token) {
      const decoded: DecodedToken = jwt.jwtDecode(token);
      return decoded.email;
    }
    return null;
  };

  const getUser = (): DecodedToken | null => {
    const token = Cookies.get('authToken');
    if (token) {
      const decoded: DecodedToken = jwt.jwtDecode(token);
      return decoded;
    }
    return null;
  };

  const login = (userToken: string): void => {
    const decoded: DecodedToken = jwt.jwtDecode(userToken);
    setDecodedToken(decoded);
    setToken(userToken);
    Cookies.set('authToken', userToken);
  };

  const logout = (): void => {
    setDecodedToken(null);
    setToken(null);
    googleLogout();
    Cookies.remove('authToken');

  };

  const isAuthenticated = !!authToken;

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authToken,
        getUser,
        getUserId,
        getEmail,
        getRole,
        getName,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
