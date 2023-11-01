import './index.css'

const CardItem = card => {
  const {title, description, imgUrl, className} = card
  return (
    <li className={`card ${className}`}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-desc">{description}</p>
      <img className="card-image" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
