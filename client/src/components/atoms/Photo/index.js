// CSS
import './Photo.css'

const Photo = ({ src, width, isCircle }) => {
  const className = []
  if (isCircle) className.push('circle')

  return (
    <div className={['photo', className].join(' ')}>
      <img
        style={{ width: width, height: width }}
        src={`http://localhost:5000/${src}`}
      />
    </div>
  )
}

export default Photo
