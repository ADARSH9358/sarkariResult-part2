'use client'

const cardGroups = [
  {
    title: 'Result',
    links: [
      'Rajasthan RSSB LDC Result 2026',
      'Bihar DELED 2026 Face to Face Course Result',
      'NTA CSIR UGC NET E Certificate 2026',
      'UPTET Download Certificate 2026 | Correction Notice',
      'UPSSSC Assistant Store Keeper 2024 Final Result',
      'Reserve Bank RBI Assistant Mains Result 2026',
      'NEET PG 2026 Result',
      'IBPS Probationary Officer PO 16th Pre Result 2026',
      'Railway RRB Junior Engineer JE CEN 05/2025 CBT-2 Result & Cut-Off : List of candidates Shortlisted for Document Verification',
      'UPPSC Various Post 2024 Result 2026',
      'Bihar Vidhan Parishad Office Attendant, PA Marks 2026',
      'NTA AIAPGET Result / Score Card 2026',
      'UPPSC LT Grade Assistant Teacher Mains Result 2026',
      'AIIMS NORCET Nursing Officer 11th Result 2026',
      'UP DGMHUP ANM Training Selected Candidate List / Merit List 2026',
    ],
  },
  {
    title: 'Admit Card',
    links: [
      'Delhi High Court Junior Judicial Assistant JJA Admit Card 2026',
      'UPPSC Assistant Town Planner ATP 2025 Mains Exam City Details',
      'Chhattisgarh State Eligibility Test SET Admit Card 2026',
      'SSC Combined Graduate Level CGL 2026 Tier I Admit Card',
      'Bank of Baroda Local Bank Officer LBO Admit Card 2026',
      'Railway RRB Technician CEN 02/2026 Exam City Details 2026',
      'UPSSSC Junior Assistant 2024 Typing Test New Exam Date',
      'UPSSSC PET Online Form 2026 New Exam Schedule',
      'IBPS Probationary Officer PO 16th Mains Admit Card 2026',
      'UP Police Constable PET Exam Admit Card 2026',
      'NTA UGC NET June 2026 E Certificate Download',
      'Bihar STET Dummy Admit Card 2026',
      'UPSSSC Scientific and Lab Assistant Mains Admit Card 2026',
      'UPSSSC Forest Guard / Wild Life Guard Mains Admit Card 2026',
      'Uttarakhand UK TET UTET Admit Card',
    ],
  },
  {
    title: 'Latest Job',
    links: [
      'ITBP Head Constable Online Form 2026',
      'United India Insurance UIIC AO Online Form 2026',
      'Canara Bank Apprentices Online Form 2026',
      'Bank of India BOI Specialist Officers SO Online Form 2026 | Date Extended',
      'SBI SCO Wealth & Other Post Online Form 2026 | Date Extended',
      'IBPS RRB 15th Online Form 2026 | Date Extended',
      'Bihar BTSC Touring Veterinary Officer Online form 2026',
      'Bihar BTSC Food Safety Extension Officer Online form 2026',
      'BPSC School Teacher TRE 4.0 Online Form 2026',
      'IIT BHU Non Teaching Post Online Form 2026 | Date Extended',
      'BOB Wealth Management Services and Corporate IC Online Form 2026 | Date Extended',
      'Bihar BTSC Fishery Extension Officer Online form 2026',
      'UP Anganwadi Worker Bharti Hathras Online Form 2026',
      'UP Anganwadi Helper Bharti Hathras Online Form 2026',
    ],
  },
]

export default function ContentCards() {
  return (
    <section className="contentCards" aria-label="Latest Sarkari Result updates">
      {cardGroups.map((group) => (
        <article className="contentCard" key={group.title}>
          <h2>{group.title}</h2>
          <ul>
            {group.links.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </article>
      ))}

      <style jsx>{`
        .contentCards {
          width: min(100%, 1080px);
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          padding: 0 0 32px;
          font-family: Arial, Helvetica, sans-serif;
        }
        .contentCard {
          min-width: 0;
          overflow: hidden;
          border: 2px solid #f0a000;
          background: #fff;
        }
        .contentCard h2 {
          margin: 0;
          padding: 5px 8px 6px;
          background: #b5163d;
          color: #fff;
          font-size: 27px;
          line-height: 1.1;
          text-align: center;
        }
        .contentCard ul {
          margin: 0;
          padding: 0 12px 8px 28px;
        }
        .contentCard li {
          padding: 8px 0 9px 1px;
          color: #050505;
          font-size: 16px;
          line-height: 1.18;
        }
        .contentCard a {
          color: #00e;
          text-decoration: underline;
        }
        .contentCard a:hover,
        .contentCard a:focus-visible {
          color: #b5163d;
        }
        @media (max-width: 800px) {
          .contentCards {
            grid-template-columns: 1fr;
            gap: 14px;
            padding: 0 10px 24px;
          }
          .contentCard h2 {
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  )
}
