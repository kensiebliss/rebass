import { createStyled } from "@stitches/react"

export const layout = (config) => (input) => {
  const isColumn = input.direction === "column"
  const justifyContent = isColumn ? input.yAlign : input.xAlign
  const alignItems = isColumn ? input.xAlign : input.yAlign

  return {
    display: "flex",
    flexDirection,
    justifyContent,
    alignItems,
  }
}
