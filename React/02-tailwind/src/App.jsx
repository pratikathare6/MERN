
import './App.css'
import Section1 from './section1/section1'

function App() {


    const users=[

      {img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Prime customers that have access to bank credit and aresatsfied with the current product',
        tag:'Satisfied',
        color:'#0046FF'
      },
       {img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Prime customers that have access to bank credit and are not satisfied with the current service',
        tag:'Underserved',
        color:'orange'
      },
       {img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
        description: 'Customers from near prime segments with no access to bank credit',
        tag:'Underbanked',
        color:'#7ADAA5'
      },
          {img: 'https://images.unsplash.com/photo-1611532736570-dd6b097ecbb3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
        description: 'Customers from near prime segments with no access to bank credit',
        tag:'Underbanked',
        color:'#78B9B5'
      }

    ]
  
  return (
    <>  

      <Section1 users={users}/>
      
    </>
  )
}

export default App
