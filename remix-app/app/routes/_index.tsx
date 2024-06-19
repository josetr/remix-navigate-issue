import type { MetaFunction } from "@remix-run/node";
import { NavigateFunction, useNavigate, useParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

let navigate: NavigateFunction

function StoreNav() {
  navigate = useNavigate()
  return undefined
}

export default function Index() {
  return (
    <>
      <button onClick={() => navigate("about", { replace: true, unstable_flushSync: true })}>about</button>
      <StoreNav />
      <HomePageComponent />
    </>
  );
}

export function HomePageComponent() {
  useParams()
  console.log("rendering home page")
  return <div></div>
}
