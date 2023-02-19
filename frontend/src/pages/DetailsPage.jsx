import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import { userContext } from "../ContextAPI/Context";

const DetailsPage = () => {
  const { allUsers, setAllUsers } = useContext(userContext);
  console.log(allUsers);
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="orange">
        <Thead>
          <Tr>
            <Th>Profile</Th>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Image src="" alt="image" />
            </Td>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DetailsPage;
