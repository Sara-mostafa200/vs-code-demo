import type { IFile } from "../interface";
import { v4 as uuidv4 } from "uuid";

export const projectsFiles: IFile = {
  id: uuidv4(),
  name: "projects-explorer",
  isFolder: true,
  children: [
    {
      id: uuidv4(),
      name: "ecommerce-app.tsx",
      isFolder: false,
      content: {
        img: "https://via.placeholder.com/50",
        sDescription: "E-commerce project",
        description: "Full featured ecommerce app with cart, wishlist and Stripe payment integration.",
        tech: ["React", "Context API", "Stripe", "Axios", "React Query"],
      },
    },
    {
      id: uuidv4(),
      name: "food-recipes.tsx",
      isFolder: false,
      content: {
        img: "https://via.placeholder.com/50",
        sDescription: "Recipes app",
        description: "App to explore meals with categories, details and ingredients using API.",
        tech: ["React", "API", "React Router", "Sass"],
      },
    },
    {
      id: uuidv4(),
      name: "daniels-site.tsx",
      isFolder: false,
      content: {
        img: "https://via.placeholder.com/50",
        sDescription: "Portfolio website",
        description: "Responsive personal portfolio website with animations and modern UI.",
        tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      },
    },
    {
      id: uuidv4(),
      name: "next-products.tsx",
      isFolder: false,
      content: {
        img: "https://via.placeholder.com/50",
        sDescription: "Products app",
        description: "Next.js app for displaying products with dynamic routing and TypeScript.",
        tech: ["Next.js", "TypeScript", "Tailwind", "Material UI"],
      },
    },
    {
      id: uuidv4(),
      name: "todo-crud.js",
      isFolder: false,
      content: {
        img: "https://via.placeholder.com/50",
        sDescription: "CRUD app",
        description: "Simple Todo CRUD app with localStorage for saving data.",
        tech: ["JavaScript", "DOM", "LocalStorage"],
      },
    },
    {
      id: uuidv4(),
      name: "ourBride-platform.tsx",
      isFolder: false,
      content: {
        img: "https://via.placeholder.com/50",
        sDescription: "Marketplace platform",
        description: "Marketplace platform with advanced UX, QR coupons and full e-commerce flow.",
        tech: ["React", "UI/UX", "E-commerce", "State Management"],
      },
    },
  ],
};
