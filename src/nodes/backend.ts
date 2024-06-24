import type { Node, NodeTypes } from "reactflow";
import { PositionLoggerNode } from "./PositionLoggerNode";

export const initialNodes = [
  { id: "scraper", type: "input", position: { x: 100, y: 100 }, data: { label: "Scraper" } },
  { id: "database", type: "default", position: { x: 100, y: 300 }, data: { label: "Database" } },

  // models
  { id: "accounts", type: "input", position: { x: -200, y: 300 }, data: { label: "Accounts" } },
  { id: "attribute", type: "input", position: { x: -200, y: 400 }, data: { label: "Attributes" } },
  { id: "product", type: "default", position: { x: 100, y: 400 }, data: { label: "Product" } },
  { id: "attribute_product_pair", type: "output", position: { x: -50, y: 500 }, data: { label: "AttributeProductPair" } },
  { id: "supermarket_product_pair", type: "default", position: { x: 200, y: 500 }, data: { label: "SupermarketProductPair" } },
  { id: "supermarket", type: "default", position: { x: 300, y: 400 }, data: { label: "Supermarket" } },
  { id: "category", type: "default", position: { x: 500, y: 400 }, data: { label: "Category" } },

  //endpoints
  { id: "attributesEndpoints", type: "default", position: { x: -200, y: 600 }, data: { label: "AttributesEndpoints" } },
  { id: "categoriesEndpoints", type: "default", position: { x: 500, y: 600 }, data: { label: "CategoriesEndpoints" } },
  { id: "productsEndpoints", type: "default", position: { x: 100, y: 600 }, data: { label: "ProductsEndpoints" } },
  { id: "supermarketEndpoints", type: "default", position: { x: 300, y: 600 }, data: { label: "SupermarketsEndpoints" } },


] satisfies Node[];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;

