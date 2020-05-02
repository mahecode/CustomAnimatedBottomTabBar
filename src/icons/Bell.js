import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Bell(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M11.998 21.5A2.5 2.5 0 0014.29 18H9.706a2.5 2.5 0 002.292 3.5z"
        stroke="#262F56"
        strokeWidth={1.8}
      />
      <Path
        d="M12 3c-3.59 0-6.5 3.41-6.5 7v3.333c0 1.05-.494 2.037-1.333 2.667-.855.64-.401 2 .666 2h14.334c1.067 0 1.52-1.36.666-2a3.333 3.333 0 01-1.333-2.667V10c0-3.59-2.91-7-6.5-7z"
        stroke="#262F56"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Bell;
