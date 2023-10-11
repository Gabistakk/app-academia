import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export default function DataUserContext({ children }) {
    const [dataUser, setDataUser] = useState(null);

    console.log(dataUser)

    return <DataContext.Provider value={{dataUser,setDataUser}}>{children}</DataContext.Provider>;
}

export const useDataUser = () => {
    const dataContext = useContext(DataContext);
    return dataContext;
};
