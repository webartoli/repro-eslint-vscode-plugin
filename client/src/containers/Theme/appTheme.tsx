import { initializeIcons, createTheme, PartialTheme } from '@fluentui/react'

initializeIcons()

const standardPalette: PartialTheme['palette'] = {
  themePrimary: '#FFBC05',
  themeLighterAlt: '#FFFCF5',
  themeLighter: '#FFF4D7',
  themeLight: '#FFEBB4',
  themeTertiary: '#FFD769',
  themeSecondary: '#FFC423',
  themeDarkAlt: '#E6AA05',
  themeDark: '#D18E00',
  themeDarker: '#8F6903',
  neutralLighterAlt: '#F8F8F8',
  neutralLighter: '#F4F4F4',
  neutralLight: '#EAEAEA',
  neutralQuaternaryAlt: '#DADADA',
  neutralQuaternary: '#D0D0D0',
  neutralTertiaryAlt: '#C8C8C8',
  neutralTertiary: '#939FB8',
  neutralSecondary: '#7684A1',
  neutralPrimaryAlt: '#5C6C8A',
  neutralPrimary: '#131C2E',
  neutralDark: '#32405C',
  black: '#212D45',
  white: '#FFFFFF'
}

const theme = createTheme({
  fonts: {
    mediumPlus: {
      fontWeight: 'bold'
    }
  },
  palette: standardPalette,
  isInverted: false,
  components: {
    PrimaryButton: {
      styles: {
        label: {
          color: standardPalette.black
        },
        labelHovered: {
          color: standardPalette.black
        }
      }
    },
    TextField: {
      styles: {
        subComponentStyles: {
          label: {
            root: {
              fontSize: 10
            }
          }
        }
      }
    },
    ComboBox: {
      styles: {
        label: {
          fontSize: 10
        }
      }
    },
    Checkbox: {
      styles: {
        checkmark: {
          color: standardPalette.neutralPrimary
        }
      }
    }
  }
})

export default theme
