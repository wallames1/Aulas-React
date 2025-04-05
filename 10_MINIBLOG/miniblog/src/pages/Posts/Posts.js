import styles from './Post.module.css'   

//hooks
import {useParams} from 'react-router-dom'
import { useEffectDocument, useFetchDocumen } from '../../hooks/useFetchDocument'

const Posts = () => {
    const { id } = useParams()
    const {document: post} = useFetchDocumen("posts", id)
  return (
    <div>
{post && (
    <>
    <h1>
        {post.title}
    </h1></>
)}    </div>
  )
}

export default Posts