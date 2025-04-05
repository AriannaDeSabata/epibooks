import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'
import WelcomeComponent from './components/WelcomeComponent';
import AllTheBooks from './components/AllTheBooks';

import { BrowserRouter } from 'react-router-dom';
import SingleBookComponent from './components/SingleBookComponent';
import CommentAreaComponent from './components/CommentAreaComponent';



/*describe('welcome test', ()=>{
  it('render welcome component',()=>{
    render(<WelcomeComponent/>)
    const welcome = screen.getByText(/Welcome to EpiBooks !/i)
    expect(welcome).toBeInTheDocument()
  })
})*/


/*describe('verifica numero di libri' ,()=>{

    it('verifica', ()=>{
      render(<App/>)
      const AllBooks = screen.getAllByTestId("book")
      expect(AllBooks).toHaveLength(150)
    })

})*/



/*describe('renderizzazione commentArea', ()=>{

  it('verifa renderizzazione commentArea',()=>{
    render(<CommentAreaComponent/>)
    const title = screen.getByRole("cont-commentArea")
    expect(title).toBeInTheDocument()
  })

})*/


/*describe('filtraggio dei libri', ()=>{
  it('filtro di ricerca',async()=>{
    render(<App/>)

    const input = screen.getByPlaceholderText('Search Book');
    fireEvent.change(input, { target: { value: 'The Last Wish: Introducing the Witcher' } })

    const AllBooks = await screen.findAllByRole('card-book')

    expect(AllBooks).toHaveLength(1)

  })
})*/


/*describe('cambio colore bordo', ()=>{
  it('verifica cambio colore', async ()=>{
      render(<App/>)
      const AllBooks = await screen.findAllByRole('card-book')
      
      const firstbookBorder = getComputedStyle(AllBooks[0]).borderColor
      
      fireEvent.click(AllBooks[0])

      const firstbookUpdateBorder = getComputedStyle(AllBooks[0])

      expect(firstbookBorder).not.toBe(firstbookUpdateBorder)
      
      fireEvent.click(AllBooks[1])

      const finalBorder = getComputedStyle(AllBooks[0]).borderColor
      expect(finalBorder).toBe(firstbookBorder)

  })

})*/


describe('test single Comment',()=>{
  it('verifica che non ci siano istanze di single component all\'avvio',()=>{
    render(<App/>)

    const singleComment = screen.queryAllByRole(/single-comment/i)
    expect(singleComment).toHaveLength(0)
  })

  it('verifica che al click su un libro vengano caricati i commenti', async () => { 
    render(<App />);

    const AllBooks = screen.getAllByTestId("book")
    
    expect(AllBooks).toHaveLength(150) 


    fireEvent.click(AllBooks[5])

    const Comments = screen.queryAllByRole('single-comment')

    expect(Comments).not.toHaveLength(0) 
  })

})

