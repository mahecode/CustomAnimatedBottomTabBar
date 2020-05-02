import * as React from 'react';
import Svg, {Ellipse, Path} from 'react-native-svg';

function Users(props) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Ellipse cx={5} cy={5} rx={3} ry={3.5} fill="#262F56" />
      <Path
        d="M9.5 13.5c0 1.5-1.5 1-4.5 1s-4.5.5-4.5-1S2 10 5 10s4.5 2 4.5 3.5z"
        fill="#262F56"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 5c0 .873-.214 1.737-.604 2.495C9.437 8.116 10.18 8.5 11 8.5c1.657 0 3-1.567 3-3.5s-1.343-3.5-3-3.5c-.82 0-1.563.384-2.104 1.005.39.758.604 1.622.604 2.495zm3.3 9.548c1.8.076 2.7.114 2.7-1.048C15.5 12 14 10 11 10c-.55 0-1.05.067-1.5.187.967.93 1.5 2.133 1.5 3.313 0 .314-.042.662-.166 1H11c.676 0 1.276.025 1.8.048zm-4.8.031c1-.014 1.5-.213 1.5-1.079S9 11.601 8 10.883c-1 .718-1.5 1.751-1.5 2.617 0 .866.5 1.065 1.5 1.08z"
        fill="#262F56"
      />
    </Svg>
  );
}

export default Users;
