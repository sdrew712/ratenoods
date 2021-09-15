export default function Upgrade(props) {
  const {className, upgradeName, bodyText, upgradeImg} = props.data;
  return(
    <div className={className}>
      <div className="post-container">
        <div className="post-text-container">
          <h2>{upgradeName}</h2> 
          <p className="post-text">{bodyText}</p>
        </div>
        <div className="img-container">
          <img src={`./upgradeImages/${upgradeImg}`} alt="upgrade_img" className="post-img"/>
        </div>
      </div>
    </div>
  )
}