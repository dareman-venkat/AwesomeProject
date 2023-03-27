import React , {useState} from "react";

export const AuthContext = React.createContext();

export default AuthProvider =  ({childern}) => {
    const [isLoggedIn,setIsLoggedin] = useState(false);
    return(
        <AuthContext.Provider value={{isLoggedIn,setIsLoggedin}}>
            {childern}
        </AuthContext.Provider>
    )
}
