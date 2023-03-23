import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter trail name..."
        />
      </Spacer>
      <Spacer />
      {recording ? (
        <Button title="STOP" onPress={stopRecording} />
      ) : (
        <Button title="START" onPress={startRecording} />
      )}
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save Track" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
