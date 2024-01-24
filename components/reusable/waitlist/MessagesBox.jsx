function MessagesBox({messages}) {

  return (
    <div className="h-[500px] overflow-auto justify-end">
      <div className="h-[fit-content]">
        {messages?.map((msg, index) => {
          if (msg.role === "assistant") {
            return (
              <div className="flex justify-start mt-4" key={index}>
                <div className="bg-[#191C1C] rounded-2xl p-4">
                  <div className="text-sm text-[#ffffff]">{msg.content}</div>
                </div>
              </div>
            );
          }
          return (
            <div className="flex justify-end mt-4" key={index}>
              <div className="bg-[#191C1C] text-[#ffffff] rounded-2xl p-4">
                <div className="text-sm">{msg.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessagesBox;