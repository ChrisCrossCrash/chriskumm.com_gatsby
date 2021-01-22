import React, {useEffect, useRef, useState} from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import TextInput from './TextInput'
import Spinner from './Spinner'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ContactForm = () => {
  const [success, setSuccess] = useState(false)

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)
  const submitRef = useRef(null)

  useEffect(() => {
    const stagger = 0.2
    gsap.timeline({scrollTrigger: nameRef.current})
      .from([nameRef.current, emailRef.current, messageRef.current], {
        opacity: 0,
        x: -200,
        duration: 0.5,
        stagger: stagger,
      })
      .from(submitRef.current, {duration: 0.3, opacity: 0}, '>-0.3')
  }, [])

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      validationSchema={Yup.object({
        // Don't forget to match these restrictions in the back end!
        name: Yup.string()
          .max(50, 'Must be 50 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        message: Yup.string()
          .required('Required')
          .max(5000, 'must be 5000 characters or less'),
      })}
      onSubmit={async (values) => {
        // What happens during form submission with Formik?:
        // https://formik.org/docs/guides/form-submission

        let response, data

        try {
          response = await fetch(`${process.env.DJANGO_URL}/api/submit-inquiry/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          })
          console.log('response:', response)
          data = await response.json()
        } catch (error) {
          alert(`Something went wrong:\n\n${error.name}: ${error.message}`)
        }

        if (response.status === 201) {
          setSuccess(true)
        } else {
          alert(
            `Something went wrong (response code: ${response.status}):
          \n\nsent data:\n${JSON.stringify(values, null, 2)}
          \n\nserver response:\n${JSON.stringify(data, null, 2)}`,
          )
        }
      }}
    >
      {({isSubmitting}) => {

        let buttonText

        if (isSubmitting) {
          buttonText = <Spinner className='mx-5'/>
        } else {
          buttonText = success ? 'Thanks!' : 'Submit'
        }

        return (
          <Form>
            <TextInput ref={nameRef} variant='input' id='name' label='Name' name='name' type='text'/>
            <TextInput ref={emailRef} variant='input' id='email' label='Email' name='email' type='email'/>
            <TextInput ref={messageRef} variant='textarea' id='message' label='Message' name='message'/>

            <button
              ref={submitRef}
              className={`inline-block submit-btn submit-btn-gray ${success ? 'submit-btn-success' : ''}`}
              type='submit'
              disabled={isSubmitting || success}
              style={{minWidth: '10ch'}}
            >
              {buttonText}
            </button>
            {success && <div className='text-green-600 text-sm pt-2 absolute'>
              Thanks for contacting me! I'll get back to you as soon as possible{' '}
              <span role='img' aria-label='grinning face with smiling eyes emoji'>😄</span>
            </div>}
          </Form>
        )
      }}
    </Formik>
  )
}

export default ContactForm