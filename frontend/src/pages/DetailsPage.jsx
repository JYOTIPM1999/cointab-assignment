import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
} from "@chakra-ui/react";
import axios from "axios";

const DetailsPage = () => {
  useEffect(() => {
    axios.get("http://localhost:8080/users/getdata").then((res) => {});
  }, []);

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
