"use client";
import Navbar from "@/components/Navbar";

function Application() {
  const getCompanies = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/inventory/companies`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${session.user.token}`,
        },
      }
    );
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <Navbar page="Welcome"></Navbar>
      <h1>Welcome</h1>
      <button onClick={getCompanies}>get companies</button>
    </div>
  );
}

export default Application;
