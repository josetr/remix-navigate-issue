import { useNavigate, useParams } from "react-router-dom"

export default function Index() {
  const navigate = useNavigate()
  return (
    <>
      <button onClick={() => navigate("about", { replace: true, unstable_flushSync: true })}>about</button>
      <HomePageComponent />
    </>
  );
}

export function HomePageComponent() {
  useParams()
  console.log("rendering home page")
  return <div></div>
}

