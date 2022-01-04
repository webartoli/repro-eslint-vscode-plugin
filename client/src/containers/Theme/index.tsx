import { FC } from 'react'
import { ThemeProvider as FluentThemeProvider } from '@fluentui/react'
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components'
import theme from './appTheme'

const AppTheme: FC = ({ children }) => {
  return (
    <FluentThemeProvider id="container" theme={theme}>
      <StyledComponentThemeProvider theme={theme}>{children}</StyledComponentThemeProvider>
    </FluentThemeProvider>
  )
}

export default AppTheme
