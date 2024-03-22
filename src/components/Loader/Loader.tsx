import { RotatingSquare } from 'react-loader-spinner';

export const Loader = () => (
  <RotatingSquare
    visible={true}
    height="100"
    width="100"
    color="#03a457"
    ariaLabel="rotating-square-loading"
    wrapperStyle={{
      justifyContent: 'center',
    }}
    wrapperClass=""
  />
);
