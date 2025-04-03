import { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
// import Setlang from "./LanguageBtn";
function Layout() {
  const [page, setPage] = useState("about");

  return (
    <main>
      <Sidebar setPage={setPage} />
      <Content page={page} />
      {/* <Setlang /> */}
    </main>
  );
}

export default Layout;
