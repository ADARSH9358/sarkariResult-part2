'use client'

const sections = [
  {
    title: 'Sarkari Result® Is A Registered Trademark Under Intellectual Property India',
    paragraphs: [
      'Sarkari Result® is a registered trademark, covering both the Word Mark and Device Mark (Logo), which establishes the legal ownership and originality of the brand identity. The trademark application number for Sarkari Result® (Word Mark) is 4531613, and the trademark application number for the Device Mark (Logo) is 5569166, both registered with Intellectual Property India.',
      'This registration confirms that the name Sarkari Result® along with its official logo are legally protected intellectual properties. SarkariResult.com uses these registered trademarks to provide accurate, reliable, and timely information related to government jobs, results, admit cards, and online forms.',
      'Sarkari Result® 2026 ✓ Official Website | Latest Jobs, Results, Admit Card Sarkari Result SarkariResult.Com (Since 2012) Trusted by Millions',
    ],
  },
  {
    title: 'SarkariResult.Com Is The Official Website For Sarkari Result In India',
    paragraphs: [
      'SarkariResult.com (Since 2012) is the official website for Sarkari Result® in India, providing reliable and timely updates related to government jobs, results, admit cards, and online forms. The brand Sarkari Result® is a registered trademark, including Word Mark (Application No. 4531613) and Device Mark (Logo) (Application No. 5569166) under Intellectual Property India, which confirms its legal ownership and authenticity. Users searching for Sarkari Result should always visit the official platform SarkariResult.com to access accurate, verified, and up-to-date information without confusion.',
    ],
  },
  {
    title: 'Sarkari Result – Latest Government Jobs, Results & Notifications',
    paragraphs: [
      'Sarkari Result is India’s most trusted platform for the latest Sarkari Jobs, Sarkari Result 2026, government exam notifications, admit cards, answer keys, and results. Millions of aspirants search for Sarkari updates every day, and SarkariResult.com provides fast, accurate, and verified information from official sources.',
      'If you are preparing for a Sarkari Job in 2026, SarkariResult.com is your one-stop destination for everything related to Sarkari Result, from application forms to final results.',
    ],
  },
]

export default function HomepageInformation() {
  return (
    <section className="homepageInformation" aria-label="About Sarkari Result">
      {sections.map((section) => (
        <article className="informationSection" key={section.title}>
          <h2>{section.title}</h2>
          <div className="informationBody">
            {section.paragraphs.map((paragraph, index) => (
              <p className={index === section.paragraphs.length - 1 ? 'tagline' : ''} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      ))}

      <style jsx>{`
        .homepageInformation {
          width: min(100% - 20px, 1080px);
          margin: 0 auto;
          border: 2px solid #f0a000;
          background: #fff;
          color: #111;
          font-family: Arial, Helvetica, sans-serif;
        }
        .informationSection + .informationSection { margin-top: 0; }
        .informationSection h2 {
          margin: 0;
          padding: 8px 10px 7px;
          background: #b5163d;
          color: #fff;
          font-size: clamp(20px, 2.1vw, 26px);
          line-height: 1.15;
          text-align: center;
        }
        .informationBody {
          padding: 8px 8px 10px;
          text-align: center;
          font-size: 16px;
          line-height: 1.28;
        }
        .informationBody p { margin: 0 0 24px; }
        .informationBody p:last-child { margin-bottom: 5px; }
        .tagline { padding: 0 12px; }
        @media (max-width: 600px) {
          .homepageInformation { width: calc(100% - 20px); }
          .informationBody { font-size: 15px; text-align: left; }
          .tagline { text-align: center; padding: 0; }
        }
      `}</style>
    </section>
  )
}
