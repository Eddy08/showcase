import { decode as atob, encode as btoa } from "base-64";


export default function Home(props) {
  const svg=decodeURIComponent(props.images)
  // const svgImage=()=>{return{svg}}
  return (
    <>
      <h1>Welcome Harsh</h1>
      {/* {svg} */}
      {/* <img src={svg} /> */}
      {/* {()=>{return ({svg})}} */}
      {/* <img src={props.images} /> */}
      <div
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,${btoa(svg)}')`,
          width: 500,
          height: 500,
        }}
      ></div>
      {/* <img url={props.images} /> */}
      {/* {props.images.map((val) => {
        return <h2 key={val.id}>{val.name}</h2>;
      })} */}
    </>
  );
}
export async function getStaticProps() {
  const json2 = [{ name: "harsh showcase 1", id: 1 }];
  const res = await fetch("https://emoji-harsh08.herokuapp.com/emoji");
  let json = await res;
  let svgString = encodeURIComponent(
    (await json.text()).replace("\\", "")
  );
  // svgString = btoa(svgString);
  // console.log(svgString);
  return { props: { images: svgString } };
}
