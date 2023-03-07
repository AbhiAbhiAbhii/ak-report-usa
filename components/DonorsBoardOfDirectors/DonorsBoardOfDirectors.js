import React from 'react';
import Image from 'next/image';
import { DonorsStyled } from './Style';
import config from '../../config';

const imgLoader = ({ src, quality }) => {
  return `${src}?&q=${quality || 95}`
}
function DonorsBoardOfDirectors({hide}) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  const projector = [
    {
      title: 'Ana and Ankoor Shah'
    },
    {
      title: 'Anjum Khan and Sajjad Ladiwala'
    },
    {
      title: 'Asheet Mehta and Kirtana Pai'
    },
    {
      title: 'Bharti Malkani and Vijay Jayant'
    },
    {
      title: 'Brande and David Stellings'
    },
    {
      title: 'Colette and Jawad Haider'
    },
    {
      title: 'Fally and Vikram Malkani'
    },
    {
      title: 'Girish and Shikha Bhakoo'
    },
    {
      title: 'Himanshu Choksi'
    },
    {
      title: 'Kate Shoemaker and Anand Srinivasan'
    },
    {
      title: 'Leo and Nathalie Joseph'
    },
    {
      title: 'Lorie and David Broser'
    },
    {
      title: 'Medha and Milind Prakash'
    },
    {
      title: 'Nymrata Advani and Yunus Bickici'
    },
    {
      title: 'Priya and Gaurav Hariani'
    },
    {
      title: 'Ramesh Srinivasan and Charuta Joshi'
    },
    {
      title: 'Reena Batra'
    },
    {
      title: 'Sachin Jindal and Sukanya Jain'
    },
    {
      title: 'Steadview Capital (Ravi and Nicolette Mehta/Kalp Parekh)'
    },
    {
      title: 'Seema Bhushan and Prashant Ranade'
    },
    {
      title: 'Seema Deshpande and Gaurang Shah'
    },
    {
      title: 'Sejal and Hemang Desai'
    },
    {
      title: 'Shankar and Sunita Iyer'
    },
    {
      title: 'Srividya Prakash and Anirudh Samsi'
    },
    {
      title: 'Taranbir Singh and Jasmine Kaur'
    },
  ]

  return (
    
    <DonorsStyled className={hide?'section_story':'section_story section-show'} id="donors-board-of-directors">
        <div className="background">
                <img  src="/assets/images/donors-board-of-directors-bg-thumb.jpg"  style={{ display: isLoaded ? "none" : "block" }} className="image thumb"/>
                <img className="image full"  src="/assets/images/donors-board-of-directors-bg.webp"  onLoad={() => {setIsLoaded(true);}} style={{ opacity: isLoaded ? 1 : 0 }}/>
            </div>

            <div className="foreground">
              <Image loader={imgLoader} src="/assets/images/donors-board-of-directors-fg.webp"  layout='fill'
    objectFit='contain' />
            </div>
            <div className="dig-1" id="digPos-8-1"></div>
            <div className="dialogue" id="dialogue-8-1">
                <p>
                While Akanksha has made me a hero, Akanksha
                personified is my role model! Akanksha has
                reinvented itself in the midst of an
                unprecedented adversity by not shying away
                from asking a fundamental question: What is
                the purpose of a school? It has always laid
                emphasis on holistic development of its
                students by enhancing their intelligence as well
                as emotional quotient.
                </p>
            </div>
            <div className="dig-2" id="digPos-8-2"></div>
            <div className="dialogue" id="dialogue-8-2">
                <p>
                Moreover, Akanksha has taught me to aspire for
                the stars (with sun being our symbol) and
                achieve excellence while staying humble and
                grounded. It has inspired me to be the change
                not only for myself but for the extended
                ecosystem as well. If I can imbibe Akanksha’s
                qualities, I will consider my life successful!
                </p>
            </div>
            <div className="dig-3" id="digPos-8-3"></div>
            <div className="dialogue" id="dialogue-8-3">
                <p>
                On behalf of my fellow students, alums and
                team Akanksha, I sincerely thank our supporters
                who continue to back us.
                </p>
            </div>
            <div className='contentScroll'>
            
              <div className='marquee'>
                <ul>
                  {
                    projector.map((obj,i) => {
                      return(
                        <li key={i}>{obj.title}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>

            <div className='ways-to-engage' style={{zIndex:'10',position:'absolute',top:'30%',left:'49.6%',marginLeft:'25%',height:'30%',width:'11.6%'}}>
                  <div style={{height:'100%',width:'100%',position:'relative'}}>
                    <div style={{position:'absolute',top:'36%',left:'8%',height:'40%',width:'10%',cursor:'pointer'}}>
                      <div style={{width:'100%',height:'100%'}}>
                        <a href='https://akankshafund.org/join-the-aspire-circle/' target="_blank">&nbsp;</a>
                      </div>
                    </div>
                    <div style={{position:'absolute',top:'20%',left:'20%',height:'40%',width:'10%',cursor:'pointer'}}>
                      <a href='https://akankshafund.org/become-a-corporate-partner/' target="_blank" rel="noreferrer">&nbsp;</a>
                    </div>
                  </div>
            </div>
                  {/*  */}
            <div className='view-finance' style={{height:'100%'}}>
              {/* <a href={config.reportFile} target="_blank" rel="noreferrer">&nbsp;</a> */}
              <div style={{height:'100%',position:'relative'}}>
                <div className='view-financial-link' style={{height:'10%',width:'50%', position:'absolute',left:'5%',top: '33%',cursor:'pointer'}}>
                  <a style={{}} href='https://akankshafund.org/wp-content/uploads/2023/02/Akanksha-Edu-Fund_03.31.22_Financial-Statements.pdf' target="_blank" rel="noreferrer">&nbsp;</a>
                </div>
                <div className='form-990' style={{height:'10%',width:'30%', position:'absolute',right:'5%',top: '33%',cursor:'pointer'}}>
                  <a href='https://akankshafund.org/wp-content/uploads/2023/02/Akanksha-Edu-Fund_Public-Inspection-Copy_Form-990.pdf' target="_blank" rel="noreferrer">&nbsp;</a>
                </div>
                <div className='visit-us-here-link' style={{height:'10%',width:'30%', position:'absolute',right:'35%',bottom: '42%',cursor:'pointer'}}>
                  <a href='https://akankshafund.org/' target="_blank" rel="noreferrer">&nbsp;</a>   
                </div>
              </div>
            </div>
    </DonorsStyled>
  )
}

export default DonorsBoardOfDirectors