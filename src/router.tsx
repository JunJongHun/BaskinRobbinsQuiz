import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout';
import MainPage from './pages/MainPage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: 'quiz/:number',
        element: <QuizPage />,
      },
      {
        path: 'result',
        element: <ResultPage />,
      },
    ],
  },
]);
