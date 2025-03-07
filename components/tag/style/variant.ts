import { useToken } from '../../theme/internal';

export type TagVariant = 'clear' | 'default';

export default (variant: TagVariant) => {
  const token = useToken()[1];
  return variant === 'clear' ? token.colorBgMask : null;
};
