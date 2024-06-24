import type { OnConnect } from "reactflow";
import { useCallback } from "react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
} from "reactflow";

import "reactflow/dist/style.css";

// Fix the import statements for initial nodes and node types
import { initialNodes as initialBackendNodes, nodeTypes as backendNodeTypes } from "./nodes/backend";
import { initialNodes as initialFrontendNodes, nodeTypes as frontendNodeTypes } from "./nodes/frontend";
import { initialEdges as initialBackendEdges, edgeTypes as backendEdgeTypes } from "./edges/backend";
import { initialEdges as initialFrontendEdges, edgeTypes as frontendEdgeTypes } from "./edges/frontend";

const combinedInitialNodes = [...initialBackendNodes, ...initialFrontendNodes];
const combinedInitialEdges = [...initialBackendEdges, ...initialFrontendEdges];
const nodeTypes = { ...backendNodeTypes, ...frontendNodeTypes };
const edgeTypes = { ...backendEdgeTypes, ...frontendEdgeTypes };

export default function App() {
  const [nodes, , onNodesChange] = useNodesState(combinedInitialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(combinedInitialEdges);
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      edgeTypes={edgeTypes}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <Background />
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}
