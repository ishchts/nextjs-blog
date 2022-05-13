import { useRouter } from 'next/router'

export const getServerSideProps = async (context) => {
  console.log('context', context.params)
  fetch('/asdsadasdasdasds')
  return {
    props: { qwe: [] }
  }
}

function About(props) {
  const router = useRouter()
  console.log('router', router)
  return <div>About</div>
}

export default About