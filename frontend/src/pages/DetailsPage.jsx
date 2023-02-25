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
  Button,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import { userContext } from "../ContextAPI/Context";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";

const DetailsPage = () => {
  const navigate = useNavigate();
  const { allUsers, setAllUsers } = useContext(userContext);
  console.log(allUsers);

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <Button onClick={handleNavigate}>Return to HomePage</Button>
      <br />
      <br />
      <Flex justifyContent={"space-around"}>
        <Button>Men</Button>
        <Button>Women</Button>
        <Button>Age less than 40</Button>
        <Button>Age greater than 50</Button>
      </Flex>
      <br />
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
      <Pagination />
    </>
  );
};

export default DetailsPage;
