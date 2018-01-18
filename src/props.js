import PropTypes from 'prop-types'
import {
  SPACE_BETWEEN,
  START,
  CENTER,
  END,
  BOTH,
  FIT,
  VERTICAL,
  HORIZONTAL,
} from './constants'

export const defaultProps = {
  size: 0,
  gap: null,
  config: {},
  justify: null,
  align: null,
  relative: false,
  paddingStart: null,
  paddingEnd: null,
  paddingTop: null,
  paddingBottom: null,
  backgroundColor: null,
  className: null,
  scroll: null,
  onScroll: null,
}

export const propTypes = {
  size: PropTypes.oneOfType([PropTypes.oneOf([FIT]), PropTypes.number]),
  gap: PropTypes.number,
  config: PropTypes.object,
  justify: PropTypes.oneOf([SPACE_BETWEEN, START, CENTER, END]),
  align: PropTypes.oneOf([CENTER]),
  relative: PropTypes.bool,
  paddingStart: PropTypes.number,
  paddingEnd: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  scroll: PropTypes.oneOf([BOTH, VERTICAL, HORIZONTAL]),
  onScroll: PropTypes.func,
}
