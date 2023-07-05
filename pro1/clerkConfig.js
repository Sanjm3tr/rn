import { Clerk } from "@clerk/clerk-sdk-node";

const clerk = new Clerk({
  apiKey: "pk_test_Z3VpZGluZy1yYXB0b3ItMjEuY2xlcmsuYWNjb3VudHMuZGV2JA",
  frontendApi: "YOUR_FRONTEND_API_URL",
  apiVersion: "2023-07-05", // Optional, specify Clerk API version
});

export default clerk;
