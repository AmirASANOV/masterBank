import { FC, useEffect } from 'react';

interface AllRejectedType {}
const AllRejectedDecision: FC<AllRejectedType> = () => {
  useEffect(() => {
    window.location.replace(`https://microzaim.org${window.location.search}`);
  }, []);

  return null;
};

export default AllRejectedDecision;
