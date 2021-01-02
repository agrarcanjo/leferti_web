import React from 'react';
import { View } from 'react-native';

interface If{
    conditional: boolean,
    children: React.ReactNode
}

const IfComponent = (props: If) => {
    return (props.conditional ? props.children : <View />)
}

export default IfComponent;