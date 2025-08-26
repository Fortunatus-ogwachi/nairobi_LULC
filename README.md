# Nairobi Land Use Land Cover (LULC) Change Detection Web Platform

This project showcases Land Use Land Cover (LULC) changes in **Nairobi County** between **2019 and 2025** using Sentinel-2 data. The platform is web-based and displays satellite imagery and LULC classifications.

## Features
- Sentinel-2 LULC maps for 2019 and 2025
- Change detection visualization (urban growth, vegetation loss, etc.)
- Interactive web map (Leaflet/React + raster tiles)
- Simple backend to serve data

## Project Structure
- `client/` → Contains the web frontend (HTML, CSS, JavaScript).
- `server/` → Contains the backend services for serving data and the web application.
- `data/` → Stores raw and processed geospatial datasets (GeoTIFF, shapefiles).
- `docs/` → Contains project documentation and screenshots.

## Setup and Installation

To set up and run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Fortunatus-ogwachi/nairobi_LULC.git
    cd nairobi_LULC
    ```

2.  **Install backend dependencies:**
    ```bash
    npm install
    ```
    This will install all necessary packages for the server.

3.  **GeoServer Setup (Prerequisite):**
    Ensure you have GeoServer installed and running. Publish the `lulc_2019.tif` and `lulc_2025.tif` files from the `data/processed/` directory as WMS layers in GeoServer (e.g., under a workspace named `nairobi_lulc` with layer names `lulc_2019` and `lulc_2025`). The server will provide the GeoServer configuration to the client.

## Usage

1.  **Start the application:**
    ```bash
    npm start
    ```
    This command will start the backend server, which also serves the frontend application and provides GeoServer configuration.

2.  Open your web browser and navigate to `http://localhost:3000` (or the port specified by the server). The LULC layers will be rendered from GeoServer.

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript, Leaflet
- **Backend:** Node.js, Express.js, GDAL (via `gdal-async`), PostgreSQL (via `pg`)
- **Geospatial Data:** GeoTIFF, Shapefiles, Sentinel-2
- **Mapping Server:** GeoServer

## License
This project is licensed under the [LICENSE](LICENSE) file.
