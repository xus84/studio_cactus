import { database } from '../firebase/config'
import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import profilePic from '../img/fingerprints-icons-5898.png'
//import LayersContainer from '../components/Layers.container'

export default function Home ({ imageUrl }) {
  const [images, setImages] = useState([])
  const [showImages, setShowImages] = useState(false)
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    (async () => {
      const imageRef = collection(database, 'materials')
      const point = collection(database, 'points')
      const snapshots = await getDocs(imageRef)
      const pointshots = await getDocs(point)

      console.log(pointshots)

      if (images) {
        const docs = snapshots.docs.map((doc) => {
          const data = doc.data()
          data.id = doc.id
          return data
        })
        setImages(docs)
      } else {
        return
      }
      if (images) {
        const layersMaterial = snapshots.docs.map((doc) => {
          const dataLayer = doc.data()
          dataLayer.id = doc.id
          return dataLayer
        })
        console.log(layersMaterial)
      }

      /*   if(images){
              const xAndY = pointshots.docs.map((doc) => {
                      const xAndYshowed = doc.data()
                      console.log(xAndYshowed)
                      return xAndYshowed
              })
            }  */
    })()
  }, [])
  const handleMouseEnter = () => {
    setShowImages(true)
  }

  const handleMouseLeave = () => {
    setShowImages(false)
  }

  const handleClick = (event) => {
    setCoords({ x: event.clientX, y: event.clientY })
  }

  return (
    <div>
      <div className='h-screen flex'>
        <div className='w-1/6' />
        <img
          className='w-4/6 relative'
          src={imageUrl}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <div className='w-1/6' />
      </div>

      {showImages && (
        <div className='hidden-content'>
          <Image
            className='w-14 absolute bottom-2.5rem left-35rem'
            src={profilePic}
            alt='Picture of the author'
            style={{
              bottom: '2.5rem',
              left: '35rem'
            }}
          />
          <Image
            className='w-14 absolute '
            src={profilePic}
            alt='Picture of the author'
            style={{
              bottom: '14.5rem',
              right: '36rem'
            }}
          />
          <Image
            className='w-14 absolute '
            src={profilePic}
            alt='Picture of the author'
            style={{
              top: '17.5rem',
              right: '31rem'
            }}
          />
          <Image
            className='w-14 absolute'
            src={profilePic}
            alt='Picture of the author'
            style={{
              top: '14rem',
              right: '26rem'
            }}
          />
        </div>
      )}

      <div onClick={handleClick}>
        <p>Click anywhere in this area to see the x and y coordinates:</p>
        <p>
          x: {coords.x}, y: {coords.y}
        </p>
      </div>
           {/*  <LayersContainer/> */}
      <h4>layers</h4>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.layers[Object.keys(image.layers)[0]]}
          width={300}
          height={300}
        />
      ))}

      {/*
                <img src={images[0].layers['EnRd7hAaNydVdVJ06qgF'] width={300} height={300}}/>
            <img src={ images[1].layers['EnRd7hAaNydVdVJ06qgF']} width={300} height={300}/>
            <img src={images[2].layers['i7EVutewtycZY2qwmldG']} width={300} height={300}/>
            <img src={images[3].layers['i7EVutewtycZY2qwmldG']} width={300} height={300}/>
            <img src={images[4].layers['Ks5CthbPwAvd2TNxzHEl']} width={300} height={300}/>
            <img src={images[5].layers['cd84QwP9gOhAU5p47UDn']} width={300} height={300}/>
            <img src={images[6].layers['i7EVutewtycZY2qwmldG']} width={300} height={300}/>
            <img src={images[7].layers['cd84QwP9gOhAU5p47UDn']} width={300} height={300}/>
            <img src={images[8].layers['cd84QwP9gOhAU5p47UDn']} width={300} height={300}/>
            <img src={images[9].layers['Ks5CthbPwAvd2TNxzHEl']} width={300} height={300}/>
            <img src={images[10].layers['Ks5CthbPwAvd2TNxzHEl']} width={300} height={300}/>  */}

      <h2>Kitchen materials</h2>

      <div className='materials'>
        {images.map((image, id) => (
          <div className='card_material' key={id}>
            <div className='material_name'>
              <p>{image.name}</p>
            </div>
            <img src={image.materialPreview} width='50rem' height='50rem' />
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps () {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(process.env.IMAGE)
  const imageUrl = res.url
  // console.log(imageUrl);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      imageUrl
    }
  }
}
