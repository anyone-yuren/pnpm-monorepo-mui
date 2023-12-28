import { type LazyExoticComponent, type ReactNode, Suspense, FC } from 'react';

import Loading from './Loading';

/**
 * @description 路由懒加载
 * @param {Element} Component 需要访问的组件
 * @returns element
 */
const LazyLoad: FC<{ Component: LazyExoticComponent<React.FC<{}>> }> = ({ Component }) => {
  console.log(Component);

  return (
    <>
      123123
      <Suspense fallback={<Loading />}>
        <Component />
      </Suspense>
    </>
  );
};

export default LazyLoad;
