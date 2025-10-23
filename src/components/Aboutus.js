import React from 'react'

function Aboutus() {
    return (
        <div>
            {/* AboutUs Section */}
            <section class="container my-5">
                <div><p className="text-center mb-4" style={{
                    marginBottom: '30px', color: 'rgba(239, 181, 119, 0.77)', fontFamily: 'Times New Roman',
                    fontSize: '40px', marginTop: '100px'
                }}> AboutUs</p>
                </div>
                <div >
                    <div class="col-md-12" style={{ marginBottom: '30px' }}>
                        <h3 style={{ marginBottom: '20px' }}>Wedding Photography</h3>
                        <p>Welcome to Twogether Studios! We are a boutique Candid Wedding Photography Studio based in New Delhi, India and are known for a fun, off-beat and modern approach to creating stories from the best day in your life. Led by Arjun & Praerna Kartha, we started photographing Indian weddings in 2008, and since then have created hundreds of unique love stories across the world. We are passionate, hard-working and an incredibly motivated team; we love Indian weddings, and can’t wait to be a part of yours!</p>
                    </div>
                    <div class="col-md-12">
                        <h3 style={{ marginBottom: '20px' }}>Wedding Photography Showcase</h3>
                        <p>Our wedding photography style is modern, contemporary and off-beat. A short selection of some of our favourites is given below. To see more of our work, check out the full showcase or see our real Indian wedding photography stories! </p>
                        <div class="col-md-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                            <div className='container aboutimg'><img src="https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-1.jpg" alt="About Us" class="images rounded" /></div>
                            <div className='container aboutimg'><img src="https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-2-768x768.jpg" alt="About Us" class="images rounded" /></div>
                            <div className='container aboutimg'><img src="https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-3-768x768.jpg" alt="About Us" class="images rounded" /></div>
                            <div className='container aboutimg'><img src="https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-3-768x768.jpg" alt="About Us" class="images rounded" /></div>
                            <div className='container aboutimg'><img src="https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-7-768x768.jpg" alt="About Us" class="images rounded" /></div>
                            <div className='container aboutimg'><img src="https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-14-768x768.jpg" alt="About Us" class="images rounded" /></div>
                            <div className='container aboutimg'><img src="https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-20-768x768.jpg" alt="About Us" class="images rounded" /></div>
                            <div className='container aboutimg'><img src="https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-19-768x768.jpg" alt="About Us" class="images rounded" /></div>
                            <div className='container aboutimg'><img src="https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-16-768x768.jpg" alt="About Us" class="images rounded" /></div>
                            <div className='container aboutimg'><img src="https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-12-768x768.jpg" alt="About Us" class="images rounded" /></div>
                            <div className='container aboutimg'><img src="https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-18-768x768.jpg" alt="About Us" class="images rounded" /></div>
                            <div className='container aboutimg'><img src="https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-17-768x768.jpg" alt="About Us" class="images rounded" /></div>
                        </div>
                    </div>
                    <div class="col-md-12 mt-4" style={{ marginBottom: '20px' }} >
                        <h3 style={{ marginBottom: '20px' }}>Indian Wedding Videos</h3>
                        <p>Just like wedding photography, Indian Wedding Movies have transformed from simple coverage into thematic documentary style wedding films. Our wedding movies are simple stories that tell the tale of your wedding, filmed in our inimitable fun and off-beat style. Using the very latest and best technology available, our wedding films are tailor made for your big day and perfectly complement your wedding photos. Every wedding film is tailor made to your story, a few examples of which are below.</p>
                    </div>
                    <div class="col-md-12 video1">
                        <div class="embed-responsive embed-responsive-16by9 mb-4" style={{display:'flex', flexDirection:'row'}}>
                            <iframe
                                style={{ borderRadius:'20px' , boxShadow:'0px 10px 20px'}}
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/dF5XY1by5jQ?list=RDdF5XY1by5jQ&start_radio=1"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                           <p style={{marginTop:'80px' , marginLeft:'60px'}}>A beautiful wedding film capturing the essence of an Indian <br/> wedding,  showcasing the vibrant colors,  joyful celebrations, <br/> and heartfelt  moments shared by the couple and their loved ones.</p> 
                        </div>
                    </div>
                    <div class="col-md-12 video2" >
                        <div class="embed-responsive embed-responsive-16by9 mb-4" style={{ display:'flex', flexDirection:'row'}} >
                            <p style={{ marginRight:'80px',marginTop:'80px'}}>A beautiful wedding film capturing the essence of an Indian <br/>  wedding, showcasing the vibrant colors,  joyful celebrations, <br/> and heartfelt  moments shared by the couple and their loved ones.</p>
                            <iframe class="embed-responsive-item"
                                style={{ borderRadius:'20px' , boxShadow:'0px 10px 20px'}}
                                width="560"
                                height="315"
                                title="wedding photos"
                                src="https://www.youtube.com/embed/CGC1_bhypkU" allowFullScreen/>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Aboutus
