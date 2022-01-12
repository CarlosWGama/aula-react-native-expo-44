import * as React from 'react';

export const AutenticacaoContext = React.createContext<{usuario?:string, setUsuario?:any}>({})

export function AutenticacaoProvider (props: any) {

    const [ usuario, setUsuario ] = React.useState('');  

    return (
        <AutenticacaoContext.Provider value={{usuario, setUsuario}}>
            {props.children}
        </AutenticacaoContext.Provider>
     );
}

export const useAutenticacaoContext = () => React.useContext(AutenticacaoContext);