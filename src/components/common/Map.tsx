import { LatLngExpression, Icon, LeafletMouseEvent } from "leaflet";
import {
  MapContainer,
  useMap,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import { useState } from "react";


const ZOOM = 20;


const customIcon = new Icon({
  iconUrl: "/public/images/marker.png",
  iconSize: [100, 100],
});

const Map = ({
  position=[40, 0],
  dragable = true,
  onChageLatLng = () => {},
}: Partial<MapType>) => {


  const [mapPosition, setMapPosition] = useState<LatLngExpression>(position);
  const handleChangePosition = (e: LeafletMouseEvent) => {
    const { lat, lng } = e.latlng;
    setMapPosition([lat, lng]);
    onChageLatLng([lat, lng]);
  };

  
  return (
    <section className="flex-1 rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800 h-full w-full z-10">
      
      <MapContainer
        className="w-full h-full"
        center={position}
        zoom={ZOOM}
        scrollWheelZoom={true}>
        
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition} icon={customIcon}>
          <Popup>Your Home</Popup>
        </Marker>
        <ChangePosition position={mapPosition} />
        {dragable && <DetectClick onClick={handleChangePosition} />}
      </MapContainer>
    </section>
  );
};

function ChangePosition({ position }: { position: LatLngExpression }) {
  const map = useMap();
  map.setView(position, ZOOM);
  return null;
}

function DetectClick({ onClick }: { onClick: (e: LeafletMouseEvent) => void }) {
  useMapEvent("click", (e: LeafletMouseEvent) => onClick(e));
  return null;
}

export default Map;
