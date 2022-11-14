import React, { FC, useState } from 'react'
import { Box, Stack, Button, FormControl, Modal } from '@mui/material'
import { TextField } from "formik-mui";
import { Formik, Form, Field } from 'formik'
import { BookSchema } from './BookSchema'


const BookForm: FC = () => {

  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={{
              name: '',
              author: '',
              cover: '',
              publishAt: new Date()
            }}
            validationSchema={BookSchema}

            onSubmit={(values) => {
              console.log('Form Value', values)
              //  setTimeout( ()=>{
              //  setOrderData({
              //    ...orderData,
              //    firstName:values.firstName,
              //    lastName:values.lastName,
              //    email:values.email
              //  })
              // handleNext()
              //  },500)
            }}
          >

            <Form autoComplete="off">

              <Box mt={5}>

                <FormControl sx={{ m: '1.3rem 5rem' }}>

                  <Field
                    component={TextField}
                    id="name"
                    label="Book Name"
                    name='name'
                  />
                </FormControl>

                <FormControl sx={{ m: '1.3rem 5rem' }}>
                  <Field
                    component={TextField}
                    id="author"
                    label="Author Name"
                    name='author'

                  />
                </FormControl>

                <FormControl sx={{ m: '1.3rem 5rem' }}>

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
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default BookForm;