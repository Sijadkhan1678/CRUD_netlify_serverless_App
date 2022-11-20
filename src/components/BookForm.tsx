import React, { FC, useState } from 'react'
import { Box, Stack, Button, FormControl, Modal } from '@mui/material'
import { TextField } from "formik-mui";
import { Formik, Form, Field } from 'formik'
import { BookSchema } from './BookSchema'

interface BookFormProps {
  handleModal: () => void

  open: boolean
  
  current: {
    id?: string
    name: string
    author: string
    cover: string
    date: string
    
  } | null

  setCurrent: React.Dispatch<React.SetStateAction<{
    id?: string
    name: string;
    author: string;
    cover: string;
    date: string

  } | null>>

  addBook: (book: {
    name: string
    author: string
    cover: string
    date: string
  }) => void

  updateBook: ( book: {

    id?: string 
    name: string
    author: string
    cover: string
    date: string

  }) => void
}

interface Book {
  id?: string 
  name: string
  author: string
  cover: string
  date: string
}

const BookForm: FC<BookFormProps> = ({ handleModal, open, current, setCurrent, addBook, updateBook }) => {


  const formData:Book = {
    name: '',
    author: '',
    cover: '',
    date: ''
}

  return (

    <div>
      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={ current !==null ? current : formData }
            validationSchema={BookSchema}

            onSubmit={(values) => {

              console.log('Form Value', values)

              if(current !== null)  {
                
                const updatedValue = {
                  id: current.id,
                  name: values.name,
                  author: values.author,
                  cover: values.cover,
                  date: current.date
                }
                updateBook(updatedValue)
                handleModal()
                setCurrent(null)
               
              } else {

                const book = {
                  name: values.name,
                  author: values.author,
                  cover: values.cover,
                  date: new Date().toDateString()
                }
                console.log('before added book added values',book)
                addBook(book)
                
                console.log('after added book added values',book);
                handleModal()

              }
             

              // setTimeout(() => {

                
              // }, 2000)
             
            }}
          >

            <Form autoComplete="off">

              <Box mt={3}>

                <FormControl sx={{ m: '1rem 5rem' }}>

                  <Field
                    component={TextField}
                    id="name"
                    label="Book Name"
                    name='name'
                  />
                </FormControl>

                <FormControl sx={{ m: '1rem 5rem' }}>
                  <Field
                    component={TextField}
                    id="author"
                    label="Author Name"
                    name='author'

                  />
                </FormControl>

                <FormControl sx={{ m: '1rem 5rem' }}>

                  <Field
                    component={TextField}
                    id="cover"
                    label="Book Cover URL"
                    name='cover' />
                </FormControl>
              </Box>

              <Stack m={3} direction='row' justifyContent='space-around'>

                <Button size='large'
                  variant='contained'
                  type='submit' >
                  Publish
                </Button>

              </Stack>
            </Form>

          </Formik>
        </Box>
      </Modal>
    </div>

  )
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '1rem',
  boxShadow: 24,
  p: 4,
};



export default BookForm;