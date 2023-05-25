
import '../styles/Testomony.css'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const Testimony = ({testimonyId, name, image, country, job, company, note}) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id:testimonyId })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <div 
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    className="content-testimony">
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