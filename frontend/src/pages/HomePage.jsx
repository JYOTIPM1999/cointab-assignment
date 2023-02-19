import { Box, Button, Flex, Image, useToast } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DetailsPage from "./DetailsPage";
import { userContext } from "../ContextAPI/Context";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [deleteUsers, setDeleteUsers] = useState(false);
  const navigate = useNavigate();
  const { setAllUsers } = useContext(userContext);

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
      console.log(res.data.usr);
      setAllUsers(res.data.usr);
      setLoading(false);
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
      setDeleteUsers(false);
      Toasting("Users deleted", "All Users data deleted", "buttom", "error");
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
          {loading ? "Loading..." : "Fetch User"}
        </Button>
        <Button onClick={handleDelete}>Delete Users</Button>
        <Button onClick={handleDetails}>Details User Page</Button>
      </Flex>
    </Box>
  );
};

export default HomePage;
