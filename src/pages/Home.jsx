import React from "react";
import UserResults from "../componets/users/UserResults";
import UserSearch from "../componets/users/UserSearch";

export default function Home() {
  return (
    <div>
      <UserSearch />
      <UserResults />
    </div>
  );
}
