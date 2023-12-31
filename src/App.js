import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Dashboard from "./components/dashboard/Dashboard";
import CPFMtable from "./components/dashboard/CPFMtable";
import DetailTable from "./components/dashboard/DetailTable";
import TablesTab from "./components/dashboard/TablesTab";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { 
        path: 'dashboard',
        // index: true,
        element: <Dashboard />,
        children: [
          { index: true, element: <CPFMtable /> },
          // { path: 'detail', element: <DetailTable /> },
          { path: 'detail', element: <TablesTab /> },
        ],
      },
    ]
  },
  ,
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

const theme = {
  colors: {
    text: '#0000',
    bg: '#F2FAFF',
    primary: '#1C79BB',
    secondary: '#F2FAFF',
    accent: '#056CB4',
    accent1: '#9ccff5',
    accent2: '#FF0000',
  },
  media: {
    mobile: '768px',
    tab: '998px',
  }
}