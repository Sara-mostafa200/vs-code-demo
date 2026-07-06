import type { IFile } from "../interface";
import { v4 as uuidv4 } from "uuid";

export const fileTree: IFile = {
  id: uuidv4(),
  name: "portfolio-workspace",
  isFolder: true,
  children: [
    {
      id: uuidv4(),
      name: "app",
      isFolder: true,
      children: [
        {
          id: uuidv4(),
          name: "MainLayout.tsx",
          isFolder: false,
          content: `
import Header from "./ui/Header";
import Landing from "./views/Landing";
import Work from "./views/Work";
import ReachMe from "./views/ReachMe";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Landing />
      <Work />
      <ReachMe />
    </>
  );
}
          `,
        },

        {
          id: uuidv4(),
          name: "views",
          isFolder: true,
          children: [
            {
              id: uuidv4(),
              name: "Landing.tsx",
              isFolder: false,
              content: `
export default function Landing() {
  return (
    <section>
      <h1>Welcome, I'm Sara 👋</h1>
      <p>React Frontend Engineer</p>
    </section>
  );
}
              `,
            },
            {
              id: uuidv4(),
              name: "Work.tsx",
              isFolder: false,
              content: `
export default function Work() {
  return (
    <section>
      <h2>Featured Work</h2>
      <ul>
        <li>Online Store Platform</li>
        <li>Recipe Explorer</li>
        <li>Personal Branding Site</li>
      </ul>
    </section>
  );
}
              `,
            },
            {
              id: uuidv4(),
              name: "ReachMe.tsx",
              isFolder: false,
              content: `
export default function ReachMe() {
  return (
    <section>
      <h2>Get In Touch</h2>
      <p>Email: contact@sara.dev</p>
    </section>
  );
}
              `,
            },
          ],
        },

        {
          id: uuidv4(),
          name: "ui",
          isFolder: true,
          children: [
            {
              id: uuidv4(),
              name: "Header.tsx",
              isFolder: false,
              content: `
export default function Header() {
  return (
    <header>
      <h2>Sara Dev</h2>
      <nav>
        <ul>
          <li>Landing</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
              `,
            },
          ],
        },

        {
          id: uuidv4(),
          name: "resources",
          isFolder: true,
          children: [
            {
              id: uuidv4(),
              name: "avatar.png",
              isFolder: false,
              content: "image-placeholder",
            },
          ],
        },
      ],
    },

    {
      id: uuidv4(),
      name: "index.html",
      isFolder: false,
      content: `
<!DOCTYPE html>
<html>
  <body>
    <div id="root-app"></div>
  </body>
</html>
      `,
    },

    {
      id: uuidv4(),
      name: "project.config.json",
      isFolder: false,
      content: `
{
  "project": "portfolio-workspace",
  "version": "1.0.0",
  "start": "vite"
}
      `,
    },
  ],
};
