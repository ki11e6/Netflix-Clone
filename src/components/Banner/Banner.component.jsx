import './Banner.styles.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          consectetur eius inventore aut. Eius aliquid qui ab eligendi veritatis
          officiis architecto veniam cupiditate!
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
};

export default Banner;
