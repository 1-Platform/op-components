import '../dist/opc-header';

export default {
    title: 'Header',
}

export const opcHeader = () => `
<link rel="stylesheet" href="https://unpkg.com/@patternfly/patternfly/patternfly.css" crossorigin="anonymous">
<opc-header heading="Outage Management" id="header6" theme="default">
          <div slot="breadcrumb" id="breadcrumb6">
            <nav class="pf-c-breadcrumb" aria-label="breadcrumb">
              <ol class="pf-c-breadcrumb__list">
                <li class="pf-c-breadcrumb__item">
                  <span class="pf-c-breadcrumb__item-divider">
                    <i class="fas fa-angle-right" aria-hidden="true"></i>
                  </span>
                  <a href="#" class="pf-c-breadcrumb__link">Section home</a>
                </li>
                <li class="pf-c-breadcrumb__item">
                  <span class="pf-c-breadcrumb__item-divider">
                    <i class="fas fa-angle-right" aria-hidden="true"></i>
                  </span>
                  <a href="#" class="pf-c-breadcrumb__link">Section title</a>
                </li>
                <li class="pf-c-breadcrumb__item">
                  <span class="pf-c-breadcrumb__item-divider">
                    <i class="fas fa-angle-right" aria-hidden="true"></i>
                  </span>
                  <a href="#" class="pf-c-breadcrumb__link">Section title</a>
                </li>
                <li class="pf-c-breadcrumb__item">
                  <span class="pf-c-breadcrumb__item-divider">
                    <i class="fas fa-angle-right" aria-hidden="true"></i>
                  </span>
                  <a href="#" class="pf-c-breadcrumb__link pf-m-current" aria-current="page">Section landing</a>
                </li>
              </ol>
            </nav>
          </div>
          <div slot="links" id="links6">
            <a class="pf-c-button pf-m-link" href="" style="--pf-c-button--m-link--Color: var(--opc-header__Links--Color);--pf-c-button--FontSize: var(--pf-global--FontSize--sm);">
              <span class="pf-c-button__icon pf-m-start">
                <i class="fas fa-play-circle" aria-hidden="true"></i>
              </span>Video Guide
            </a>
            <a class="pf-c-button pf-m-link" href="" style="--pf-c-button--m-link--Color: var(--opc-header__Links--Color);--pf-c-button--FontSize: var(--pf-global--FontSize--sm);">
              <span class="pf-c-button__icon pf-m-start">
                <i class="fas fa-question-circle-o" aria-hidden="true"></i>
              </span>FAQs
            </a>
            <a class="pf-c-button pf-m-link" href="" style="--pf-c-button--m-link--Color: var(--opc-header__Links--Color);--pf-c-button--FontSize: var(--pf-global--FontSize--sm);">
              <span class="pf-c-button__icon pf-m-start">
                <i class="fas fa-file-o" aria-hidden="true"></i>
              </span>Documentation
            </a>
          </div>
        </opc-header>
`;