import type { Edge, EdgeTypes } from "reactflow";

export const initialEdges = [
  // Connect mixins to each endpoint
  {
    id: "attributeEndpoints->attributesMixins",
    source: "attributesEndpoints",
    target: "attributesMixins",
    animated: true,
    style: { stroke: "rgb(240, 117, 170)", strokeWidth: 2 },
  },
  {
    id: "productsEndpoints->productsMixins",
    source: "productsEndpoints",
    target: "productsMixins",
    animated: true,
    style: { stroke: "rgb(158, 118, 255)", strokeWidth: 2 },
  },
  {
    id: "supermarketEndpoints->supermarketMixins",
    source: "supermarketEndpoints",
    target: "supermarketsMixins",
    animated: true,
    style: { stroke: "rgb(158, 118, 255)", strokeWidth: 2 },
  },
  {
    id: "categoriesEndpoints->categoriesMixin",
    source: "categoriesEndpoints",
    target: "categoriesMixins",
    animated: true,
    style: { stroke: "rgb(158, 118, 255)", strokeWidth: 2 },
  },
] satisfies Edge[];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
