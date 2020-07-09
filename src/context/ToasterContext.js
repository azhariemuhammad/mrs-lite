import React, { useState } from 'react';
import { node } from 'prop-types';

export const ToasterContext = React.createContext();

export const ToasterProvider = ({ children }) => {
    const [open, setOpen] = useState(false);

    return (
        <ToasterContext.Provider value={{ open, setOpen }}>
            {children}
        </ToasterContext.Provider>
    );
};

ToasterProvider.propTypes = {
    children: node.isRequired
};
