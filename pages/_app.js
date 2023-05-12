import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }
  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} handleAddTask={handleAddTask} tasks={tasks} />
      </Layout>
    </>
  );
}
