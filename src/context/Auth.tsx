import { createContext, useState, FC, ReactNode, useCallback } from 'react';

type AuthContext = {
  token: null | string;
  setToken: (v: string | null) => void;
};

const initialState: AuthContext = {
  token: null,
  setToken: () => {},
};

export const Auth = createContext<AuthContext>(initialState);

type Props = {
  children: ReactNode;
};
export const AuthProvider: FC<Props> = ({ children, ...rest }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token')
  );

  const handleSetToken = useCallback((string: string | null) => {
    if (string) {
      localStorage.setItem('token', string);
    } else {
      localStorage.removeItem('token');
    }
    setToken(string);
  }, []);
  return (
    <Auth.Provider {...rest} value={{ token, setToken: handleSetToken }}>
      {children}
    </Auth.Provider>
  );
};
