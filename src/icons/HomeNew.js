import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HomeNew(props) {
  return (
    <Svg width={22} height={20} viewBox="0 0 22 20" fill="none" {...props}>
      <Path
        d="M19 16.75v-6.62c0-1.149 0-1.723-.148-2.252a3.998 3.998 0 00-.636-1.3c-.327-.442-.78-.794-1.687-1.5l-2.6-2.022h0c-1.405-1.093-2.108-1.64-2.884-1.85a4 4 0 00-2.09 0c-.776.21-1.479.757-2.884 1.85l-2.6 2.022c-.907.706-1.36 1.058-1.687 1.5a4 4 0 00-.636 1.3C1 8.408 1 8.981 1 10.13v6.62c0 .698 0 1.047.086 1.33a2 2 0 001.333 1.334c.284.086.633.086 1.331.086h.625c.116 0 .174 0 .223-.002a2 2 0 001.9-1.9c.002-.049.002-.107.002-.223V14.5a3.5 3.5 0 117 0v2.875c0 .116 0 .174.002.223a2 2 0 001.9 1.9c.049.002.107.002.223.002h.625c.698 0 1.047 0 1.33-.086a2 2 0 001.334-1.333c.086-.284.086-.633.086-1.331z"
        stroke="#262F56"
        strokeWidth={1.8}
      />
    </Svg>
  );
}

export default HomeNew;