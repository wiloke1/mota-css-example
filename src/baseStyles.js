exports.baseStyles = `
*,
*:before,
*:after {
  box-sizing: border-box;
}


body {
  margin: 0;
  padding: 0;
  font-family: var(--font-primary);
  background-color: var(--color-light);
  color: var(--color-gray7);
  line-height: 1.5;
  font-size: 14px;
}

:root {
  --color-primary: #FA5654;
  --rgb-color-primary: 250, 86, 84;
  --color-secondary: #3540df;
  --rgb-color-secondary: 53, 64, 223;
  --color-tertiary: #2AB885;
  --rgb-color-tertiary: 42, 184, 133;
  --color-quaternary: #FBC473;
  --rgb-color-quaternary: 251, 196, 115;
  --color-dark: #000000;
  --rgb-color-dark: 0, 0, 0;
  --color-gray9: #000000;
  --rgb-color-gray9: 0, 0, 0;
  --color-gray8: #484848;
  --rgb-color-gray8: 72, 72, 72;
  --color-gray7: #5A5A5A;
  --rgb-color-gray7: 90, 90, 90;
  --color-gray6: #6F6F6F;
  --rgb-color-gray6: 111, 111, 111;
  --color-gray5: #828282;
  --rgb-color-gray5: 130, 130, 130;
  --color-gray4: #969696;
  --rgb-color-gray4: 150, 150, 150;
  --color-gray3: #BDBDBD;
  --rgb-color-gray3: 189, 189, 189;
  --color-gray2: #e0e0e0;
  --rgb-color-gray2: 224, 224, 224;
  --color-gray1: #E8E8E8;
  --rgb-color-gray1: 232, 232, 232;
  --color-light: #ffffff;
  --rgb-color-light: 255, 255, 255;
  --color-primary-freeze: #FA5654;
  --rgb-color-primary-freeze: 250, 86, 84;
  --color-secondary-freeze: #3540df;
  --rgb-color-secondary-freeze: 53, 64, 223;
  --color-tertiary-freeze: #2AB885;
  --rgb-color-tertiary-freeze: 42, 184, 133;
  --color-quaternary-freeze: #FBC473;
  --rgb-color-quaternary-freeze: 251, 196, 115;
  --color-dark-freeze: #000000;
  --rgb-color-dark-freeze: 0, 0, 0;
  --color-gray9-freeze: #000000;
  --rgb-color-gray9-freeze: 0, 0, 0;
  --color-gray8-freeze: #484848;
  --rgb-color-gray8-freeze: 72, 72, 72;
  --color-gray7-freeze: #5A5A5A;
  --rgb-color-gray7-freeze: 90, 90, 90;
  --color-gray6-freeze: #6F6F6F;
  --rgb-color-gray6-freeze: 111, 111, 111;
  --color-gray5-freeze: #828282;
  --rgb-color-gray5-freeze: 130, 130, 130;
  --color-gray4-freeze: #969696;
  --rgb-color-gray4-freeze: 150, 150, 150;
  --color-gray3-freeze: #BDBDBD;
  --rgb-color-gray3-freeze: 189, 189, 189;
  --color-gray2-freeze: #e0e0e0;
  --rgb-color-gray2-freeze: 224, 224, 224;
  --color-gray1-freeze: #E8E8E8;
  --rgb-color-gray1-freeze: 232, 232, 232;
  --color-light-freeze: #ffffff;
  --rgb-color-light-freeze: 255, 255, 255;
  --font-primary: Arial, Helvetica, sans-serif;
  --font-secondary: Arial, Helvetica, sans-serif;
  --font-tertiary: Playfair Display;
  --font-quaternary: Roboto Mono;
}

h1 {
  font-size: 40px;
}

h2 {
  font-size: 30px;
}

h3 {
  font-size: 26px;
}

h4 {
  font-size: 22px;
}

h5 {
  font-size: 18px;
}

h6 {
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6 {
  color: var(--color-gray9);
  margin: 0;
  margin-bottom: 5px;
  line-height: 1.4;
  font-weight: 600;
  font-family: var(--font-secondary);
}

p {
  margin: 0;
}

a:hover {
  color: var(--color-primary);
  * {
    color: var(--color-primary);
  }
}

img {
  max-width: 100%;
  border: 0;
  vertical-align: middle;
}

img:not([src]) {
  visibility: hidden;
}

/* Fixes Firefox anomaly during image load */
@-moz-document url-prefix() {
  img:-moz-loading {
    visibility: hidden;
  }
}

.veda-section {
  position: relative;
  z-index: 1;
  padding: 60px 0;
  background-size: cover;
  background-position: 50% 50%;
}

.core-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  pointer-events: none;
}

.core-image-cover {
  position: relative;
  background-size: cover;
  background-position: 50% 50%;
  &:before {
    content: '';
    display: block;
    padding-top: calc((1 / (var(--aspect-ratio, 1.33))) * 100%);
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.core-embed-responsive {
  position: relative;
  display: block;
  height: 0;
  padding: 0;
  overflow: hidden;
  padding-bottom: calc((1 / (var(--aspect-ratio, 1.777))) * 100%);
  .core-embed-responsive__item,
  iframe,
  embed,
  object {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
}

.animate__animated-infinite {
  animation-iteration-count: infinite;
}

.core-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  text-decoration: none;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  transition: all 0.3s;
  padding: 13px 20px;
  background-clip: padding-box;
  background-color: var(--color-gray2);
  color: var(--color-gray9);
  &:hover {
    opacity: 0.8;
    color: var(--color-gray9);
  }
}

.core-btn--sm {
  padding: 6px 15px;
  font-size: 14px;
}

.core-btn--lg {
  padding: 14px 30px;
}

.core-btn--primary {
  background-color: var(--color-primary);
  color: var(--color-light);
  &:hover {
    background-color: var(--color-primary);
    color: var(--color-light);
  }
}

.core-btn--secondary {
  background-color: var(--color-secondary);
  color: var(--color-light);
  &:hover {
    background-color: var(--color-secondary);
    color: var(--color-light);
  }
}

.core-btn--tertiary {
  background-color: var(--color-tertiary);
  color: var(--color-light);
  &:hover {
    background-color: var(--color-tertiary);
    color: var(--color-light);
  }
}

.core-btn--quaternary {
  background-color: var(--color-quaternary);
  color: var(--color-light);
  &:hover {
    background-color: var(--color-quaternary);
    color: var(--color-light);
  }
}

.core-btn--border {
  border: 1px solid var(--color-gray2);
  background-color: transparent;
  color: var(--color-gray9);
  &:hover {
    background-color: transparent;
  }

  &.core-btn--primary {
    border-color: var(--color-primary);
    &:hover {
      border-color: var(--color-primary);
      color: var(--color-primary);
    }
  }

  &.core-btn--secondary {
    border-color: var(--color-secondary);
    &:hover {
      border-color: var(--color-secondary);
      color: var(--color-secondary);
    }
  }


  &.core-btn--tertiary {
    border-color: var(--color-tertiary);
    &:hover {
      border-color: var(--color-tertiary);
      color: var(--color-tertiary);
    }
  }

  &.core-btn--quaternary {
    border-color: var(--color-quaternary);
    &:hover {
      border-color: var(--color-quaternary);
      color: var(--color-quaternary);
    }
  }
}
`;
