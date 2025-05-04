import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvent,
} from "react-leaflet";
import { type LatLngExpression } from "leaflet";

import "leaflet/dist/leaflet.css";

interface MapProps {
  onLocationChange?: (pos: LatLngExpression) => void;
  location?: LatLngExpression;
}

function HandleMarkerPosition({
  setMarkerPosition,
}: {
  setMarkerPosition: React.Dispatch<
    React.SetStateAction<LatLngExpression | undefined>
  >;
}) {
  useMapEvent("click", (e: L.LeafletMouseEvent) => {
    const newPosition: LatLngExpression = [e.latlng.lat, e.latlng.lng];

    setMarkerPosition(newPosition);
  });

  return null;
}

function Map({ onLocationChange, location }: MapProps) {
  const [position, setPosition] = useState<LatLngExpression>();

  useEffect(() => {
    if (position && onLocationChange) {
      onLocationChange(position);
    }
  }, [position, onLocationChange]);

  return (
    <MapContainer
      center={
        position ? position : location ? location : [35.699704, 51.337631]
      }
      zoom={13}
      scrollWheelZoom={true}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "0.5rem",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <HandleMarkerPosition setMarkerPosition={setPosition} />

      <Marker
        position={
          position ? position : location ? location : [35.699704, 51.337631]
        }
      >
        <Popup className="text-lg font-semibold font-vazir">فرستنده</Popup>
      </Marker>
    </MapContainer>
  );
}
export default Map;
