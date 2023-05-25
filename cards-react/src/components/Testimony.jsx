
import '../styles/Testomony.css'
const Testimony = ({name, image, country, job, company, note}) => {

  console.log(name);
  return (
    <div className="content-testimony">
      <img className="image-testimony" src={image} alt={`image to ${name}`} />
      <div className="container-text">
        <p className="name-country"> <strong>{name}</strong> en {country}</p>
        <p className="job-company">{job} en <strong>{company}</strong></p>
        <p className="note">{note}</p>
      </div>
    </div>
  )
}

export default Testimony