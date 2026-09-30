'use client'

const socialLinks = [
  { name: 'Telegram', action: 'Join Us', className: 'telegram', icon: '➤' },
  { name: 'WhatsApp', action: 'Join Us', className: 'whatsapp', icon: '◉' },
  { name: 'Instagram', action: 'Follow', className: 'instagram', icon: '◎' },
  { name: 'X', action: 'Follow', className: 'x', icon: '𝕏' },
]

const importantDates = [
  ['Application Begin', '29/09/2026'],
  ['Last Date for Apply Online', '18/10/2026'],
  ['Pay Exam Fee Last Date', '18/10/2026'],
  ['Correction Last Date', '20/10/2026'],
]

const applicationFees = [
  ['General / OBC / Other State', '100/-'],
  ['SC / ST', '50/-'],
  ['Payment Mode', 'Debit Card, Credit Card, Net Banking'],
]

const vacancies = [
  ['Intermediate Trained Assistant Acharya (Class 1-5)', '1909', '10+2 (Intermediate) with required marks and 2 Year D.El.Ed / Diploma in Elementary Education / B.El.Ed / Diploma in Special Education / Graduation + D.El.Ed. Must have JTET / CTET (Primary Level) qualification.'],
  ['Graduate Trained Assistant Acharya (Class 6-8) – Language', '1868', 'Bachelor’s Degree in the relevant Language subject with B.Ed / B.A. B.Ed / B.Sc. B.Ed / B.Ed (Special Education) / Integrated B.Ed-M.Ed. Must have JTET / CTET (Upper Primary Level) qualification.'],
  ['Graduate Trained Assistant Acharya (Class 6-8) – Social Science', '660', 'Bachelor’s Degree in Arts / Humanities / Social Science / Commerce / Management with B.Ed or equivalent qualification. Must have JTET / CTET (Upper Primary Level) qualification.'],
  ['Graduate Trained Assistant Acharya (Class 6-8) – Mathematics & Science', '1664', 'Bachelor’s Degree in Mathematics / Science with B.Ed / B.Sc. B.Ed / B.A. B.Ed / Integrated B.Ed or equivalent qualification. Must have JTET / CTET qualification.'],
]

const usefulLinks = [
  ['Apply Online', 'Click Here'],
  ['Download Notification', 'Click Here'],
  ['Download Form Opening Notice', 'Click Here'],
  ['Signature Resizer, PDF Compress, Age Calculator and More Tools', 'Sarkari Result Tools'],
  ['Join Sarkari Result Channel', 'Telegram | WhatsApp'],
  ['Official Website', 'JSSC Official Website'],
]

const faqs = [
  ['Jharkhand JSSC JIILCCE Inter Level Online Form Start Date?', 'The online application process started on 31/07/2026.'],
  ['Jharkhand JSSC (Assistant Teacher) Para Teacher Exam Date?', 'The Examination will be conducted as Per Schedule.'],
  ['Where can I find the syllabus for the Jharkhand JSSC Para Teacher Examination?', 'The detailed syllabus and examination scheme are available in the official notification.'],
  ['Jharkhand JSSC Para Teacher Notification PDF?', 'Candidates can download the notification through SarkariResult.com.'],
  ['How can I apply for Jharkhand JSSC Para Teacher Exam?', 'Candidates can apply online through the official recruitment link available on SarkariResult.com.'],
]

function DetailList({ items }: { items: string[][] }) {
  return (
    <ul className="detailList">
      {items.map(([label, value]) => (
        <li key={label}>
          {label} : <strong>{value}</strong>
        </li>
      ))}
    </ul>
  )
}

