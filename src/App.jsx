
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import TicketsContainer from "./Components/TicketsContainer/TicketsContainer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import ticketsData from "../public/ticketsData.json";
import HeaderSection from "./Components/Home/Home";

function App() {
  const [allTickets] = useState(ticketsData);

  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const startWorking = (ticket) => {
    if (inProgress.find(t => t.id === ticket.id)) {
      toast.info("Already in progress!");
      return;
    }
    setInProgress([...inProgress, ticket]);
    toast.success(`"${ticket.title}" added to In Progress`);
  };

  const completeTicket = (ticketId) => {
    const ticket = inProgress.find(t => t.id === ticketId);
    if (!ticket) return;

    setInProgress(inProgress.filter(t => t.id !== ticketId));
    setResolved([...resolved, ticket]);
    toast.success(`"${ticket.title}" marked as Resolved!`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <Home
        inProgressCount={inProgress.length}
        resolvedCount={resolved.length}
      />
     

      <TicketsContainer
        allTickets={allTickets}
        inProgress={inProgress}
        resolved={resolved}
        startWorking={startWorking}
        completeTicket={completeTicket}
      />

      <Footer />
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

export default App;