# react-media-material-ui

[![Build Status](https://travis-ci.org/jcoreio/react-media-material-ui.svg?branch=master)](https://travis-ci.org/jcoreio/react-media-material-ui)
[![Coverage Status](https://codecov.io/gh/jcoreio/react-media-material-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/jcoreio/react-media-material-ui)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Obsolete

I'd recommend using `useMediaQuery` and `Hidden` from Material-UI now.

You can replace `BreakpointMedia` elements as follows:

```js
// MediaQuery.js
import * as React from 'react'
export const MediaQuery = ({ query, children }) => children(useMediaQuery(query))
```

```diff
// MyComponent.js
-import BreakpointMedia from 'react-media-material-ui'
+import MediaQuery from './MediaQuery'

-<BreakpointMedia max="xs">
+<MediaQuery query={theme => theme.breakpoints.down('xs')}>
  {matches => (
    <Dialog
      fullScreen={matches}
      ...
```

## Intro

An easy way to use breakpoints from your material-ui theme with
(`react-media`)[https://github.com/ReactTraining/react-media].  This is a bit
more flexible than material-ui's `Hidden` component because it allows you to
render whatever you want if the query doesn't match, rather than just hiding
the content.

This is also an especially convenient replacement for material-ui's
`withMobileDialog` HOC:

```js
<BreakpointMedia max="xs">
  {matches => (
    <Dialog
      fullScreen={matches}
      ...
```

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

A function whose only argument will be a boolean flag that indicates whether the
media query matches or not, returning what to render, or just a React node to be
rendered if the query matches.

### `render` (`() => React.Node`)

A function that is only called if the query matches, and returns what to render
when the query matches.

### `defaultMatches` (`boolean`)

When rendering on the server you can use this prop to set the initial state on the server to match whatever you think it will be on the client. You can detect the user's device by analyzing the user-agent string from the HTTP request in your server-side rendering code.

### `onChange` (`(matches: boolean) => any`)

Callback fired when the status of the media query changes.

### `targetWindow` (`Window`)

Can be specified if you want the query to be evaluated against a different window object than the one the code is running in. This can be useful for example if you are rendering part of your component tree to an iframe or a popup window.
