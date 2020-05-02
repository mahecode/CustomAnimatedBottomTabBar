import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Bag(props) {
  return (
    <Svg width={22} height={20} viewBox="0 0 22 20" fill="none" {...props}>
      <Path
        d="M21 12V7a2 2 0 00-2-2h-4m6 7v5a2 2 0 01-2 2H3a2 2 0 01-2-2v-5m20 0h-6M1 12V7a2 2 0 012-2h4m-6 7h6m0 0v-2m0 2v2m0-2h8m0 0v-2m0 2v2m0-9V3a2 2 0 00-2-2H9a2 2 0 00-2 2v2m8 0H7"
        stroke="#262F56"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Bag;
