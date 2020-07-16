'use strict';

const { resolve } = require('path');

const BASEPATH = resolve(__dirname, '..', '..');
const SRCPATH = resolve(BASEPATH, 'src');
const APPPATH = resolve(SRCPATH, 'app');

/**
 * development 모드인지 확인
 */
exports.IS_DEV = process.env.NODE_ENV === 'development';

/**
 * 로컬 테스트 여부
 */
exports.IS_LOCAL = process.env.IS_LOCAL || false;

/**
 * 빌드환경
 */
exports.BUILD = {
  // dev server 로드시 public path
  PUBLIC_PATH: '/dist/',
  // 빌드될 path
  BUILD_PATH: resolve(BASEPATH, 'dist'),
  // filename suffix
  FILENAME_SUFFIX: exports.IS_DEV ? '.bundle.js' : '.min.js',
  // webpack config index
  CONFIG_INDEX: resolve(BASEPATH, 'webpack.config'),
};

/**
 * path 환경 설정
 */
exports.PATHS = {
  BASE_DIR: BASEPATH,
  SRC_DIR: SRCPATH,
  APP_DIR: APPPATH,
};
