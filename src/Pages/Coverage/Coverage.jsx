import React, { useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const districts = [
  {
    name: "Dhaka",
    lat: 23.8103,
    lng: 90.4125,
  },
  {
    name: "Sylhet",
    lat: 24.8949,
    lng: 91.8687,
  },
  {
    name: "Chattogram",
    lat: 22.3569,
    lng: 91.7832,
  },
  {
    name: "Rajshahi",
    lat: 24.3745,
    lng: 88.6042,
  },
  {
    name: "Khulna",
    lat: 22.8456,
    lng: 89.5403,
  },
  {
    name: "Barishal",
    lat: 22.701,
    lng: 90.3535,
  },
];

function FlyToLocation({ location }) {
  const map = useMap();

  if (location) {
    map.flyTo([location.lat, location.lng], 11, {
      duration: 2,
    });
  }

  return null;
}

const Coverage = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const handleSearch = () => {
    const found = districts.find((d) =>
      d.name.toLowerCase().includes(search.toLowerCase())
    );

    if (found) {
      setSelected(found);
    } else {
      alert("District not found");
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-5xl font-bold text-[#0C3D46] mb-4">
          Available in 64 Districts
        </h2>

        <p className="text-gray-500 mb-10">
          Search your district to see our coverage.
        </p>

        <div className="flex gap-4 mb-10">
          <input
            type="text"
            placeholder="Search District..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full h-14 rounded-xl"
          />

          <button
            onClick={handleSearch}
            className="bg-lime-400 px-8 rounded-xl font-semibold"
          >
            Search
          </button>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-lg">

          <MapContainer
            center={[23.685, 90.3563]}
            zoom={7}
            style={{
              height: "600px",
              width: "100%",
            }}
          >
            <TileLayer
              attribution="OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <FlyToLocation location={selected} />

            {districts.map((district) => (
              <Marker
                key={district.name}
                position={[district.lat, district.lng]}
              >
                <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                  {district.name}
                </Tooltip>
              </Marker>
            ))}
          </MapContainer>

        </div>
      </div>
    </section>
  );
};

export default Coverage;