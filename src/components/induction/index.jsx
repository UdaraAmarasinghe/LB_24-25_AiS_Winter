import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const HomePage = () => {
  const [name, setName] = useState('');
  const [jobRole, setJobRole] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(`api/users/${name}`);
    setJobRole(response.data.jobRole);
  };

  return (
    <Container>
      <Text>
        Welcome to the site! Enter your name below to find out your job role.
      </Text>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Button type="submit">Submit</Button>
      </Form>
      {jobRole && (
        <JobRole>
          Your job role is: <strong>{jobRole}</strong>
        </JobRole>
      )}
      <VideoContainer>
        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" />
      </VideoContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: black;
  color: white;
  font-family: Montserrat, sans-serif;
`;

const Text = styled.p`
  margin: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const Input = styled.input`
  border: 2px solid white;
  background-color: transparent;
  color: white;
  font-family: Montserrat, sans-serif;
  margin: 1rem 0;
  padding: 0.5rem;
`;

const Button = styled.button`
  border: none;
  background-color: white;
  color: black;
  font-family: Montserrat, sans-serif;
  margin: 1rem 0;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const JobRole = styled.p`
  margin: 1rem;
`;

const VideoContainer = styled.div`
  margin: 1rem;
`;
