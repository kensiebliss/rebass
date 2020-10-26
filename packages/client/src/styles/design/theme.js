import getValue from "get-value"
import setValue from "set-value"

export const colors = {}

function setColors(path, value) {
  setValue(colors, path, value)
}

setColors("button.default.backgroun", {
  backgroundColor: "rgba(0,0,0,0)",
  color: "var(--colorBrandBlack)",
})

export const button = {
  size: {
    small: {
      height: 32,
      padding: "0 8px",
    },
    medium: {
      height: 40,
      padding: "0 16px",
    },
  },
  intent: {
    default: {
      backgroundColor: "rgba(0,0,0,0)",
      color: "var(--colorBrandBlack)",
    },
    primary: {
      backgroundColor: "var(--colorBrandBlack)",
      color: "var(--colorWhite)",
    },
    danger: {
      backgroundColor: "var(--colorDanger)",
      color: "var(--colorWhite)",
    },
  },
  state: {
    disabled: {
      opacity: 0.4,
    },
  },
}

const theme = {}

theme.colors = {}
theme.colors.brand = {}

theme.colors.grayscale0 = "######"
theme.colors.grayscale1 = "######"
theme.colors.grayscale2 = "######"
theme.colors.grayscale3 = "######"
theme.colors.grayscale4 = "######"
theme.colors.grayscale5 = "######"
theme.colors.grayscale6 = "######"
theme.colors.grayscale7 = "######"
theme.colors.grayscale8 = "######"
theme.colors.grayscale9 = "######"
theme.colors.grayscale10 = "######"
theme.colors.grayscale11 = "######"

theme.colors.white = theme.colors.grayscale0
theme.colors.black = theme.colors.grayscale11

theme.colors.brand.black = theme.colors.grayscale11
theme.colors.brand.yellow = "######"
theme.colors.brand.pink = "######"
theme.colors.brand.gradient = "######"

theme.space = {}
theme.space[0] = 4
theme.space[1] = 8
theme.space[2] = 12
theme.space[3] = 16
theme.space[4] = 20
theme.space[5] = 24
theme.space[6] = 28
theme.space[7] = 32
theme.space[8] = 36
theme.space[9] = 40
theme.space[10] = 44
theme.space[11] = 48
theme.space[12] = 52
theme.space[13] = 56
theme.space[14] = 60

theme.fontSizes = {}
theme.fontSizes[0] = 12
theme.fontSizes[1] = 14
theme.fontSizes[2] = 16
theme.fontSizes[3] = 20
theme.fontSizes[4] = 24
theme.fontSizes[5] = 28
theme.fontSizes[6] = 32
theme.fontSizes[7] = 36
theme.fontSizes[8] = 40

theme.fontSizes.tiny = theme.fontSizes[0]
theme.fontSizes.small = theme.fontSizes[1]
theme.fontSizes.normal = theme.fontSizes[2]
theme.fontSizes.big = theme.fontSizes[3]
theme.fontSizes.heading4 = theme.fontSizes[4]
theme.fontSizes.heading3 = theme.fontSizes[5]
theme.fontSizes.heading2 = theme.fontSizes[6]
theme.fontSizes.heading1 = theme.fontSizes[7]
theme.fontSizes.title = theme.fontSizes[8]

export default theme
