import React from "react";

const TicketsContainer = ({ allTickets, inProgress, resolved, startWorking, completeTicket }) => {
  const isInProgress = (id) => inProgress.some(t => t.id === id);
  const isResolved = (id) => resolved.some(t => t.id === id);

  const activeTickets = allTickets.filter(t => !isResolved(t.id));

  return (
    <div className="w-11/12 mx-auto px-4 my-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-7">Customer Tickets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {activeTickets.map((ticket) => (
              <div
                key={ticket.id}
                onClick={() => !isInProgress(ticket.id) && startWorking(ticket)}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
              >

                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-gray-900 flex-1 pr-3">
                    {ticket.title}
                  </h3>
                  <span className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 whitespace-nowrap
                    ${isInProgress(ticket.id)
                      ? 'bg-yellow-100 text-yellow-800'  
                      : 'bg-green-100 text-green-800'     
                    }`}>
                    <span className={`w-3 h-3 rounded-full ${isInProgress(ticket.id) ? 'bg-yellow-600' : 'bg-green-600'}`}></span>
                    {isInProgress(ticket.id) ? 'In Progress' : 'Open'}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  {ticket.description}
                </p>

                <div className="flex justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">#{ticket.id}</span>
                    <span className={`px-1 py-1 font-bold text-xs
                      ${ticket.priority === "HIGH" ? 'text-red-700' :
                        ticket.priority === "MEDIUM" ? 'text-yellow-500' :
                          'text-green-700'}`}>
                      {ticket.priority} PRIORITY
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <span className="font-medium">{ticket.customer}</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {ticket.createdAt}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {activeTickets.length === 0 && (
            <p className="text-center  py-20 text-gray-400 text-lg">
              All tickets have been resolved
            </p>
          )}
        </div>


        <div className="lg:col-span-4">
          <h2 className="text-xl font-semibold text-gray-600 mb-5">Task Status</h2>
          {inProgress.length === 0 ? (
            <p className="text-gray-500 mb-8">Select a ticket to add to Task Status</p>
          ) : (
            <div className="space-y-4 mb-10">
              {inProgress.map((ticket) => (
                <div key={ticket.id} className="bg-white rounded-xl shadow-md p-5">
                  <p className="font-medium text-gray-800 mb-4">{ticket.title}</p>
                  <button
                    onClick={() => completeTicket(ticket.id)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition"
                  >
                    Complete
                  </button>
                </div>
              ))}
            </div>
          )}

          <h2 className="text-xl font-semibold text-gray-600 mb-5">Resolved Task</h2>
          {resolved.length === 0 ? (
            <p className="text-gray-500">No resolved tasks yet.</p>
          ) : (
            <div className="space-y-4">
              {resolved.map((ticket) => (
                <div key={ticket.id} className="bg-indigo-50/60 rounded-xl p-5 text-gray-700 font-medium border border-indigo-100">
                  {ticket.title}
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default TicketsContainer;