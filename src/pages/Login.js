import React, { Component } from 'react'
import { FaUserGraduate } from 'react-icons/fa'
import feesimg from '../assets/featured-graphic.jpg'
import KnustBadge from '../components/KnustBadge'
import MyNavbar from '../components/MyNavbar'
import WOW from 'wowjs'

class Login extends React.Component {
  componentDidMount() {
    new WOW.WOW({
      live: true,
    }).init()
  }

  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <KnustBadge />
        <MyNavbar />
        <div className='container text-center'>
          <div className='row justify-content-start align-items-start g-3 my-3'>
            <div className='col-md-6'>
              <div
                className='card bg-light text-light wow slideInDown'
                data-wow-duration='2s'
              >
                <div className='card-header bg-dark d-flex justify-content-center'>
                  <span>
                    <FaUserGraduate style={{ fontSize: '2rem' }} />
                  </span>
                  <h3 className='card-title mx-2'>Login</h3>
                </div>
                <div className='card-body text-dark my-2'>
                  <form action=''>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control wow bounceInLeft'
                        placeholder='Username'
                        data-wow-delay='1s'
                      />
                    </div>
                    <br />
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control wow bounceInLeft'
                        placeholder='Password'
                        data-wow-delay='2s'
                      />
                    </div>
                    <br />
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control wow bounceInLeft'
                        placeholder='Student ID'
                        data-wow-delay='3s'
                      />
                    </div>
                    <br />
                    <button
                      type='submit'
                      className='btn btn-dark form-control wow bounceInLeft'
                      data-wow-delay='4s'
                    >
                      Sign In
                    </button>
                    <a
                      href=''
                      className='card-link d-block text-decoration-none my-4'
                    >
                      Forgot your Password?
                    </a>
                  </form>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <img
                src={feesimg}
                alt=''
                className='img-fluid rounded d-block mx-auto wow slideInDown'
              />
              <p
                className='bold wow slideInDown'
                style={{ fontWeight: 'bolder', fontSize: '1.5rem' }}
              >
                You can pay fees through the KNUST AIM or the payment portal
              </p>
              <div style={{ lineHeight: '2rem' }}>
                <a
                  href='https://play.google.com/store/apps/details?id=gh.edu.knust.aim'
                  className='text-danger d-block text-decoration-none wow slideInDown'
                  target='_blank'
                  style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}
                >
                  Download KNUST AIM
                </a>
                <a
                  href=''
                  className='text-danger d-block text-decoration-none wow slideInDown'
                  style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}
                >
                  Visit the payment portal
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className='text-center small pt-4'>
          copyright{' '}
          <a href='/' className='text-decoration-none '>
            Computer Science Society
          </a>{' '}
          &copy; 2021
        </p>
      </div>
    )
  }
}

export default Login
