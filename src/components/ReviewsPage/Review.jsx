export default function Review(props) {
  const { className, date, noodleName, rating, bodyText, noodleImg } = props.data;
  return (
    <div className={className}>
      <p className="date">{date}</p>

      <div className="post-container">
        <div className="post-text-container">
          <h2>{noodleName}</h2>
          <p className="rating">{rating}</p>
          <p className="noodle-text">{bodyText}</p>
        </div>   
        <div className="button-container">
          <button type="button" className="review-button">Read more</button>
        </div>   

        <div className="img-container">
          <img src={`./noodleImages/${noodleImg}.jpg`} alt="noodle_img" className="post-img"/>
        </div>
      </div>
    </div>     
  );
}