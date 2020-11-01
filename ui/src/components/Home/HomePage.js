import React, {useState, useref} from 'react';
import {Link} from 'react-router-dom';
import EmptySideBar from '../common/EmptySideBar';
import SideBarComponent from '../common/SideBarComponent';
import images from '../../assets/photos';
import DonateLikeButton from '../common/DonateLikeButton';
import CommonSection from '../common/CommonSection';
import FirstTwitterIframe from './FirstTwitterIframe';
import Iframe3 from './Iframe3';
import Ifreme2 from './Ifreme2';
import Iframe4 from './Iframe4';
import Iframe5 from './Iframe5';
import NormalCard from '../common/NormalCard';

export default function HomePage() {

    

    const [showSideBar, setShowSideBar] = useState(false);
    const [isMouseOut, setisMouseOut] = useState(false);


    return (
        <div className="home-container">
       
           <div onMouseOver={() => setShowSideBar(true)}  style={{backgroundColor: '#000'}} >
               {
                   !showSideBar ? ( <EmptySideBar />) : (<SideBarComponent  />)
               }
           </div>
           <div>
            
               <CommonSection  classname="" imgphoto={images.homeImage1} heading="Hope Amidst Violence" btntext="Get engaged" alt="image1"/>
               <CommonSection  classname="second-section" imgphoto={images.homeImage2} heading="Meet Anguish with Action" btntext="Explore resources and take action" alt="image2"/>
               <CommonSection  classname="common-section" text="The Obama Foundation's mission is to inspire, empower, and connect people to change their world." imgphoto={images.homeImage3} heading="Our mission" btntext="See how we do it" alt="image3"/>
               <CommonSection  classname="common-section" text="We started My Brother’s Keeper so that every boy and young man of color in America would know that their dreams mattered as much as any other child’s." imgphoto={images.homeImage4} heading="MY BROTHER'S KEEPER ALLIANCE" btntext="Join the Alliance" alt="image4"/>
               <CommonSection  classname="common-section" text="Bring hope home" imgphoto={images.homeImage5} heading="THE OBAMA PRESIDENTIAL CENTE" btntext="Explore the Center" alt="image5"/>

           </div>
           <div className="home-donate-btn-div">
               <DonateLikeButton><Link to="/donate" style={{textDecoration: 'none', color: 'white'}}>Donate</Link></DonateLikeButton>
           </div>
           <section className="all-cards-container-section">
               <div className="cards-group">
               <div className="card-container-div " style={{marginBottom: '-10px'}}>
                  <div className="shadow-div"></div>
               </div>
               <div >2</div>
               <div >
                    <FirstTwitterIframe />
               </div>
               <div style={{marginTop: '-40px'}} >
                   <NormalCard pic={images.imagecard2} 
                   title="Announcing Obama Foundation Leaders: Europe!" 
                   text={`The Obama Foundation Leaders: Europe program is our newest regional program, following in the footsteps of Leaders: Africa and Leaders: Asia Pacific. In response to the COVID-19 pandemic, the program is fully virtual! Get to know the first cohort of emerging leaders working on a wide range of issues in 18 countries across the region.`}
                   link={`Meet the leaders +`}
                   />
            
               </div>


               <div >
               <NormalCard 
                    title={`On Senior Citizens Day, Meet Some of Chicago’s Elders Making a Difference`} 
                    pic={images.imagecard4}
                    text={`Get to know seven Chicagoans who have spent decades creating sustainable change in their respective communities, and read what advice and wisdom they have for the next wave of leaders who will carry forward their work.`}
                    link={`Read more +`}
                    />
               </div>

               <div style={{marginTop: '-350px'}} >
               <NormalCard 
                 title={`Meet the newest class of Obama Foundation Scholars!`} 
                 text={`We just announced our third cohort of Obama Scholars, 11 rising leaders from around the world who will study at Columbia University for the 2020-2021 academic year, which will begin virtually.`}
                 pic={images.imagecard3}
                 link={`Get to know the Scholars +`}
                 />
               </div>


               <div >
                <NormalCard 
                title={`Young Leaders Continue Peacebuilding 75 Years After the Atomic Bombings`}
                pic={images.imagecard6}
                text={`For Sanae Ogino, an Obama Leader and a native of Hiroshima, August 6, 1945 was never a distant historical moments. It was part of the fabric of her family’s story. Sanae’s grandmother narrowly missed being killed by the atomic bomb, but witnessed unimaginable destruction in the aftermath.`}
                link={`Learn more about Sanae’s work and read a special message from President Obama on the solemn anniversary +`}

                />
               </div>


               <div style={{marginTop: '-360px'}}  >
                  <NormalCard 
                   title={`The Creative Brief with Tye Moores`}
                   pic={images.imagecard5}
                   text={`When we wanted to lift up the stories of Antonio Davis, Asiaha Butler, and Kemdah Stroud—three grassroots leaders working on the South Side of Chicago to make a difference—we turned to Chicago-based artist and photographer Tyesha Moores. Learn how the Austin neighborhood native brought their stories to life.`}
                    link={`Read the profile +`}

                   />
                   
               </div>
               <div >
               <Ifreme2 />
               </div>


               <div style={{marginTop: '-300px'}}  >
                   <NormalCard 
                   title={`On President Obama’s Birthday, See How He’s Inspiring the Next Generation of Leaders`}
                   date="August 4, 2020"
                   pic={images.imagecard7}
                   text={`On President Obama’s 59th birthday, see how he has spent his time following his presidency inspiring the next generation of leaders. From Chicago to Amsterdam, check out some of our favorite Obama Foundation moments.`}
                   link={`See the photos +`}
                   
                   />
               </div>


               <div >
                <NormalCard
                    title={`Watch Congressman John Lewis Meet with MBK Youth and President Obama in 2018`}
                    pic={images.imagecard8}
                    text={`In 2018, President Obama and Congressman John Lewis participated in a My Brother’s Keeper Alliance roundtable with students from Ron Brown College Preparatory High School in Washington, D.C. to honor the 50th anniversary of Martin Luther King Jr.’s death. Watch as Rep. Lewis discusses his friendship and work with Dr. King, and reflects on his own experiences as a trailblazing activist.`}
                    link={`Watch the roundtable conversation +`}
                />
               </div>

                
               <div style={{marginTop: '-270px'}}  >
               <NormalCard 
                   title={`Watch the Last Public Conversation President Obama Shared with Rep. John Lewis`} 
                   date="July 20, 2020"
                   text={`In honor of Rep. John Lewis’ passing, we sent the message below to our email list to share more information about the virtual town hall…`}
                   link="More +"    
                   />
               </div>

               <div >
               <Iframe3 />
               </div>
           

               <div style={{marginTop: '-650px'}} >
                <NormalCard
                 text={`Ten years ago today, President Obama signed the most far-reaching Wall Street reform in history, a major milestone in the wake of the Great Recession to strengthen the American economy and help guard against future financial crises. Learn what caused the 2008 financial crisis and how the Obama administration responded through the voices of those who were a part of it: President Obama, Senator Elizabeth Warren, Timothy Geithner, and more.`}
                 video={images.video1}
                 classname="video-content-wrapper"
                 />
               </div>


               <div >
                    <NormalCard 
                        title={`Celebrate the Class of 2020!`}
                        text={`No one does big things by themselves. That’s why we called on our audience to share some words of encouragement for the Class of 2020. Check out some of these uplifting messages—and show us how you’re celebrating this year’s graduating class.`}
                        pic={images.imagecard9}
                        link={`See more +`}
                    
                    />
               </div>
             

               <div style={{marginTop: '-900px'}}  >
                <NormalCard
                 text={` Five years ago, our nation underwent a day of momentous change, grace, and celebration. June 26, 2015, brought the Supreme Court’s landmark ruling in favor of same-sex marriage, President Obama’s eulogy of Reverend Clementa Pinckney, who was killed alongside eight of his parishoners at Mother Emanuel AME, and the lighting of the White House in rainbow colors in recognition of marriage equality. Relive each moment of this historic day through the voices of those who lived through it and gave it meaning: President Obama, Jim Obergefell, Valerie Jarrett, and more.`}
                 video={images.video2}
                 classname="video-content-wrapper"
                 />
               </div>



               <div >

                   <NormalCard
                   pic={images.imagecard11}
                   title={`Read President Obama’s Message: This Shouldn’t Be Normal`}
                   date="May 30, 2020"
                   text={`Today, we sent the message below to our email subscribers about President Obama’s response to the tragic killing of George Floyd. If you’d like to…`}
                   link=" More +"
                   />

               </div>
           

               <div style={{marginTop: '-900px'}}  >
                    <Iframe4 />
               </div>


               <div >
                <NormalCard
                 text={`Watch President Obama discuss the importance of MBK Alliance's work across the United States.`}
                 video={images.video4}
                 classname="video-content-wrapper"
                 />
               </div>


               <div style={{marginTop: '-900px'}}  >
                <NormalCard
                 text={`
                 President Obama joined Former U.S. Attorney General Eric Holder, 
                 President of Color of Change Rashad Robinson, Minneapolis City Council Representative Phillipe Cunningham, and MBK Columbus Youth Leader Playon Patrick, in a conversation moderated by Campaign Zero co-founder Brittany Packnett Cunningham. Together, they discussed the tragic events of recent weeks, 
                 the history of police violence in America, and specific actions needed to transform a system that has led to the loss of too many lives.
                 `}
                 video={images.video3}
                 classname="video-content-wrapper"
                 />
               </div>
           

               <div >
                   <NormalCard 
                   date="April 20, 2020"
                   title={`How We’re Responding in This Time of Need`} 
                   text={`Yesterday, Obama Foundation Chief Executive Officer David Simas sent the message below to our email subscribers about our response to the COVID-19 pandemic. If you’d…`}

                   link=" More +"
                   />
               </div>
          
        
            

               <div className="card-container-div" style={{marginTop: '-700px'}} >
                   <div className="only-heading-div">
                        <h3>
                        So much of the progress that we've made in our society has been because of young people.
                        </h3>
                        <p>
                            PRESIDENT OBAMA, 2020
                        </p>
                   </div>
               </div>
              

                  <div >

                   <NormalCard 
                   title={`Asked and Answered: Five-year-old tells President Obama she can’t wait to visit the Obama Presidential Center`}
                   pic={images.imagecard10}
                   text={`In keeping with President Obama’s longstanding tradition of reading and responding to letters from the American people, we’re excited to share an adorable letter he received from five-year-old Pennsylvanian Cori Ryan. `}
                   link=" See for yourself +"
                   
                   />
               </div>
               
            
               <div style={{marginTop: '-850px'}} >
               <Iframe5 />
               </div>

             
               <div  >
                <NormalCard
                 text={`
                 
                 In honor of Black History Month, we're reflecting on Frederick Douglass' visit to Jackson Park during the World’s Columbian Exposition in 1893. Jackson Park is preparing to repeat its historical role as a place of honor for America’s black icons as the site of the future Obama Presidential Center. During Black History Month and every month,
                  we are constantly reminded that we stand on the shoulders of those who came before us.
                 `}
                 video={images.video5}
                 classname="video-content-wrapper"
                 />
               </div>



               <div style={{marginTop: '-500px'}} >
                   <NormalCard 
                   title={`NBA All-Star Weekend in Chicago`}
                    date="February 18, 2020"
                    text={`With NBA All-Star weekend coming back to Chicago, you could be sure President Obama wouldn't miss it. Check out our highlights from the weekend below.`}
                    link=" Learn More +"
                   />

               </div>


{/*               
               <div >18</div>
               <div >
                  19
               </div>
             
         
               <div >22</div> */}
           
               </div>


        
           </section>
        </div>
    )
}
