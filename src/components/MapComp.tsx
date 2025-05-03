// @ts-ignore
import Mapir from "mapir-react-component";
import "mapir-react-component/dist/index.css";

function MapComp() {
  const Map = Mapir.setToken({
    scrollZoom: false,
    transformRequest: (url: string) => {
      return {
        url,
        headers: {
          "x-api-key":
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ1MDY1NTczYzU4MWY1MWU1YzBjY2Q0OWFhNDQ3ZDQwNjVjNTg0ZGQ4NzMxNzc5YzY3YjQ3Y2M5ODk5M2QxMWQ1MDg4MjgxMzJkZmIxNjZlIn0.eyJhdWQiOiIzMjIxOSIsImp0aSI6IjQ1MDY1NTczYzU4MWY1MWU1YzBjY2Q0OWFhNDQ3ZDQwNjVjNTg0ZGQ4NzMxNzc5YzY3YjQ3Y2M5ODk5M2QxMWQ1MDg4MjgxMzJkZmIxNjZlIiwiaWF0IjoxNzQ1OTQ2MDk3LCJuYmYiOjE3NDU5NDYwOTcsImV4cCI6MTc0ODUzODA5Nywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.mh_bb88DLqz8NwK8meCduJOKctTFogujnouQaVvRDTPCWnKZigbA3eSg3G0v8gbWMpMYMvyivmlAolYdpUa7T_5TOfD-wdTcGeeYcbNUWaCLn5-ltfHYU9tQ89RGpZxpRU2k1GFJnNJblvZGi5HMASiyVLoAcGObw38-7Zd4ihlrRKZAJUE_t3Ze17nsUG_19WjHBUdEPxbxPRvcekr-cs3G-FD51zlprRNXRCaMT1PwhZEUzxiuFRt1mXKB5IjOcPGuF0_HaIJv3JGUf8oi8TqOJlBtPHDduszNMm5muEeqts7NVR6bbcM4hTCZo2Wtw0DX9CIl3YrgXbw0KeuhdQ",
          "Mapir-SDK": "reactjs",
        },
      };
    },
  });

  return (
    <Mapir
      Map={Map}
      apiKey="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ1MDY1NTczYzU4MWY1MWU1YzBjY2Q0OWFhNDQ3ZDQwNjVjNTg0ZGQ4NzMxNzc5YzY3YjQ3Y2M5ODk5M2QxMWQ1MDg4MjgxMzJkZmIxNjZlIn0.eyJhdWQiOiIzMjIxOSIsImp0aSI6IjQ1MDY1NTczYzU4MWY1MWU1YzBjY2Q0OWFhNDQ3ZDQwNjVjNTg0ZGQ4NzMxNzc5YzY3YjQ3Y2M5ODk5M2QxMWQ1MDg4MjgxMzJkZmIxNjZlIiwiaWF0IjoxNzQ1OTQ2MDk3LCJuYmYiOjE3NDU5NDYwOTcsImV4cCI6MTc0ODUzODA5Nywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.mh_bb88DLqz8NwK8meCduJOKctTFogujnouQaVvRDTPCWnKZigbA3eSg3G0v8gbWMpMYMvyivmlAolYdpUa7T_5TOfD-wdTcGeeYcbNUWaCLn5-ltfHYU9tQ89RGpZxpRU2k1GFJnNJblvZGi5HMASiyVLoAcGObw38-7Zd4ihlrRKZAJUE_t3Ze17nsUG_19WjHBUdEPxbxPRvcekr-cs3G-FD51zlprRNXRCaMT1PwhZEUzxiuFRt1mXKB5IjOcPGuF0_HaIJv3JGUf8oi8TqOJlBtPHDduszNMm5muEeqts7NVR6bbcM4hTCZo2Wtw0DX9CIl3YrgXbw0KeuhdQ"
      className="!absolute !inset-0 !w-full !h-full"
    />
  );
}

export default MapComp;
