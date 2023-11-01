import './index.css'

const BannerCardItem = props => {
  const {headerText, description, className} = props
  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="desc">{description}</p>
        <button type="button" className="button">
          show more
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
