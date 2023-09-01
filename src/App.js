import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import StoreProvider from "./context/AppProvider";
import { Toaster } from "react-hot-toast";
import NavigationContainer from "./navigation";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <StoreProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavigationContainer/>
        </ThemeProvider>
        <Toaster
          toastOptions={{
            duration: 5000,
            style: {
              borderRadius: '7px',
              background: 'black',
              color: '#fff',
            },
          }}
        />
      </ColorModeContext.Provider>
    </StoreProvider>
  );
}

export default App;
