import { RootState } from '../../services/store';
import { Segments } from '../interfaces';

function InjectUseSelect(segment: Segments) {
  return function (target: any) {
    target.prototype.useSelect = function (asHook: boolean) {
      return asHook
        ? this.getUseSelector()((store: RootState) => store[segment])
        : this.getStore()[segment];
    };
  };
}

export default InjectUseSelect;
