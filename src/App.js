import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team"
import Invoices from "./scenes/invoices"
import Contacts from "./scenes/contacts"
import Form from "./scenes/form"
// import Bar from "./scenes/Bar"
// import Line from "./scenes/Line"
// import Pie from "./scenes/Pie"
// import FAQ from "./scenes/FAQ"
// import Geography from "./scenes/Geography"
// import Calendar from "./scenes/Calendar"
import { Routes, Route } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes basename="/react-admin-dashboard">
              <Route path="/react-admin-dashboard/" element={<Dashboard />} />
              <Route path="/react-admin-dashboard/team" element={<Team/>}/>
              <Route path="/react-admin-dashboard/contacts" element={<Contacts/>}/>
              <Route path="/react-admin-dashboard/invoices" element={<Invoices/>}/>
              <Route path="/react-admin-dashboard/form" element={<Form/>}/>
              {/* <Route path="/react-admin-dashboard/bar" element={<Bar/>}/> */}
              {/* <Route path="/react-admin-dashboard/pie" element={<Pie/>}/> */}
              {/* <Route path="/react-admin-dashboard/line" element={<Line/>}/> */}
              {/* <Route path="/react-admin-dashboard/faq" element={<FAQ/>}/> */}
              {/* <Route path="/react-admin-dashboard/geography" element={<Geography/>}/> */}
              {/* <Route path="/react-admin-dashboard/calendar" element={<Calendar/>}/> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
