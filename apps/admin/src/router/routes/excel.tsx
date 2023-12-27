import { lazy } from 'react';

import { LazyLoad } from '@/components/LazyLoad';

import { LayoutGuard } from '../guard';

import type { RouteObject } from '../types';

// excel module page
const ExcelRoute: RouteObject = {
  path: '/excel',
  element: <LayoutGuard />,
  meta: {
    title: 'Excel',
    icon: 'excel',
    orderNo: 10,
  },
  children: [
    {
      path: 'export-excel',
      element: LazyLoad(lazy(() => import('@/views/excel/export-excel'))),
      meta: {
        title: '导出Excel',
        key: 'exportExcel',
      },
    },
    {
      path: 'import-excel',
      element: LazyLoad(lazy(() => import('@/views/excel/import-excel'))),
      meta: {
        title: '导入Excel',
        key: 'importExcel',
      },
    },
  ],
};

export default ExcelRoute;