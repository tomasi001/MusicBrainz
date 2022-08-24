import {
  Flex,
  Heading,
  Table,
  TableContainer,
  TableContainerProps,
  Tbody,
  Td,
  Th,
  Tr,
} from "@chakra-ui/react"
import { audioMetaData } from "app/core/constants/types"
import Layout from "app/core/layouts/Layout"
import PageWrapper from "app/core/layouts/PageWrapper"
import { audioMetaDataObjectAtom } from "app/core/state/Atoms"
import { FileProcessing } from "app/fileUtility/FileProcessing"
import { BlitzPage } from "blitz"
import { useRecoilValue } from "recoil"

const Library: BlitzPage = () => {
  const audioMetaDataObjectState = useRecoilValue(audioMetaDataObjectAtom)

  const { isMetadataPresent } = FileProcessing(audioMetaDataObjectState)

  const metaDataTables = () => {
    const tableArray: TableContainerProps[] = []
    for (const key in audioMetaDataObjectState) {
      const metaArray: audioMetaData[] = audioMetaDataObjectState[key]
      metaArray !== null &&
        metaArray.map((fileMetaData: audioMetaData, index) => {
          const { name } = fileMetaData.file
          const { metadata } = fileMetaData
          const tableHeader =
            key === "allUndefined"
              ? "Unmatched Files"
              : key === "allDefined"
              ? "Matched Files"
              : key
          tableArray.push(
            <>
              <Heading
                textDecoration="underline"
                position="relative"
                size="2xl"
                hidden={index === 0 ? false : true}
                my="50px"
              >
                {tableHeader}
              </Heading>
              <TableContainer key={name} my="30px">
                <Table>
                  <Tbody>
                    <Tr>
                      <Th>File Name</Th>
                      <Td>{name || "No File Name"}</Td>
                    </Tr>
                    <Tr>
                      <Th>Artist</Th>
                      <Td>{metadata?.common.artist || "No Artist Name"}</Td>
                    </Tr>
                    <Tr>
                      <Th>Album</Th>
                      <Td>{metadata?.common.album || "No Album Name"}</Td>
                    </Tr>
                    <Tr>
                      <Th>Genre</Th>
                      <Td>
                        {(metadata?.common.genre && metadata.common.genre[0]) ||
                          "No Genre Available"}
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </>
          )
        })
    }
    return tableArray
  }

  const fileTable = isMetadataPresent ? <>{metaDataTables()}</> : <></>

  return (
    <PageWrapper>
      <Flex flexDirection="column">{fileTable}</Flex>
    </PageWrapper>
  )
}

Library.suppressFirstRenderFlicker = true
Library.getLayout = (page: JSX.Element) => <Layout title="Library">{page}</Layout>

export default Library
