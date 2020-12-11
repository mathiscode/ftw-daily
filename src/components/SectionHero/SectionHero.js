import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import { NamedLink } from '../../components';

import css from './SectionHero.module.css';

const SectionHero = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  const search = (
    <form className={`${css.searchForm} form-inline d-flex justify-content-center md-form form-sm mt-0`}>
      <i className={`${css.searchInputIcon} fas fa-search`} aria-hidden="true"></i>
      <input className={`${css.searchInput} form-control form-control-sm ml-3 w-75`} autoFocus type="search" placeholder="Search for items" aria-label="Search" />
    </form>
  );

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        {/* <h1 className={css.heroMainTitle}>
          <FormattedMessage id="SectionHero.title" />
        </h1>
        <h2 className={css.heroSubTitle}>
          <FormattedMessage id="SectionHero.subTitle" />
        </h2> */}

        {search}

        {/* <NamedLink
          name="SearchPage"
          to={{
            search:
              'address=Finland&bounds=70.0922932%2C31.5870999%2C59.693623%2C20.456500199999937',
          }}
          className={css.heroButton}
        >
          <FormattedMessage id="SectionHero.browseButton" />
        </NamedLink> */}
      </div>
    </div>
  );
};

SectionHero.defaultProps = { rootClassName: null, className: null };

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHero;
