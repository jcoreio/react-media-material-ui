# react-media-material-ui

[![Build Status](https://travis-ci.org/jcoreio/react-media-material-ui.svg?branch=master)](https://travis-ci.org/jcoreio/react-media-material-ui)
[![Coverage Status](https://codecov.io/gh/jcoreio/react-media-material-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/jcoreio/react-media-material-ui)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

An easy way to use breakpoints from your material-ui theme with
(`react-media`)[https://github.com/ReactTraining/react-media]

## Installation

```sh
npm install --save @material-ui/core react-media react-media-material-ui
```

## Example

The following component will only render if the screen width is at least
`theme.breakpoints.values.sm` (from your Material-UI theme).
```js
import BreakpointMedia from 'react-media-material-ui/BreakpointMedia'

const HideOnMobile = ({children}) => (
  <BreakpointMedia min="sm">
    {children}
  </BreakpointMedia>
)
```

## PropTypes

### `min` (`'xs' | 'sm' | 'md' | 'lg' | 'xl'`)

If given, will include `minWidth: theme.breakpoints.up(props.min)` in the
`query` prop to `react-media`.

### `max` (`'xs' | 'sm' | 'md' | 'lg' | 'xl'`)

If given, will include `maxWidth: theme.breakpoints.down(props.max)` in
the `query` prop to `react-media`.

### `children` (`((matches: boolean) => ?React.Node) | React.Node`)

The `children` prop for `Media` as specified by `react-media`.

### `render` (`() => React.Node`)

The `render` prop for `Media` as specified by `react-media`.
