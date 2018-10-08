import * as React from 'react';
import PageContainer from '../components/PageContainer';
import { Link } from "gatsby"

export default function ContactPage({ data }) {
  return (
    <PageContainer title="Volunteer">
      <p>
        The Daily Bruin Alumni Network is dedicated to supporting the Daily Bruin
        and its thousands of alumni across the globe. In 2018, the UCLA Alumni
        Association recognized the group as an affinity network at the DBAN's
        first reunion on campus.
      </p>
      <p>
        Through robust networking, mentoring and fundraising, we hope to build the
        Daily Bruin Alumni Network to support our fellow alumni and The Bruin.
        Please see the areas below that we are focusing on in the 2018-19 year.
      </p>
      <p>
        To get involved in any of these committees, please <Link to="/contact/">
        contact the alumni network's leadership team here.</Link>
      </p>
      <h2>COMMITTEES AND PROJECTS</h2>
      <h3>MEMBERSHIP & NETWORKING</h3>
      <p>
        There are over 2,000+ UCLA alumni with known ties to the Daily Bruin,
        but we need help getting them to join the Daily Bruin Alumni Network.
        This committee will work with the UCLA Alumni Association to bring more
        of our fellow alumni home, creating a comprehensive alumni directory and
        helping foster alumni connections through regional meet-ups and outreach.
        With a better understanding of our own alumni base and expertise contained
        therein, this group will work closely with the Mentoring team to connect
        students with alumni in various professions and with the Daily Bruin's
        student alumni director on newsletters, website updates and social media.
      </p>
      <h3>EVENTS & #DB100</h3>
      <p>
        Partnering with the UCLA Alumni Association and the Daily Bruin staff, this
        committee will plan and host the Daily Bruin's 100th birthday celebration
        in the 2019-2020 centennial academic year of UCLA. Committee members will
        develop daytime panels and workshops for students and alumni, along with dinner
        speakers and presenters. They will promote the event and recruit corporate
        partners to help subsidize and scale up the centennial celebration. This
        committee will also help lead nominations and awarding of the DBAN
        Distinguished Alumni Award.
      </p>
      <h3>SCHOLARSHIPS & FUNDRAISING</h3>
      <p>
        By the #DB100 Celebration, we aim to raise $20,000 for urgent equipment replacement
        needs at The Bruin ($10,000 alumni gift) and the first awards of the Daily Bruin
        Alumni Scholarship for students pursuing careers in journalism at The Bruin (four
        scholarships of $2,500 each). This committee will develop processes and administer
        the scholarship, including applications and interviews. It will cultivate donors and
        generate leads for possible contributions. With our partners at the UCLA Development
        Office and Student Support Initiative Office, members will study and develop a long-term
        DBAN alumni scholarship endowment.
      </p>
      <h3>ALUMNI MENTORING PROGRAM</h3>
      <p>
        In the 2018-2019 academic year, this group will help provide periodic professional critiques
        of Daily Bruin productions, both print and online editions, and host career preparation sessions.
        The committee will work with the Membership team to connect student staffers with alumni for career
        guidance. This team will also work closely with the Daily Bruin's student alumni director to develop
        the best ways to help students.
      </p>
      <h2>MEET THE ALUMNI NETWORK</h2>
      <h3>LEADERSHIP TEAM</h3>
      <p>Lawrence Ma '95 & Tanner Walters '18 | Daily Bruin Alumni Network co-chairs</p>
      <p>Jacqueline Alavarez '19 | Alumni Relations Director, Daily Bruin 2018-19</p>
      <h3>CLASS CAPTAINS</h3>
      <p>
        2010’s: Nicole Vas '10, Sam Schaefer '11, James Barragan '13, Jillian
        Beck '14, Jose Ubeda '15, Fran Manto '16, Emaan Baqai '17
      </p>
      <p>2000’s: Sara Randazzo '08, Kelly Rayburn '04, Kate Stanhope '09</p>
      <p>1990’s: Missy Anderson '96, Christine Strobel '94, Chris Schreiber '95</p>
      <p>1980’s: Elisa Williams '82, Michael Bartlett '88</p>
      <h3>REUNION TEAM</h3>
      <p>Jillian Beck '14, Gil Hopenstand '97, Don Rosen '86</p>
      <h3>NETWORK COMMITTEE MEMBERS</h3>
      <p>
        Alejandra Reyes Velarde '17, Lauren Jow '12, Tyson Evans '05, Phil
        Carter '96, Wendy Witherspoon '90, Nancy McCullough '89, Lauren Bartlett
        '88, Alice Short '77
      </p>
    </PageContainer>
  );
}
