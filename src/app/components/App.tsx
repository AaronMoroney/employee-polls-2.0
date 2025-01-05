import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { Auth } from 'pages/auth';
import { Home } from 'pages/home';
import { Leaderboard } from 'pages/leaderboard';
import { Question } from 'pages/question';
import { Settings } from 'pages/settings';
import { Create } from 'pages/create';
import { Layout } from 'app/components';
import { useIsAuthState } from 'entities/authUsers/model';
import { AlertBar } from 'shared/lib/alert/ui';

// JSON server auth issues resolve:
// https://stackblitz.com/edit/stackoverflow-questions-78271234?file=package.json

interface AuthWrapper {
	children: React.ReactNode;
	value: boolean;
}

const AuthWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const { selectIsAuth } = useIsAuthState();
	const hasAuthKey = localStorage.getItem('access');

	return selectIsAuth && hasAuthKey 
		? <>{children}</> 
		: <Navigate to='/' replace />;
};

function App() {
	return (
		<>
			<AlertBar />
			<Routes>
				<Route path='/' element={<Auth />} />
				<Route element={<Layout />}>
					<Route
						path='/home'
						element={
							<AuthWrapper>
								<Home />
							</AuthWrapper>
						}
					/>
					<Route
						path='/questions/:question_id'
						element={
							<AuthWrapper>
								<Question />
							</AuthWrapper>
						}
					/>
					<Route
						path='/settings'
						element={
							<AuthWrapper>
								<Settings />
							</AuthWrapper>
						}
					/>
					<Route
						path='/leaderboard'
						element={
							<AuthWrapper>
								<Leaderboard />
							</AuthWrapper>
						}
					/>
					<Route
						path='/create'
						element={
							<AuthWrapper>
								<Create />
							</AuthWrapper>
						}
					/>
				</Route>
			</Routes>
		</>
	);
}
export default App;
