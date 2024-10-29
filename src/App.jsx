import '/src/scss/index.css'

function App() {
    return (
        <div className='main'>
           <div className='sect sect_1'>
               <div className='video_con'>
                   <video autoPlay muted loop>
                       <source src="/video/2802271-hd_1920_1080_30fps.mp4" type="video/mp4" />
                   </video>
               </div>
               <div className='text_con'>
                   <div className='logo'>
                       로고
                   </div>
                   <div className='dsc'>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi consequatur dicta eligendi, illum modi obcaecati pariatur, quam quis, rem totam voluptate. Beatae eveniet explicabo quod tempore temporibus veritatis vero!</p>
                   </div>
               </div>
           </div>
           <div className='sect sect_2'>
               <div className='top_bar'></div>
               <div className='box_con_wrap' >
                    <div className='box_con' >
                        <div className='box' ></div >
                        <div className='box' ></div >
                        <div className='box' ></div >
                        <div className='box' ></div >
                        <div className='box' ></div >
                        <div className='box' ></div >
                    </div >
               </div >
           </div >
       </div >
    )
}

export default App