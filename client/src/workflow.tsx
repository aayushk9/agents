import ReactFlow, { ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    type: 'agentNode',
    position: { x: 100, y: 100 },
    data: { label: 'Prompt Handler' },
  },
  {
    id: '2',
    type: 'toolNode',
    position: { x: 400, y: 100 },
    data: { label: 'API Caller' },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
];

export default function Workflow() {
  return (
    <ReactFlowProvider>
      <div className="h-screen w-full">
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
         // nodeTypes={nodeTypes}
          fitView
        />
      </div>
    </ReactFlowProvider>
  );
}