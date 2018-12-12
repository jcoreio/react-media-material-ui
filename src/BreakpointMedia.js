// @flow

import * as React from 'react'
import Media from 'react-media'
import PropTypes from 'prop-types'
import withTheme from '@material-ui/core/styles/withTheme'
import type {Theme} from '@material-ui/core/styles/createMuiTheme'

type BreakpointName = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type Props = React.ElementConfig<typeof Media> & {
  +theme: Theme,
  +min?: ?BreakpointName,
  +max?: ?BreakpointName,
}

const next: {[name: BreakpointName]: BreakpointName} = {
  xs: 'sm',
  sm: 'md',
  md: 'lg',
  lg: 'xl',
  xl: 'xl',
}

const BreakpointMedia = ({theme, min, max, children, render, ...props}: Props): React.Node => {
  const query = {}
  if (min) query.minWidth = theme.breakpoints.values[min]
  if (max && max !== 'xl') {
    query.maxWidth = theme.breakpoints.values[next[max]] - 0.05
  }
  return (
    <Media query={(query: any)} render={render} {...props}>
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
