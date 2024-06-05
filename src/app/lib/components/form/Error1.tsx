import { FunctionComponent } from 'react';

interface Error1Props {
  error: string | undefined;
}

const Error1: FunctionComponent<Error1Props> = ({ error }) => {
  return (
    <div className="text-xs font-semibold text-rose-700 py-2">{error}</div>
  );
};

export default Error1;
