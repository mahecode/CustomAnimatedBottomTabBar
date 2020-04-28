import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Bump(props) {
  return (
    <Svg width={154} height={28} viewBox="0 0 154 28" fill="none" {...props}>
      <Path
        d="M55 11.888c-6.4 10.8-18.333 14.833-23.5 15.5h95c-1.5 0-12 0-24-15.5s-39.5-13.5-47.5 0z"
        fill="#F86967"
      />
      <Path
        d="M0 27.388h31.5c5.167-.667 17.1-4.7 23.5-15.5 8-13.5 35.5-15.5 47.5 0s22.5 15.5 24 15.5h27H0z"
        stroke="#F86967"
      />
    </Svg>
  )
}

export default Bump;
