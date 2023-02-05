import { app, database } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import Image from 'next/image'
import profilePic from '../img/fingerprints-icons-5898.png'

export default function Home({ imageUrl }) {
        const [images, setImages] = useState([]);
        const [showButton, setShowButton] = useState(false);
      
      
      
        useEffect(() => {
          (async () => {
            const imageRef = collection(database, "materials");
            const point = collection(database, "points");
            const snapshots = await getDocs(imageRef);
               const pointshots = await getDocs(point);
          
            console.log(pointshots) 
      
            if (images) {
              const docs = snapshots.docs.map((doc) => {
                const data = doc.data();
                data.id = doc.id;
                return data;
              });
              setImages(docs);
            } else {
              return;
            }
            if(images){
                    const layers = snapshots.docs.map((doc) => {
                            const dataLayer = doc.data()
                            return  dataLayer
                      })
                      console.log(layers)
            }
      
            
            if(images){
              const xAndY = pointshots.docs.map((doc) => {
                      const xAndYshowed = doc.data()
                      console.log(xAndYshowed)
                      return xAndYshowed
              })
            } 
          })();
        }, []);
      
        return (
          <div>
            <div className="">
              <div className=""></div>
              <div className="flex justify-center items-center h-screen">
              <img  src={imageUrl} />
              <Image className="w-14"
              src={profilePic}
              alt="Picture of the author"
            />
              <Image className="w-14"
              src={profilePic}
              alt="Picture of the author"
            />
              <Image className="w-14"
              src={profilePic}
              alt="Picture of the author"
            />
              <Image className="w-14"
              src={profilePic}
              alt="Picture of the author"
            />
              </div>
      
      
            
           
              <div className=""></div>
       <div
            onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}
          >
            {showButton && <button onClick={()=> {console.log('hi')}}>Click me!</button>}
          </div>
      
            
            </div>
            <h4>layers</h4>
           <img src={images[1].layers['EnRd7hAaNydVdVJ06qgF']} width={300} height={300}/>
            <img src={images[2].layers['i7EVutewtycZY2qwmldG']} width={300} height={300}/>
            <img src={images[3].layers['i7EVutewtycZY2qwmldG']} width={300} height={300}/>
            <img src={images[4].layers['Ks5CthbPwAvd2TNxzHEl']} width={300} height={300}/>
            <img src={images[5].layers['cd84QwP9gOhAU5p47UDn']} width={300} height={300}/>
            <img src={images[6].layers['i7EVutewtycZY2qwmldG']} width={300} height={300}/>
            <img src={images[7].layers['cd84QwP9gOhAU5p47UDn']} width={300} height={300}/>
            <img src={images[8].layers['cd84QwP9gOhAU5p47UDn']} width={300} height={300}/>
            <img src={images[9].layers['Ks5CthbPwAvd2TNxzHEl']} width={300} height={300}/>
            <img src={images[10].layers['Ks5CthbPwAvd2TNxzHEl']} width={300} height={300}/> 
      
            
            
            <h2>Kitchen materials</h2>
      
            <div className="materials">
              {images.map((image, id) => (
                <div className="card_material" key={id}>
                  <div className="material_name">
                    <p>{image["name"]}</p>
                  </div>
                  <img  src={image["materialPreview"]} width="50rem" height="50rem" />
                </div>
              ))}
            </div>
          </div>
        );
      }
      
      export async function getStaticProps() {
        // Call an external API endpoint to get posts.
        // You can use any data fetching library
        const res = await fetch(process.env.IMAGE);
        const imageUrl = res.url;
        //console.log(imageUrl);
      
        // By returning { props: { posts } }, the Blog component
        // will receive `posts` as a prop at build time
        return {
          props: {
            imageUrl,
          },
        };
      }
      