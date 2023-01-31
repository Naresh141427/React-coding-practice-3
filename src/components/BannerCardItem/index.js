import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {text, description, className} = bannerDetails
  return (
    <li className={className}>
      <h1 className="header">{text}</h1>
      <p className="description">{description}</p>
      <button className="button">Show More</button>
    </li>
  )
}

export default BannerCardItem
