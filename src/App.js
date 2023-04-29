import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team"
import Invoices from "./scenes/invoices"
import Contacts from "./scenes/contacts"
import Form from "./scenes/form"
import Calendar from "./scenes/calendar"
import Faq from "./scenes/faq";
import { Routes, Route } from "react-router-dom";
import Bar from "./scenes/bar"
// import Line from "./scenes/Line"
// import Pie from "./scenes/Pie"
// import Geography from "./scenes/Geography"


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
              <Route path="/react-admin-dashboard/calendar" element={<Calendar/>}/>
              <Route path="/react-admin-dashboard/faq" element={<Faq/>} />
              <Route path="/react-admin-dashboard/bar" element={<Bar/>}/>
              {/* <Route path="/react-admin-dashboard/pie" element={<Pie/>}/> */}
              {/* <Route path="/react-admin-dashboard/line" element={<Line/>}/> */}
              {/* <Route path="/react-admin-dashboard/geography" element={<Geography/>}/> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
