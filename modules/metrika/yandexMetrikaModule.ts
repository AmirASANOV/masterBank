type ymMethodProps = {
  id: number;
  methodName: 'hit' | 'reachGoal' | 'init';
  /* eslint-disable */
  args: any[];
};

const isBrowser = typeof document !== 'undefined';

const ym = ({ id, methodName, args }: ymMethodProps) => {
  if (
    isBrowser &&
    // @ts-expect-error could be undefined
    typeof window[`yaCounter${id}`] !== 'undefined'
  ) {
    // @ts-expect-error if no undefined run
    window[`yaCounter${id}`][methodName](...args);
  }
};

export default ym;
