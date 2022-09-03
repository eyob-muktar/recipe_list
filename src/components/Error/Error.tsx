import { Alert } from 'react-bootstrap'

const Error = () => {
  return (
    <Alert variant="danger" >
    <Alert.Heading>Oops! Something went wrong!</Alert.Heading>
    <p>
      Make sure you're connected to the internet.
    </p>
  </Alert>
  )
}

export default Error