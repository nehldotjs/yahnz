import { createContext } from "react";


const assetProvider = createContext();
const assetData = (props) => {
    return (
        <assetProvider.Provider value={"testIhellomage"}>
            {props.children}
        </assetProvider.Provider>
    )
}
export { assetProvider, assetData };

