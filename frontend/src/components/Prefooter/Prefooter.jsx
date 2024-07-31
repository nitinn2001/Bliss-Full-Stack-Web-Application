import React from 'react'
import "./Prefooter.css"
import { crowdPleasers } from '../../assets/assets'

const Prefooter = () => {
  return (
    <div className='prefooter'>
        <div className="prefooter-1">
            <h2>NOT SURE WHAT YOU'RE LOOKING FOR?</h2>
            <p>Shop these crowd pleasers</p>
            <div className="types">
              {crowdPleasers.map((item,index)=>{
                return(<div key={index} className='each-type'>
                        <img src={item.image}/>
                        <h2>{item.title}</h2>
                      </div>)
              })}
            </div>
        </div>
        <div className="prefooter-2">
          <h2>GET SOCIAL @BLISS</h2>
          <p>Your daily dose of happiness, unfiltered.</p>
          <div className="socials">
            <a href="https://www.instagram.com/p/C87fAL5txJY/?img_index=1" target='_blank'><img src="https://scontent.cdninstagram.com/v/t51.2885-15/449657786_1528116321126166_1982200978850267174_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=AuiwhvyujHcQ7kNvgGIz6FU&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYCOjXBtsxrqz74FNTs_dC1dum6TJ_FVlAtlpRpZ_cPR2g&oe=668AA2AB" alt="" /></a>
            <a href="https://www.instagram.com/reel/C85RFAyP-25/" target='_blank'><img src="https://scontent.cdninstagram.com/v/t51.29350-15/449528725_367403692683704_1074034511451898721_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=7dJ_nLf-CtoQ7kNvgHtDosj&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYCFSJdPVHsPh066i6E9W2DLY6AT0E8BjziKt5uUKf_ksw&oe=668AB307" alt="" /></a>
            <a href="https://www.instagram.com/reel/C8wmsn7qErH/" target='_blank'><img src="https://scontent.cdninstagram.com/v/t51.29350-15/449141778_887838633120045_2601357687583705111_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=nOkjX5ScavkQ7kNvgG5XA9H&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYBxw3SW0O922TBXapgLtlnb3VAMR_JYRkvJlUjheEZ8fQ&oe=668AC097" alt="" /></a>
            <a href='https://www.instagram.com/p/C8rq2Rkteny/' target='_blank'><img src="https://scontent.cdninstagram.com/v/t51.2885-15/449144524_1400230267307332_8484024317219852576_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=lqfazUX6w94Q7kNvgEERiE_&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYAZ0VrwTIUBAA2h5wFuKm2RNYOlDSq5i4Cp3xTASrcHvw&oe=668AA3EC" alt="" /></a>
          </div>
        </div>

    </div>
  )
}

export default Prefooter

