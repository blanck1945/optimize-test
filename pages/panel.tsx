import React from "react";
import { axiosSender } from "../fetch/axios/axios";

const Panel = () => {
  const [routeState, setRouteState] = React.useState<any>({
    preview: false,
  });
  const activePreviewMode = async() => {
    const res = await axiosSender({ url: "http://localhost:3000/api/preview" });
    console.warn({ res });
    setRouteState({
        ...routeState,
        preview: true
    })
  };

  return (
    <div>
      <div>
        <h3>Ruta: Preview</h3>
      </div>
      <button onClick={() => activePreviewMode()}>Activar</button>
      {routeState.preview && (
        <div
          style={{
            width: "4rem",
            height: "2rem",
            backgroundColor: "#006400",
          }}
        />
      )}
    </div>
  );
};

export default Panel;
