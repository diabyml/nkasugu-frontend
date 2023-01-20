import { Input } from '@chakra-ui/react';
import React from 'react';

interface Props {}

const ImagePicker: React.FC<Props> = () => {
    return <Input type="file" placeholder="choisissez image"/>
}

export default ImagePicker;