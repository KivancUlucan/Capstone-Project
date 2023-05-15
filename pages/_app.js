import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import { useState } from "react";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [tasks, setTasks] = useState([]);
  // Händler Funktion zum Anlegen von Tasks auf pages/addTask.js
  // uid installiert, um den angelegten Tasks eine id zu vergeben
  function handleAddTask(newTask) {
    setTasks([...tasks, { ...newTask, id: uid() }]);
  }
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} handleAddTask={handleAddTask} tasks={tasks} />
    </Layout>
  );
}
