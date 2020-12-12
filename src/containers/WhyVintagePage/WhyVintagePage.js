import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './WhyVintagePage.module.css';

const WhyVintagePage = () => {

  // prettier-ignore
  return (
    <StaticPage
      title="Why Vintage?"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'WhyVintagePage',
        description: 'Why Vintage?',
        name: 'WhyVintagePage',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <div className="container">
            <h1 className={css.pageTitle}>Why Vintage?</h1>

            <div className={css.contentWrapper}>
              <div className={css.contentSide}>
                <p>Lorem ipsum dolor sit amet</p>
              </div>

              <div className={css.contentMain}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt explicabo hic perspiciatis, placeat unde est voluptatem voluptatum esse sit ab mollitia quisquam soluta ea expedita rem fuga fugit fugiat aliquid.
              </div>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default WhyVintagePage;
