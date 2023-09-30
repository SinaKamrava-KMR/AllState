import { LatLngExpression ,Icon} from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const position: LatLngExpression = [51.505, -0.09];
const customIcon = new Icon({
  iconUrl: "/public/images/marker.png",
  iconSize: [100, 100], // Adjust the size of the icon as needed
});
const Map = () => {

  return (
    <section className="flex-1 rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800 h-full w-full">
      <MapContainer
        className="w-full h-full"
        center={position}
        zoom={20}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      ,
    </section>
  );
};

export default Map;
