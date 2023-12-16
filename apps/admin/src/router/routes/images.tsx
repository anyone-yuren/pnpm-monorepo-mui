import { lazy } from 'react';

import { LazyLoad } from '@/components/LazyLoad';

import { LayoutGuard } from '../guard';
import { RouteObject } from '../types';

// image module page
const ImageRoute: RouteObject = {
  path: '/image',
  element: <LayoutGuard />,
  meta: {
    title: '图片处理',
    icon: 'image',
    orderNo: 4,
  },
  children: [
    {
      path: 'image-cropper',
      element: LazyLoad(lazy(() => import('@/views/image/image-cropper'))),
      meta: {
        title: '图片裁剪',
        key: 'imageCropper',
      },
    },
    {
      path: 'image-compress',
      element: LazyLoad(lazy(() => import('@/views/blank'))),
      meta: {
        title: '图片压缩',
        key: 'imageCompress',
      },
    },
    {
      path: 'image-composition',
      element: LazyLoad(lazy(() => import('@/views/blank'))),
      meta: {
        title: '图片合成',
        key: 'imageComposition',
      },
    },
  ],
};

export default ImageRoute;
