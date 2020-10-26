import { createStyled } from "@stitches/react"

import * as utils from "./utils"
import { colors } from "../colors"
import { breakpoints } from "./breakpoints"

export const { styled, css } = createStyled({
  prefix: "rebass-",

  breakpoints,
  utils,

  tokens: {
    colors,
  },

  fonts: {
    $body: "Inter",
    $display: "'SF UI Text'",
    $accent: "Metropolis Regular",
  },

  space: {
    $xs: "4px",
    $sm: "8px",
    $md: "16px",
    $lg: "24px",
    $xl: "32px",
  },

  fontSizes: {
    $0: "12px",
    $1: "14px",
    $2: "16px",
    $3: "20px",
    $4: "24px",
    $5: "32px",
    $6: "40px",
  },

  fontWeights: {},
  lineHeights: {},
  letterSpacings: {},
  sizes: {},
  borderWidths: {},
  borderStyles: {},
  radii: {},
  shadows: {},
  zIndices: {},
  transitions: {},
})
