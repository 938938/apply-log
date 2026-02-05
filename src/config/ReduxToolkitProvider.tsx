'use client';

import { store } from '@/utils/redux/store';
import { Provider } from 'react-redux';

export default function ReduxToolkitProvider({
  children,
}: React.PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}
