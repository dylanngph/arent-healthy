import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ChakraProvider from './providers/chakra-provider.tsx';
import QueryProvider from './providers/query-provider.tsx';
import RootLayout from './components/layout/root.tsx';
import { ColorModeScript } from '@chakra-ui/react'
import chakra_theme from './config/theme.ts';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path='/' element={<App/>} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider>
      <ChakraProvider>
        <ColorModeScript initialColorMode={chakra_theme.config.initialColorMode} />
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryProvider>
  </React.StrictMode>,
)
