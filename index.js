'use strict';

const foregroundColor = '#c9cacc';
const backgroundColor = '#2e3440';
const black = '#252525';
const red = '#e6445b';
const green = '#2dcc70';
const yellow = '#f4e03f';
const blue = '#00a9e8';
const magenta = '#d480aa';
const cyan = '#5ac8fa';
const white = '#fff';

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: black,
    cursorColor: '#f5f5f5',
    cursorShape: 'BEAM',
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack: foregroundColor,
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: '#eee'
    },
    css: `
    * {
      text-rendering: optimizeLegibility !important;
    }

    .hyper_main {
      border: transparent !important;
    }
    .header_header {
      top: 0 !important;
      right: 0 !important;
      left: 0 !important;
      background-color: ${backgroundColor} !important;
    }
    .tabs_list,
    .tab_tab {
      border: 0 !important;
    }
    .tab_first {
      margin-left: 0;
      border: 0 !important;
    }
    .tab_tab {
      color: ${foregroundColor} !important;
      transition: color 300ms ease;
    }
    .tab_tab::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 0;
      height: 1px;
      border: 0 solid transparent;
      transition: all 350ms ease;
    }
    .tab_tab::after,
    .tab_tab.tab_active::after {
      left: 0;
      border-bottom: 1px solid ${green};
    }
    .tab_tab:hover:after,
    .tab_tab.tab_active:after {
      color: ${white} !important;
      font-weight: 600;
      font-style: normal;
      width: 100%;
    }
    .footer_footer {
      border-top: 1px dashed ${green};
      background-color: #1d1d1d !important;
      transition: opacity 350ms ease !important;
    }
    .footer_footer:hover {
      opacity: .65 !important;
    }
    ${config.css || ''}`
  })
}
