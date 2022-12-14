import React,{FC} from 'react'
import { Paper, Grid, Typography, Box, Stack, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon  from '@mui/icons-material/Edit'



interface BookItemProps {
  handleUpdate: (book:{name:string,author: string, cover:string,date:string})=>void
  deleteBook: (id: string | number) => void
  book: {   id?: string , name:string,  author: string, cover:string, date:string }

}

export const BookItem: FC <BookItemProps> = ({ book ,handleUpdate, deleteBook}) => {

  const { id,name, author,cover,date } = book


  return (

    <Grid item xs={3.5} md={2.5} >
      <Paper elevation={6}>

          <img src={cover}  alt='book img'
          width='100%' height='150px' 
         />
        

        <Box mt={1.5} pl={1.5} >
       
          <Typography variant='h3'
            fontWeight='500'
            fontSize='0.8rem'
          >
            {name} 
          </Typography>
        <Stack direction="row" justifyContent='space-between'>
        <Typography component='p'
            fontWeight="300"
            fontSize="0.7rem"
            textAlign='left' p={1}>
            {author}
          </Typography>
          <Typography component='p'
            fontWeight="300"
            fontSize="0.7rem"
            textAlign='left' p={1}>
            {date}
          </Typography>

          </Stack> 
          <Stack direction='row' justifyContent='space-between'>
          <IconButton  onClick={()=> id && deleteBook(id)}>
            {/* here we add delete-book function  */}
            <DeleteIcon  />
          </IconButton>
          <IconButton onClick={()=>handleUpdate(book)}>
            <EditIcon />
          </IconButton>
          </Stack>
        </Box>
  

      </Paper>
    </Grid>

  )
}

export default BookItem;
