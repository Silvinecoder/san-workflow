import type { Node } from "reactflow";

export const initialNodes = [
  // Mixins
  { id: "attributesMixins", type: "default", position: { x: -200, y: 700 }, data: { label: "AttributesMixins" } },
  { id: "productsMixins", type: "default", position: { x: 100, y: 700 }, data: { label: "ProductsMixin" } },
  { id: "supermarketsMixins", type: "default", position: { x: 300, y: 700 }, data: { label: "SupermarketsMixin" } },
  { id: "categoriesMixins", type: "default", position: { x: 500, y: 700 }, data: { label: "categoriesMixin" } },

] satisfies Node[];

export const nodeTypes = {};