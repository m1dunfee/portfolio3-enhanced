import "./App.css";

const VIDEO_URL = "https://youtu.be/6Jhjjl5Fq1k";

const LIVE_SITE_URL = "https://www.multiversal.space";
const REPO_URL = "https://github.com/m1dunfee/Portfolio3";

// Optional: if you add tags later, fill these in.
// Example compare URL format:
// https://github.com/m1dunfee/Portfolio3/compare/cs499-baseline...cs499-final
const BASELINE_TAG_URL = "https://github.com/m1dunfee/Portfolio3/tree/cs499-baseline";
const FINAL_TAG_URL = "https://github.com/m1dunfee/Portfolio3/tree/cs499-final";
const COMPARE_URL = "https://github.com/m1dunfee/Portfolio3/compare/cs499-baseline...cs499-final";

const DOCS = {
  "Professional Self-Assessment": "100_Professional_Self_Assessment.docx",
  "Code Review (Document)": "00_code_review.docx",
  "Project Proposal": "00_Project_Proposal.docx",
  "Journal - Code Review Practices": "02_Journal_Code_Review_Practices.docx",
  "Journal - ePortfolio Risk and Promotion":
    "03_Journal_ePortfolio_Risk_and_Promotion.docx",
  "Journal - Computer Science Trends":
    "04_Journal_Computer_Science_Trends.docx",
  "Journal - Emerging Technologies": "05_Journal_Emerging_Technologies.docx",
  "Enhancement 1 - Software Design and Engineering":
    "10_Enhancement_1_Software_Design_and_Engineering_Narrative.docx",
  "Enhancement 2 - Algorithms and Data Structures":
    "20_Enhancement_2_Algorithms_and_Data_Structures_Narrative.docx",
  "Enhancement 3 - Databases": "30_Enhancement_3_Databases_Narrative.docx",
};

function LinkButton({ href, children, title }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="btn"
      title={title}
    >
      {children}
    </a>
  );
}

function DocButton({ label, filename }) {
  const href = `${import.meta.env.BASE_URL}${filename}`;
  return (
    <LinkButton href={href} title={filename}>
      {label}
    </LinkButton>
  );
}

function Section({ title, subtitle, children }) {
  return (
    <section className="section">
      <header className="sectionHeader">
        <h2 className="sectionTitle">{title}</h2>
        {subtitle ? <p className="sectionSubtitle">{subtitle}</p> : null}
      </header>
      <div className="sectionBody">{children}</div>
    </section>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <h1 className="heroTitle">CS-499 ePortfolio - Portfolio3 (Enhanced)</h1>
        <p className="heroSubtitle">
          Supporting documents, enhancement narratives, and review links for the
          Portfolio3 capstone submission.
        </p>

        <div className="pillRow" aria-label="Quick links">
          <LinkButton href={LIVE_SITE_URL} title="Live deployment">
            Live App
          </LinkButton>
          <br/>
          <LinkButton href={REPO_URL} title="Source code repository">
            Repo
          </LinkButton>
          <br/>
          <LinkButton href={VIDEO_URL} title="Code review video (YouTube)">
            Code Review Video
          </LinkButton>
        </div>

        <div className="pillRow" aria-label="Code snapshots">
          <LinkButton href={BASELINE_TAG_URL} title="Baseline code snapshot">
            Baseline Tag
          </LinkButton>
          <br/>
          <LinkButton href={FINAL_TAG_URL} title="Final code snapshot">
            Final Tag
          </LinkButton>
          <br/>
          <LinkButton href={COMPARE_URL} title="Compare baseline to final">
            Compare
          </LinkButton>
        </div>
      </header>

      <main className="content">
        <Section
          title="Primary documents"
          subtitle="Start here. These anchor the portfolio submission."
        >
          <div className="grid">
            <DocButton
              label="Professional Self-Assessment"
              filename={DOCS["Professional Self-Assessment"]}
            />
            <br />
            <DocButton
              label="Enhancement 1 Narrative"
              filename={DOCS["Enhancement 1 - Software Design and Engineering"]}
            />
            <br />
            <DocButton
              label="Enhancement 2 Narrative"
              filename={DOCS["Enhancement 2 - Algorithms and Data Structures"]}
            />
            <br />
            <DocButton
              label="Enhancement 3 Narrative"
              filename={DOCS["Enhancement 3 - Databases"]}
            />
            <br />
            <DocButton
              label="Code Review (Document)"
              filename={DOCS["Code Review (Document)"]}
            />
            <br />
          </div>
        </Section>

        <Section
          title="Planning and process evidence"
          subtitle="Supplemental documents that support decisions, reflection, and evaluation."
        >
          <div className="grid">
            <DocButton
              label="Project Proposal"
              filename={DOCS["Project Proposal"]}
            />
            <br />
            <DocButton
              label="Journal: Code Review Practices"
              filename={DOCS["Journal - Code Review Practices"]}
            />
            <br />
            <DocButton
              label="Journal: ePortfolio Risk and Promotion"
              filename={DOCS["Journal - ePortfolio Risk and Promotion"]}
            />
            <br />
            <DocButton
              label="Journal: Computer Science Trends"
              filename={DOCS["Journal - Computer Science Trends"]}
            />
            <br />
            <DocButton
              label="Journal: Emerging Technologies"
              filename={DOCS["Journal - Emerging Technologies"]}
            />
            <br />
          </div>
        </Section>

        <Section
          title="Submission checklist"
          subtitle="Quick verification list for reviewers."
        >
          <ul className="checklist">
            <li>
              GitHub Pages ePortfolio links: self-assessment, narratives, and
              code review video.
            </li>
            <li>
              Repo contains code and supporting docs; baseline/final tags
              provide clear before/after.
            </li>
            <li>
              Live deployment link (container-hosted) provided separately from
              GitHub Pages.
            </li>
          </ul>
        </Section>
      </main>

      <footer className="footer">
        <p className="footerText">
          Live site:{" "}
          <a href={LIVE_SITE_URL} target="_blank" rel="noreferrer">
            {LIVE_SITE_URL}
          </a>{" "}
          | Repo:{" "}
          <a href={REPO_URL} target="_blank" rel="noreferrer">
            {REPO_URL}
          </a>
        </p>
      </footer>
    </div>
  );
}
