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
  const { allUsers, setAllUsers, setQuery } = useContext(userContext);

  const handleNavigate = () => {
    navigate("/");
  };

  const handleClick = (el) => {
    // console.log(el);
    setQuery(el);
  };

  return (
    <>
      <Button onClick={handleNavigate}>Return to HomePage</Button>
      <br />
      <br />
      <Flex justifyContent={"space-around"}>
        <Button onClick={() => handleClick({ type: "male" })}>Men</Button>
        <Button onClick={() => handleClick({ type: "female" })}>Women</Button>
        <Button onClick={() => handleClick({ type: "age<45" })}>
          Age less than 40
        </Button>
        <Button onClick={() => handleClick({ type: "age>50" })}>
          Age greater than 50
        </Button>
        <Button onClick={() => handleClick({ type: "India" })}>Indian</Button>
      </Flex>
      <br />
      <TableContainer>
        <Table variant="striped" colorScheme="orange">
          <Thead>
            <Tr>
              <Th>Profile</Th>
              <Th>Name</Th>
              <Th>Gender</Th>
              <Th>Age</Th>
              <Th>Email</Th>
              <Th>Country</Th>
              <Th>State</Th>
              <Th>Phone</Th>
            </Tr>
          </Thead>
          <Tbody>
            {allUsers.map((el, i) => {
              return (
                <Tr key={el._id}>
                  <Td>
                    <Image src={el.picture.medium} alt="image" />
                  </Td>
                  <Td>
                    {el.name.title} {el.name.first} {el.name.last}
                  </Td>
                  <Td>{el.gender}</Td>
                  <Td>{el.registered.age}</Td>
                  <Td>{el.email}</Td>
                  <Td>{el.location.country}</Td>
                  <Td>{el.location.state}</Td>
                  <Td>{el.phone}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination />
    </>
  );
};

export default DetailsPage;
