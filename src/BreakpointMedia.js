// @flow

import * as React from 'react'
import Media from 'react-media'
import PropTypes from 'prop-types'
import withTheme from '@material-ui/core/styles/withTheme'

type BreakpointName = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type Theme = {
  +breakpoints: {
    +values: {[name: BreakpointName]: number},
  },
}

export type Props = {
  +theme: Theme,
  +min?: ?BreakpointName,
  +max?: ?BreakpointName,
  +children?: ((matches: boolean) => ?React.Node) | React.Node,
  +render?: ?() => React.Node,
}

const BreakpointMedia = ({theme, min, max, children, render}: Props): React.Node => {
  const query = {}
  if (min) query.minWidth = theme.breakpoints.values[min]
  if (max) query.maxWidth = theme.breakpoints.values[max] - 0.05
  return (
    <Media query={query} render={render}>
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
}

export default withTheme()(BreakpointMedia)
