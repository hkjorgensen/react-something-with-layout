import {
  oneOf,
  oneOfType,
  string,
  bool,
  number,
  object,
  func,
  shape,
} from 'prop-types'
import {
  SPACE_BETWEEN,
  START,
  CENTER,
  END,
  TOP,
  BOTTOM,
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
  boxStyle: null,
  scroll: null,
  onScroll: null,
}

export const propTypes = {
  size: oneOfType([oneOf([FIT]), number]),
  gap: number,
  config: object,
  justify: oneOf([SPACE_BETWEEN, START, CENTER, END]),
  align: oneOf([TOP, CENTER, BOTTOM]),
  relative: bool,
  paddingStart: number,
  paddingEnd: number,
  paddingTop: number,
  paddingBottom: number,
  boxStyle: shape({
    backgroundColor: string,
    backgroundImage: string,
    backgroundPosition: string,
    backgroundSize: string,
    backgroundRepeat: string,
    backgroundOrigin: string,
    backgroundClip: string,
    backgroundAttachment: string,
    borderRadius: string,
    borderTopStartRadius: string,
    borderTopEndRadius: string,
    borderBottomStartRadius: string,
    borderBottomEndRadius: string,
    border: string,
    borderTop: string,
    borderBottom: string,
    borderStart: string,
    borderEnd: string,
    outline: string,
    boxShadow: string,
  }),
  scroll: oneOf([BOTH, VERTICAL, HORIZONTAL]),
  onScroll: func,
}
