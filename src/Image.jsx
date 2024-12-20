import React from 'react';
import styled from 'styled-components/native';
import { Image as RNImage } from 'react-native';

const StyledImage = styled(RNImage)`
  width: ${({ width }) => width || '100px'};
  height: ${({ height }) => height || '100px'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '20px'};
`;


const ImageComponent = ({ source, width, height, marginBottom }) => {
  return <StyledImage source={source} width={width} height={height} marginBottom={marginBottom} />;
};

export default ImageComponent;
