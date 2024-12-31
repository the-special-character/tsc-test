function Banner(props) {
  console.log(props);

  return (
    <div
      className="banner-section"
      style={{
        color: props.color,
        backgroundColor: props.backgroundColor,
      }}
    >
      <h1>{props.title}</h1>
    </div>
  );
}

export default Banner;
