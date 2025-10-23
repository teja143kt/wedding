import React from 'react'

function Albums() {
  return (
    <div>
      <div><p className="text-center mb-4" style={{
        marginBottom: '30px', color: 'rgba(239, 181, 119, 0.77)', fontFamily: 'Times New Roman',
        fontSize: '40px', marginTop: '100px'
      }}>Albums</p>
        <p className="mb-3" style={{ fontSize: '20px' }}>We value everything that our clients stand for, and we take pride in the fact that we are trusted by our client time and again for their Wedding Photography. We are acclaimed in Candid Wedding Photography as we would even climb a mountain to make our clients happy.
          And if you are still reading this, our team of expert wedding photographers is looking forward to a happy and productive collaboration with you!</p>
      </div>
      <div class="col-md-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div className='container aboutimg'><img src="https://i.cdn.newsbytesapp.com/web/story170080147695894.jpg?tr=w-720" alt="About Us" class="images rounded" /></div>
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
  )
}

export default Albums
