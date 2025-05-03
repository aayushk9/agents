type AgentNodeProps = {
    data: {
      label: string;
    };
  };
  
export const AgentNode = ({ data }: AgentNodeProps) => {
    return (
      <div className="p-4 rounded-lg bg-blue-100 shadow">
        <strong>Agent:</strong> {data.label}
      </div>
    );
  };