export default function RecruitmentArticle() {
  return (
    <article className="articlePage">
      <section className="postIntro" aria-labelledby="post-title">
        <div className="introRow titleRow">
          <h2>Name Of Post :</h2>
          <h1 id="post-title">Jharkhand JSSC Jharkhand JSSC Para Teacher Recruitment 2026 Apply Online for 6101 Post</h1>
        </div>
        <div className="introRow">
          <h2>Post Date / Update :</h2>
          <p>24 July 2026 | 05:42 PM</p>
        </div>
        <div className="introRow informationRow">
          <h2>Short Information</h2>
          <p>
            Jharkhand Staff Selection Commission (JSSC) has released the JSSC Para Teacher Notification for the recruitment of 2026. Those Candidates Are Interested to the Following JSSC Assistant Teacher (Para Teacher) Exam 2026 Vacancy Can Apply Online from <strong>29/09/2026 to 18/10/2026.</strong> See the advertisement for information related to age limit, syllabus, Department wise post, selection procedure, pay scale in JSSC Assistant Teacher (Para Teacher) Recruitment 2026.
          </p>
        </div>
      </section>

      <section className="socialGrid" aria-label="Social channels">
        {socialLinks.map((social) => (
          <a className="socialCard" href="#" key={social.name}>
            <span className={`socialIcon ${social.className}`} aria-hidden="true">{social.icon}</span>
            <strong>{social.name}</strong>
            <span className={`socialAction ${social.className}`}>{social.action}</span>
          </a>
        ))}
      </section>

      <section className="noticePanel">
        <div className="noticeHero">
          <h2>Jharkhand Staff Selection Commission (JSSC)</h2>
          <h3>Jharkhand JSSC Para Teacher Combined Recruitment 2026</h3>
          <h3>Jharkhand JSSC Advt. No. 04/2026 : Short Details of Notification</h3>
          <h3>Sarkari Result® Official : WWW.SARKARIRESULT.COM</h3>
        </div>
        <div className="noticeColumns">
          <section>
            <h3>Important Dates</h3>
            <DetailList items={importantDates} />
          </section>
          <section>
            <h3>Application Fee</h3>
            <DetailList items={applicationFees} />
          </section>
        </div>

        <section className="articleSection">
          <h2>Jharkhand JSSC Para Teacher Online Form 2026 Notification : <span>Age Limit As on 01/08/2026</span></h2>
          <ul><li>Minimum Age : <strong>18 Years</strong></li><li>Maximum Age : <strong>35 Years</strong></li><li>Age Relaxation Extra as per JSSC Assistant Teacher (Para Teacher) Examination Rules Advt. No. 04/2026.</li></ul>
        </section>

        <section className="articleSection">
          <h2><span>Jharkhand JSSC Para Teacher Recruitment 2026 :</span> Vacancy Details<br />Total : 6101 Post</h2>
          <div className="vacancyTable" role="table" aria-label="Vacancy details">
            <div className="vacancyRow vacancyHeader" role="row"><strong>Post Name</strong><strong>Total Post</strong><strong>Jharkhand JSSC Para Teacher Eligibility Details</strong></div>
            {vacancies.map(([post, total, eligibility]) => <div className="vacancyRow" role="row" key={post}><div>{post}</div><div>{total}</div><div><ul><li>{eligibility}</li></ul></div></div>)}
          </div>
        </section>

        <section className="articleSection howTo">
          <h2>Sarkari Result® : How to Fill Jharkhand JSSC Para Teacher Online Form 2026</h2>
          <ul>
            <li>Read the notification before applying for the JSSC Assistant Teacher recruitment 2026.</li>
            <li>Check and collect all required documents, including ID proof and address details.</li>
            <li>Prepare scanned documents related to the recruitment form: photo, signature and thumb impression.</li>
            <li>Before submitting, check the preview and all columns carefully.</li>
            <li>Submit the application fee when required and take a printout of the final submitted form.</li>
          </ul>
        </section>

        <section className="articleSection callout"><h2>Interested Candidates Can Read the Full Notification Before Apply Online.</h2></section>
        <section className="articleSection callout green"><h2>Download the Sarkari Result® Mobile App from SarkariResult.com (Since 2012) – Official Website of Sarkari Result® for the latest updates.</h2></section>
        <div className="appLinks"><a href="#">Sarkari Result Android App</a><a href="#">Sarkari Result Apple IOS App</a></div>
        <section className="articleSection"><h2 className="greenText">Some Useful Important Links</h2><div className="usefulLinks">{usefulLinks.map(([label, value]) => <div key={label}><strong>{label}</strong><a href="#">{value}</a></div>)}</div></section>
        <section className="faq"><div className="faqTitle">⌄ Frequently Asked Questions</div>{faqs.map(([question, answer], index) => <div className="faqItem" key={question}><h3 className={index % 2 ? 'greenText' : ''}>{index + 1}. {question}</h3><p>• &nbsp;{answer}</p></div>)}</section>
      </section>

      <style jsx>{`
        .articlePage {
          width: min(100% - 20px, 1094px);
          margin: 0 auto;
          color: #111;
          font-family: Georgia, 'Times New Roman', serif;
        }
        .postIntro {
          border: 1px solid #ddd;
          border-top: 0;
          padding: 10px 28px 38px;
        }
        .introRow {
          display: grid;
          grid-template-columns: 205px minmax(0, 1fr);
          gap: 24px;
          align-items: start;
          margin-bottom: 24px;
        }
        .introRow h2 {
          margin: 0;
          color: red;
          font-size: 20px;
          line-height: 1.3;
        }
        .introRow p {
          margin: 0;
          font-size: 19px;
          line-height: 1.45;
        }
        .titleRow { margin-bottom: 48px; }
        .titleRow h1 {
          margin: 0;
          color: red;
          font-size: clamp(30px, 3.25vw, 39px);
          line-height: 1.08;
        }
        .informationRow { margin-bottom: 0; }
        .informationRow strong { font-weight: 700; }
        .socialGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          border-top: 1px solid #222;
          margin-top: 28px;
          padding-top: 12px;
        }
        .socialCard {
          min-height: 54px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-radius: 10px;
          color: #111;
          font-size: 17px;
          text-decoration: none;
        }
        .socialIcon {
          width: 23px;
          height: 23px;
          display: inline-grid;
          place-items: center;
          border-radius: 50%;
          color: #fff;
          font-family: Arial, sans-serif;
          font-size: 14px;
        }
        .telegram { background: #229ed9; }
        .whatsapp { background: #42b95b; }
        .instagram { background: #e1306c; }
        .x, .socialIcon.x, .socialAction.x { background: #000; }
        .socialAction {
          margin-left: auto;
          padding: 7px 14px;
          border-radius: 6px;
          color: #fff;
          font-family: Georgia, serif;
          font-size: 15px;
        }
        .noticePanel {
          margin-top: 12px;
          border: 1px solid #555;
          overflow: hidden;
        }
        .noticeHero { padding: 10px 12px 65px; text-align: center; }
        .noticeHero h2, .noticeHero h3 { margin: 0 0 26px; font-size: clamp(26px, 3vw, 32px); line-height: 1.2; }
        .noticeHero h2, .noticeHero h3:nth-of-type(2) { color: #f0f; }
        .noticeHero h3:nth-of-type(1) { color: green; }
        .noticeHero h3:last-child { color: red; margin-bottom: 0; }
        .noticeColumns { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid #555; }
        .noticeColumns section + section { border-left: 1px solid #555; }
        .noticeColumns h3 { margin: 0; padding: 10px; color: green; font-size: 32px; text-align: center; }
        .detailList { margin: 12px 0; padding: 0 18px 18px 32px; font-size: 18px; line-height: 1.5; }
        .detailList li { padding: 4px 0; }
        .articleSection { border-top: 1px solid #555; padding: 10px; }
        .articleSection h2 { margin: 0 0 12px; color: green; text-align: center; font-size: clamp(23px, 2.4vw, 30px); line-height: 1.18; }
        .articleSection h2 span { color: #f0f; }
        .articleSection ul { margin: 0; padding: 0 0 12px 18px; font-size: 17px; line-height: 1.55; }
        .vacancyTable { border: 1px solid #555; font-size: 16px; }
        .vacancyRow { display: grid; grid-template-columns: 29% 12% 59%; border-top: 1px solid #555; min-height: 110px; }
        .vacancyRow:first-child { border-top: 0; }
        .vacancyRow > * { margin: 0; padding: 10px; border-left: 1px solid #555; }
        .vacancyRow > *:first-child { border-left: 0; text-align: center; }
        .vacancyRow > div:nth-child(2) { text-align: center; }
        .vacancyHeader { min-height: auto; text-align: center; }
        .vacancyHeader strong { padding: 8px; }
        .vacancyRow ul { margin: 0; padding-left: 18px; line-height: 1.45; }
        .howTo li { padding-bottom: 4px; }
        .callout { padding: 20px 12px; }
        .callout h2 { margin: 0; }
        .green, .greenText { color: green !important; }
        .appLinks { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid #555; }
        .appLinks a, .usefulLinks a { color: #00e; font-weight: 700; text-align: center; }
        .appLinks a { padding: 12px; border-right: 1px solid #555; font-size: 26px; }
        .usefulLinks > div { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid #555; font-size: 22px; }
        .usefulLinks strong, .usefulLinks a { padding: 12px; text-align: center; }
        .usefulLinks strong { color: #f0f; border-right: 1px solid #555; }
        .faq { margin-top: 28px; border: 2px solid #777; }
        .faqTitle { padding: 5px; background: #963b58; color: #fff; font-style: italic; font-weight: 700; text-align: center; }
        .faqItem { padding: 0 10px 6px; }
        .faqItem h3 { color: #f0f; font-size: 21px; }
        .faqItem p { font-size: 16px; }
        @media (max-width: 700px) {
          .postIntro { padding: 14px 14px 26px; }
          .introRow { grid-template-columns: 1fr; gap: 7px; margin-bottom: 22px; }
          .titleRow { margin-bottom: 28px; }
          .introRow p { font-size: 17px; }
          .titleRow h1 { font-size: 29px; }
          .socialGrid, .noticeColumns { grid-template-columns: 1fr; }
          .noticeColumns section + section { border-left: 0; border-top: 1px solid #555; }
          .noticeHero { padding-bottom: 28px; }
          .noticeHero h2, .noticeHero h3, .noticeColumns h3 { font-size: 25px; }
        }
      `}</style>
    </article>
  )
}
