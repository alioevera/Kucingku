const loader = new Loader({
  apiKey: "AIzaSyBVNBuRxOKj44ZgyQGkwTMVTlpfEztbLvc",
  version: "weekly",
  ...additionalOptions,
});

loader.load().then(async () => {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});
