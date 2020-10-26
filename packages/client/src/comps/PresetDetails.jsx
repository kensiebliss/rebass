import styled from "styled-components"
import { Link } from "./common/Link"
import NextLink from "next/link"
import Avatar from "@primer/components/lib/Avatar"
import Text from "@primer/components/lib/Text"
import Button from "@primer/components/lib/Button"
import LabelGroup from "@primer/components/lib/Label"
import Label from "@primer/components/lib/Label"
import BorderBox from "@primer/components/lib/BorderBox"
import Box from "@primer/components/lib/Box"
import Flex from "@primer/components/lib/Flex"
import Header from "@primer/components/lib/Header"
import BranchName from "@primer/components/lib/BranchName"
import { PlayIcon, StarIcon, DownloadIcon } from "@primer/octicons-react"

export function PresetDetails(props) {
  return (
    <BorderBox width='100%' height='120px' backgroundColor='#fff' borderRadius={4}>
      <Flex flexWrap='nowrap' padding='16px'>
        <Box width='100%'>
          <Flex flexDirection='column'>
            <Box mb='8px'>
              <Link mt={0} mb='8px' fontWeight='700' muted href='/'>
                LEAD-cannon-in-d.fxp
              </Link>
            </Box>
            <Box>
              <Label variant='small' pb='1px' outline backgroundColor='transparent' mr={2}>
                small
              </Label>
              <Label variant='small' pb='1px' outline backgroundColor='transparent' mr={2}>
                small
              </Label>
              <Label variant='small' pb='1px' outline backgroundColor='transparent' mr={2}>
                small
              </Label>
              <Label variant='small' pb='1px' outline backgroundColor='transparent' mr={2}>
                small
              </Label>
              <Label variant='small' pb='1px' outline backgroundColor='transparent' mr={2}>
                small
              </Label>
              <Label variant='small' pb='1px' outline backgroundColor='transparent' mr={2}>
                small
              </Label>
            </Box>
            <Flex alignItems='center' mt='8px'>
              <Box display='flex' mr='8px' alignItems='center'>
                <span
                  style={{
                    display: "inline-flex",
                    marginRight: 4,
                    background: "blue",
                    width: 12,
                    height: 12,
                    borderRadius: 50,
                  }}
                />
                <Text as='small'>Serum</Text>
              </Box>
              <Box display='flex' mr='8px' alignItems='center'>
                <StarIcon size={18} />
                <Text ml='4px' as='small'>
                  1.2k
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Flex width='120px' flexDirection='column' alignItems='center'>
          <DownloadIcon size={24} />
        </Flex>
      </Flex>
    </BorderBox>
  )
}
