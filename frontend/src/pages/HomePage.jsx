import {
  Box,
  Button,
  CircularProgress,
  Flex,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";

import { Grid } from "react-loader-spinner";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DetailsPage from "./DetailsPage";
import { userContext } from "../ContextAPI/Context";

const HomePage = () => {
  const navigate = useNavigate();
  const {
    setAllUsers,
    loading,
    setLoading,
    deleteUsers,
    setDeleteUsers,
    count,
    setCount,
  } = useContext(userContext);

  const toast = useToast();
  const Toasting = (title, desc, pos, status) => {
    toast({
      title: title,
      position: pos,
      description: desc,
      status: status,
      duration: 3000,
      isClosable: true,
    });
  };

  const handleFetch = () => {
    if (loading) {
      return Toasting(
        "Error while fetching",
        "Fething takes time, wait for it to complete...",
        "left",
        "error"
      );
    }

    setLoading(true);
    axios.post("http://localhost:8080/users/savedata").then((res) => {
      // console.log(res.data.usr);
      // setAllUsers(res.data.usr);
      setLoading(false);
      setCount(res.data.count);
      Toasting(
        "Successfully Fetched",
        `count is ${res.data.count}`,
        "right",
        "success"
      );
    });
  };

  const handleDelete = () => {
    setDeleteUsers(true);
    axios.delete("http://localhost:8080/users/deletedata").then((res) => {
      setAllUsers([]);
      setCount(0);
      setDeleteUsers(false);
      Toasting("Users deleted", "All Users data deleted", "buttom", "error");
      console.log(res.data);
    });
  };
  const handleDetails = () => {
    navigate("/details");
  };
  console.log(count);
  return (
    <Box m={"auto"} textAlign={"center"}>
      <Image src="/cointab.png" m={"auto"} />
      <br />
      <br />
      <Flex justifyContent="space-around">
        <Button onClick={handleFetch}>
          {loading ? (
            <CircularProgress size={"30px"} isIndeterminate color="green.300" />
          ) : (
            "Fetch User"
          )}
        </Button>
        <Box>
          {count === 0 && <Text color={"red"}>Please fetch first</Text>}
          <Button isDisabled={count === 0} onClick={handleDelete}>
            Delete Users
          </Button>
        </Box>
        <Box>
          {count === 0 && <Text color={"red"}>Please fetch first</Text>}
          <Button isDisabled={count === 0} onClick={handleDetails}>
            Details User Page
          </Button>
        </Box>
      </Flex>
      <br />
      <br />
      <br />
      <br />
      <br />
      {loading ? (
        <Text fontWeight={"bold"} color={"red"} textAlign="center">
          {/* <CircularProgress isIndeterminate color="green.500" /> */}
          {/* Fething takes time, wait for it to complete... */}
          <br />
          <Grid
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          <br />
        </Text>
      ) : (
        <Text fontWeight={"bold"} color={"green"}>
          User already fetched you can fetch again...
        </Text>
      )}
    </Box>
  );
};

export default HomePage;
