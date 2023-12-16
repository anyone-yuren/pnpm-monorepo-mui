import { Divider } from 'antd';

import { DocLink, FullScreen, GithubLink, SlideTheme, UserDropdown } from './components';
import moduleStyle from './index.module.less';

export default function LayoutFeature() {
  const prefixCls = 'layout_feature';

  return (
    <div className={moduleStyle[prefixCls]}>
      <div className={moduleStyle[`${prefixCls}-main`]}>
        {/* <AppSearch /> */}
        <FullScreen />
        {/* <AppLocalePicker /> */}
        <DocLink />
        <GithubLink />
        <SlideTheme />
      </div>
      {/* <Divider type="vertical" className={moduleStyle[`${prefixCls}-divider`]} /> */}
      <UserDropdown />
    </div>
  );
}