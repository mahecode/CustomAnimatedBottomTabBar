import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Plus(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M10 1v9m0 9v-9m0 0h9m-9 0H1"
        stroke="#262F56"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Plus;
