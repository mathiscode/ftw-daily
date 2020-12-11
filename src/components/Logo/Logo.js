import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import config from '../../config';
import IconLogo from './IconLogo';
import LogoImage from './vintlo-logo2.png';
import css from './Logo.module.css';

const Logo = props => {
  const { className, format, ...rest } = props;
  const mobileClasses = classNames(css.logoMobile, className);

  return <img className={className} src={LogoImage} alt={config.siteTitle} {...rest} />;

  // if (format !== 'desktop') return <img className={className} src={LogoImage} alt={config.siteTitle} {...rest} />;

  // return (
  //   <div className={css.logoTextWrapper}>
  //     <h4>VintLo</h4>
  //     <p>Vintage Jewelry. Lo prices</p>
  //   </div>
  // )

  // if (format === 'desktop') {
  //   return <img className={className} src={LogoImage} alt={config.siteTitle} {...rest} />;
  // }

  // return <IconLogo className={mobileClasses} {...rest} />;
};

const { oneOf, string } = PropTypes;

Logo.defaultProps = {
  className: null,
  format: 'desktop',
};

Logo.propTypes = {
  className: string,
  format: oneOf(['desktop', 'mobile']),
};

export default Logo;
