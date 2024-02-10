import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import '../../../Style.Footer.css'

const inputStyle = {
  padding: '5px',
  border: '1px solid #ccc',
  borderRadius: '3px',
  width: '100%',
}

const textareaStyle = {
  width: '100%',
  padding: '5px',
  border: '1px solid #ccc',
  borderRadius: '3px',
}

function Footer() {
  return (
    <footer>
      <div className='footer'>
        <div className='row'>
          <a href='#'>
            <FaFacebook />
          </a>
          <a href='#'>
            <FaInstagram />
          </a>
          <a href='#'>
            <FaLinkedin />
          </a>
        </div>

        <div className='row'>
          {/* <ul>
            <li>
              <a href='#'>Contact us</a>
            </li>
            <li>
              <a href='#'>Our Services</a>
            </li>
            <li>
              <a href='#'>Privacy Policy</a>
            </li>
            <li>
              <a href='#'>Terms & Conditions</a>
            </li>
          </ul> */}
        </div>
        <form
          action='mailto:techofreact@gmail.com'
          method='POST'
          encType='text/plain'
          name='EmailForm'
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
          }}
        >
          <div style={{ marginBottom: '10px' }}>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Your Name'
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <textarea
              id='ContactComment'
              name='ContactComment'
              rows={4}
              cols={50}
              style={textareaStyle}
              placeholder='Your Message'
            />
          </div>
          <input
            type='submit'
            value='Send'
            style={{
              cursor: 'pointer',
              backgroundColor: '#007BFF',
              color: 'white',
              padding: '10px  20px',
              border: 'none',
              borderRadius: '3px',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: '16px',
              margin: '4px  2px',
              transitionDuration: '0.4s',
            }}
          />
        </form>
        <div className='row'>
          Bole, Behind Aberus Building <h4>1st Floor, Room No, 010/015</h4>
        </div>
        <div className='row' style={{ lineHeight: 1.4 }}>
          Globe General Constraction Copyright Addis Ababa, Ethiopia © 2023 -
          All rights reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer
