import type { Edge, EdgeTypes } from "reactflow";

export const initialEdges = [
  // Connect Backend to Database
  {
    id: "scraper->database",
    source: "scraper",
    target: "database",
    animated: true,
    style: { stroke: "rgb(158, 118, 255)", strokeWidth: 2 },
  },

  // Connect Database to each model
  {
    id: "accounts->database",
    source: "accounts",
    target: "database",
    animated: true,
    style: { stroke: "rgb(240, 117, 170)", strokeWidth: 2 },
  },
  {
    id: "attribute_product_pair->attribute",
    source: "attribute",
    target: "attribute_product_pair",
    animated: true,
    style: { stroke: "rgb(240, 117, 170)", strokeWidth: 2 },
  },
  {
    id: "attribute_product_pair->product",
    source: "product",
    target: "attribute_product_pair",
    animated: true,
    style: { stroke: "rgb(158, 118, 255)", strokeWidth: 2 },
  },
  {
    id: "attribute->database",
    source: "attribute",
    target: "database",
    animated: true,
    style: { stroke: "rgb(240, 117, 170)", strokeWidth: 2 },
  },
  {
    id: "database->product",
    source: "database",
    target: "product",
    animated: true,
    style: { stroke: "rgb(158, 118, 255)", strokeWidth: 2 },
  },
  {
    id: "supermarket_product_pair->product",
    source: "product",
    target: "supermarket_product_pair",
    animated: true,
    style: { stroke: "rgb(158, 118, 255)", strokeWidth: 2 },
  },
  {
    id: "supermarket_product_pair->supermarket",
    source: "supermarket",
    target: "supermarket_product_pair",
    animated: true,
    style: { stroke: "rgb(158, 118, 255)", strokeWidth: 2 },
  },
  {
    id: "database->supermarket",
    source: "database",
    target: "supermarket",
    animated: true,
    style: { stroke: "rgb(158, 118, 255)", strokeWidth: 2 },
  },
  {
    id: "database->category",
    source: "database",
    target: "category",
    animated: true,
    style: { stroke: "rgb(158, 118, 255)", strokeWidth: 2 },
  },

  // Connect models to their endpoints
  {
    id: "attribute->attributesEndpoints",
    source: "attribute",
    target: "attributesEndpoints",
    animated: true,
    style: { stroke: "rgb(240, 117, 170)", strokeWidth: 2 },
  },
  {
    id: "product->productsEndpoints",
    source: "product",
    target: "productsEndpoints",
    animated: true,
    style: { stroke: "rgb(158, 118, 255)", strokeWidth: 2 },
  },
  {
    id: "supermarket->supermarketEndpoints",
    source: "supermarket",
    target: "supermarketEndpoints",
    animated: true,
    style: { stroke: "rgb(158, 118, 255)", strokeWidth: 2 },
  },
  {
    id: "category->categoriesEndpoints",
    source: "category",
    target: "categoriesEndpoints",
    animated: true,
    style: { stroke: "rgb(158, 118, 255)", strokeWidth: 2 },
  },
] satisfies Edge[];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
