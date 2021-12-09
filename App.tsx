
import React from "react";
import { AuthProvider } from "./src/hook/auth";
import Routes from "./src/routes";

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}