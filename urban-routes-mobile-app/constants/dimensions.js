import { Dimensions } from 'react-native';

export default function Dim(type = 's') {
    return Dimensions.get(type === 'w' ? 'window' : 'screen');
}


