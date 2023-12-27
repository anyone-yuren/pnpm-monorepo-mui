import { lazy } from 'react';

import { LazyLoad } from '@/components/LazyLoad';

import { LayoutGuard } from '../guard';

import type { RouteObject } from '../types';

// tree module page
const TreeRoute: RouteObject = {
  path: '/tree',
  element: <LayoutGuard />,
  meta: {
    title: '树形结构',
    icon: 'tree',
    orderNo: 9,
  },
  children: [
    {
      path: 'org-tree',
      element: LazyLoad(lazy(() => import('@/views/tree/org-tree'))),
      meta: {
        title: '组织树',
        key: 'orgTree',
      },
    },
    {
      path: 'antd-tree',
      element: LazyLoad(lazy(() => import('@/views/tree/antd-tree'))),
      meta: {
        title: '控件树',
        key: 'antdTree',
      },
    },
  ],
};

export default TreeRoute;