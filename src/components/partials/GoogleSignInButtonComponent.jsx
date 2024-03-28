import React from "react";
import { Button } from "../ui/button";

export default function GoogleSignInButtonComponent({ children }) {
  return <Button className="w-full">{children}</Button>;
}
