import React from "react";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext"

function App() {
  return (
    <div>
      {/* componentin arasına da koyabiliriz props olarak böyle de gönderebiliriz */}
      {/* <AuthContextProvider children={<AppRouter />} /> */}
      <AuthContextProvider>
        {/* Aslında bu <Approuter/> props.children konumunda */}
        {/* Providerda props alıp arada da props.children göster demezsek bu görünmez  */}
        {/* Providerdaki value'yi göstermek için, arada props.value kullanabiliriz */}
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
}

export default App;
