import {
  Box,
  Button,
  CircularProgress,
  Flex,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";

import { Dna, Grid } from "react-loader-spinner";
import React, { useContext, useEffect, useState } from "react";
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

  useEffect(() => {
    axios.get("http://localhost:8080/users/getusers").then((res) => {
      setAllUsers(res.data.User);
      setCount(res.data.User.length);
    });
  }, [count]);

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
        "top",
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
        "top",
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
      Toasting("Users deleted", "All Users data deleted", "top", "error");
      console.log(res.data);
    });
  };
  const handleDetails = () => {
    navigate("/details");
  };
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
          {count === 0 && (
            <Text fontWeight={"bold"} color={"red"}>
              Please fetch first
            </Text>
          )}
          <Button isDisabled={count === 0} onClick={handleDelete}>
            Delete Users
          </Button>
        </Box>
        <Box>
          {count === 0 && (
            <Text fontWeight={"bold"} color={"red"}>
              Please fetch first
            </Text>
          )}
          <Button isDisabled={count === 0} onClick={handleDetails}>
            Details User Page
          </Button>
        </Box>
      </Flex>
      <br />

      <Box>
        {loading ? (
          <Text display={"inline-block"} fontWeight={"bold"} color={"red"}>
            <Dna
              visible={true}
              height="350"
              width="350"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </Text>
        ) : count === 0 ? (
          <>
            <Text fontWeight={"bold"} color={"red"}>
              No user available, fetch users first...
            </Text>
            <Image
              display={"inline-block"}
              w={"20%"}
              src={"./box.svg"}
              alt="404"
            />
          </>
        ) : (
          <Box>
            <Text fontWeight={"bold"} color={"green"}>
              User already fetched you can fetch again...
            </Text>
            <Image
              display={"inline-block"}
              w={"50%"}
              src={"./start.png"}
              alt="404"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
