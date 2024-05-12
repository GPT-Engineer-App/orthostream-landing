import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

function AppointmentScheduling() {
  return (
    <VStack spacing={8} p={5} align="center">
      <Box bg="gray.700" p={5} borderRadius="lg">
        <Text fontSize="2xl" color="white">OrthoStream: Appointment Scheduling System</Text>
        <Text fontSize="lg" color="gray.300">Welcome to the future of orthopedic scheduling!</Text>
      </Box>
      <Box bg="gray.800" p={5} borderRadius="lg">
        <Text fontSize="xl" color="white">Countdown to Demo Release:</Text>
        <Text fontSize="3xl" color="green.400" id="timer">
          {}
          00 days, 00 hours, 00 minutes, 00 seconds
        </Text>
      </Box>
      <Box bg="gray.900" p={5} borderRadius="lg">
        <Text fontSize="md" color="gray.500">&copy; 2024 OrthoStream</Text>
      </Box>
    </VStack>
  );
}

export default AppointmentScheduling;