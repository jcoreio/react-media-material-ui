// @flow

import * as React from 'react'
import Media from 'react-media'
import PropTypes from 'prop-types'
import withTheme from '@material-ui/core/styles/withTheme'

type BreakpointName = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type Theme = {
  +breakpoints: {
    +up: (BreakpointName) => number,
    +down: (BreakpointName) => number,
  },
}

interface TargetWindow {
  matchMedia: (query: string) => MediaQueryList,
}

export type Props = {
  +theme: Theme,
  +min?: ?BreakpointName,
  +max?: ?BreakpointName,
  +children?: ((matches: boolean) => ?React.Node) | React.Node,
  +render?: ?() => React.Node,
  +defaultMatches?: ?boolean,
  +onChange?: ?(matches: boolean) => any,
  +targetWindow?: ?TargetWindow,
}

const BreakpointMedia = ({theme, min, max, children, render, ...props}: Props): React.Node => {
  const query = {}
  if (min) query.minWidth = theme.breakpoints.up(min)
  if (max) query.maxWidth = theme.breakpoints.down(max)
  return (
    <Media query={query} render={render} {...props}>
      {children}
    </Media>
  )
}
BreakpointMedia.propTypes = {
  theme: PropTypes.shape({
    breakpoints: PropTypes.shape({
      values: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
  min: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  max: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  render: PropTypes.func,
  defaultMatches: PropTypes.bool,
  onChange: PropTypes.func,
  targetWindow: PropTypes.shape({
    matchMedia: PropTypes.func.isRequired,
  }),
}

export default withTheme()(BreakpointMedia)
