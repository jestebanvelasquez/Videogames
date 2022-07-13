import React,{useState} from 'react'
import imagesDefault from './images.js'

export default function ImagesDefault(props) {

    const [images, setImages] = useState(imagesDefault)

  return (
    <div> 
        {images ? images.map(el => {
                    return (
                        <input
                            type='image'
                            id='image'
                            name='image'
                            value={el}
                            src={el} 
                            alt="default"  
                            width='200px' 
                            height='250px'
                            onClick={props.handleChange}
                        />
                    )
                }) : null
                }
    </div>
  )
}
