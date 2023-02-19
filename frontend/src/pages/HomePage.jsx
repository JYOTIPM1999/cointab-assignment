import { Box, Button, Flex, Image, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const Toasting = (title, desc, status) => {
    toast({
      title: title,
      position: "right",
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
        "error"
      );
    }

    setLoading(true);
    axios.post("http://localhost:8080/users/savedata").then((res) => {
      setLoading(false);
      Toasting("Successfully Fetched", `count is ${res.data.count}`, "success");
      //   console.log(res.data);
    });
  };

  const handleDelete = () => {
    console.log("Yes");
  };
  const handleDetails = () => {
    console.log("Yes");
  };

  return (
    <Box m={"auto"} textAlign={"center"}>
      <Image src="/cointab.png" m={"auto"} />
      <br />
      <br />
      <Flex justifyContent="space-around">
        <Button disabled={loading === true} onClick={handleFetch}>
          {loading ? "Loading..." : "Fetch User"}
        </Button>
        <Button onClick={handleDelete}>Delete Users</Button>
        <Button onClick={handleDetails}>Details User Page</Button>
      </Flex>
    </Box>
  );
};

export default HomePage;
