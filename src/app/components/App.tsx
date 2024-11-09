import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { Auth } from 'pages/auth';
import { Home } from 'pages/home';
import { Leaderboard } from 'pages/leaderboard'
import { Question } from 'pages/question'
import { Settings } from 'pages/settings'
import { Create } from 'pages/create'
import { Layout } from 'app/components';
import { selectIsAuth } from 'entities/authUsers/model/selectors';

// JSON server auth issues resolve: 
// https://stackblitz.com/edit/stackoverflow-questions-78271234?file=package.json

interface AuthWrapper {
  children: React.ReactNode;
  value: boolean;
}

const AuthWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuth);
  const hasAuthKey = localStorage.getItem('access');

  return isAuthenticated && hasAuthKey
    ? ( <>{children}</> ) 
    : ( <Navigate to="/" replace /> );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route
        element={
          <AuthWrapper>
            <Layout />
          </AuthWrapper>
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="/questions/:question_id" element={<Question />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/create" element={<Create />} />
      </Route>
    </Routes>
  );
}
export default App