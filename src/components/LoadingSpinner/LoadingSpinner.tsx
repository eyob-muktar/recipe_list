import { Spinner } from 'react-bootstrap'

const LoadingSpinner = () => {
  return (
    <div className='d-flex justify-content-center mb-3'>
      <Spinner animation='grow' variant='primary' />
    </div>
    )
}

export default LoadingSpinner