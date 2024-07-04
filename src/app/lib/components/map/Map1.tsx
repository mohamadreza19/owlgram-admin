"use client";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import iconUrl from "leaflet/dist/images/marker-icon.png";

import { Icon } from "leaflet";
import { number } from "yup";

const myIcon = new Icon({
  iconUrl: iconUrl.src,
  iconSize: [20, 30],
});

type Lat_Long = [number, number];

interface Map1Props {
  latLong: Lat_Long;
  zoom?: number;
  onClickMap?: (latLong: Lat_Long) => void;
  enableMutate?: boolean;
}

const Map1: FunctionComponent<Map1Props> = ({
  latLong,
  zoom,
  enableMutate = false,
  onClickMap,
}) => {
  const [latLongState, setLatLongState] = useState<Lat_Long>(latLong);

  function handleSetLatLongState(latLong: Lat_Long) {
    if (enableMutate) {
      setLatLongState(latLong);
      if (onClickMap) onClickMap(latLong);
    }
  }
  return (
    <MapContainer
      className="w-[600px] h-[500px] z-0"
      center={latLongState}
      zoom={zoom || 13}
      scrollWheelZoom={true}
    >
      <ClickInterception handleSetLatLongState={handleSetLatLongState} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={latLongState} icon={myIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

const ClickInterception = ({
  handleSetLatLongState,
}: {
  handleSetLatLongState: (latLong: Lat_Long) => void;
}) => {
  const map = useMapEvents({
    click: (e) => {
      const lat_log: Lat_Long = [e.latlng.lat, e.latlng.lng];
      handleSetLatLongState(lat_log);
    },
  });
  return null;
};
export default Map1;
