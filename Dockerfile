# Use the official Kartoza GeoServer image
FROM kartoza/geoserver:2.27.2

# Expose GeoServer's default port
EXPOSE 8080

# Set GEOSERVER_DATA_DIR environment variable
# This allows GeoServer to read a mounted data directory
# You can mount a volume to /opt/geoserver_data_dir on Render
ENV GEOSERVER_DATA_DIR /opt/geoserver_data_dir

# You can add any additional configurations or plugins here if needed
# For example, to copy a custom configuration file:
# COPY my_geoserver_config.xml /opt/geoserver_data_dir/
