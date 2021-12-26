import React, { useState } from "react";
import styles from "./app.module.scss";

function App() {
  const [data, setData] = useState([
    { text: "task 1", id: 1 },
    { text: "task 2", id: 2 },
  ]);

  const [value, setValue] = useState("");
  const [index, setIndex] = useState(0);
  const [editStart, setEditStart] = useState(false);

  const handleAddValue = () => {
    if (value) {
      setData([...data, { id: Math.random(), text: value }]);
      setValue("");
    }
  };

  const handleEditStart = (data, index) => {
    setEditStart(true);
    setValue(data.text);
    setIndex(index);
  };

  const handleEdit = () => {
    data.splice(index, 1, { id: Math.random(), text: value });
    setValue("");
  };

  return (
    <div className={styles.app}>
      <div className={styles.data}>
        {data?.map((e, index) => (
          <div key={e.id} className={styles.content}>
            <div>
              <h2>{e.text}</h2>
            </div>
            <div>
              <button onClick={() => handleEditStart(e, index)}>Edit</button>
            </div>
          </div>
        ))}
      </div>

      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        {editStart ? (
          <button onClick={handleEdit}>Edit</button>
        ) : (
          <button onClick={handleAddValue}>Add</button>
        )}
      </div>
    </div>
  );
}

export default App;
