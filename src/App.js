import React from "react";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext"

function App() {
  return (
    <div>
      {/* componentin arasına da koyabiliriz props olarak böyle de gönderebiliriz */}
      {/* <AuthContextProvider children={<AppRouter />} /> */}
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
}

export default App;
