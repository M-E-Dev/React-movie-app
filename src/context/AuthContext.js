import { useEffect, useState, createContext } from "react";
import { userObserver } from "../auth/firebase";

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {

  const [currentUser, setCurrentUser] = useState()
  
  // -------- // mount + update -- dizi yok her zaman çalışır
  // useEffect(() => {
  //   userObserver
  // })
  // --------- // mount + update --- dizi dolu, yükleme + değişimde çalışır, çoklu takip+
  // useEffect(() => {
  //   userObserver
  // }, [currentUser])
  // ---------// mount- dizi boş, değişen yok, tek sefer çalışır
  useEffect(() => {
    userObserver()
  }, [])

  return(
    <AuthContext.Provider value = {{currentUser}} >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider