// @flow

import {describe, it} from 'mocha'
import * as React from 'react'
import createMuiTheme from "@material-ui/core/styles/createMuiTheme"
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import {shallow} from 'enzyme'
import {expect} from 'chai'

import BreakpointMedia from '../src/BreakpointMedia'

describe('BreakpointMedia', () => {
  it('sets minWidth when min prop is given', () => {
    const theme = createMuiTheme()
    const children = matches => matches ? 'Visible' : 'Hidden'
    const comp = shallow(
      <MuiThemeProvider theme={theme}>
        <BreakpointMedia min="sm">
          {children}
        </BreakpointMedia>
      </MuiThemeProvider>
    ).dive().dive()
    expect(comp.prop('query')).to.deep.equal({
      minWidth: theme.breakpoints.values.sm,
    })
    expect(comp.prop('children')).to.equal(children)
  })
  it('sets maxWidth when max prop is given', () => {
    const theme = createMuiTheme()
    const children = matches => matches ? 'Visible' : 'Hidden'
    const comp = shallow(
      <MuiThemeProvider theme={theme}>
        <BreakpointMedia max="sm">
          {children}
        </BreakpointMedia>
      </MuiThemeProvider>
    ).dive().dive()
    expect(comp.prop('query')).to.deep.equal({
      maxWidth: theme.breakpoints.values.md - 0.05,
    })
    expect(comp.prop('children')).to.equal(children)
  })
  it('passes down render prop', () => {
    const theme = createMuiTheme()
    const render = () => 'Visible'
    const comp = shallow(
      <MuiThemeProvider theme={theme}>
        <BreakpointMedia max="sm" render={render} />
      </MuiThemeProvider>
    ).dive().dive()
    expect(comp.prop('render')).to.equal(render)
  })
})
