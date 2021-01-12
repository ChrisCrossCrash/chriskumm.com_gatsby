import React, {useState} from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import TextInput from './TextInput'

const ContactForm = () => {
  const [success, setSuccess] = useState(false)

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(50, 'Must be 50 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        message: Yup.string()
          .required('Required'),
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
      {({isSubmitting}) => (
        <Form>
          <TextInput variant='input' id='name' label='Name' name='name' type='text'/>
          <TextInput variant='input' id='email' label='Email' name='email' type='email'/>
          <TextInput variant='textarea' id='message' label='Message' name='message'/>

          {/* TODO: Develop this button a bit further. There might be some accessibility concerns about */}
          {/*  simply lowering opacity and setting pointer events to none when the button is disabled. */}

          <button
            className={`mt-0.5 bg-gray-500 text-white py-3 px-5 rounded-lg font-bold shadow
        focus:ring focus:ring-gray-300 hover:bg-gray-600 transition disabled:opacity-50 disabled:pointer-events-none
        ${success && 'bg-green-600'}`}
            type='submit'
            disabled={isSubmitting || success}
          >Submit
          </button>
          {success && <div className='text-green-600 text-sm pt-2 absolute'>
            Thanks for contacting me! I'll get back to you as soon as possible{' '}
            <span role='img' aria-label='grinning face with smiling eyes emoji'>😄</span>
          </div>}
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm