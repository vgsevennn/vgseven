import Head from "next/head";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "@/styles/articles.module.scss";

export default function TermsAndPolicy() {
  return (
    <div>
      <Header />
      <Head>
        <title> Terms and Policy </title>
      </Head>
      <div className={styles.articlesSection}>
        <h1>Terms and Policy</h1>
        <span>Last updated : 21 Feb, 2023</span>
        <p>
          {" "}
          Welcome to VGSEVEN! Please read these terms and policies carefully
          before using our website.
        </p>
        <h3> Terms of Service </h3>
        <p>
          By using VGSEVEN, you agree to comply with and be bound by the
          following terms and conditions of use. If you do not agree to these
          terms, please do not use our website.
        </p>
        <h3> Content </h3>
        <p>All content on VGSEVEN is for informational purposes only.</p>
        <h3> Privacy </h3>
        <p>
          We respect your privacy and do not collect any personal information
          from you unless you voluntarily provide it. We use cookies to improve
          your browsing experience and gather data to help us improve our
          website.
        </p>
        <h3> Third-Party Links </h3>
        <p>
          VGSEVEN may contain links to third-party websites or services that we
          do not control. We are not responsible for the content, privacy
          policies, or practices of any third-party websites or services. We
          encourage you to review the terms and policies of any third-party
          website or service that you visit.
        </p>
        <h3> Intellectual Property </h3>
        <p>
          All content on VGSEVEN, including but not limited to text, graphics,
          logos, images, and software, is the property of VGSEVEN and is
          protected by International copyright laws. You may not reproduce,
          modify, distribute, or republish any content from VGSEVEN without our
          prior written consent.
        </p>
        <h3> Disclaimer of Warranties </h3>
        <p>
          VGSEVEN is provided "as is" and we make no representations or
          warranties of any kind, express or implied, regarding the use or the
          results of our website. We disclaim all warranties, including but not
          limited to warranties of accuracy, completeness, non-infringement, and
          fitness for a particular purpose.
        </p>
        <h3> Policy </h3>
        <p>
          By using VGSEVEN, you agree to comply with and be bound by the
          following policy. If you do not agree to this policy, please do not
          use our website.
        </p>
        <h3> Acceptable Use </h3>
        <p>
          You may use VGSEVEN only for lawful purposes and in accordance with
          these terms and policies. You agree not to use our website:
        </p>
        <ul>
          <li>
            {" "}
            In any way that violates any applicable federal, state, local, or
            international law or regulation.
          </li>
          <li>
            To engage in any conduct that restricts or inhibits anyone's use or
            enjoyment of our website, or which, as determined by us, may harm
            VGSEVEN or users of our website or expose them to liability.
          </li>
          <li>
            To impersonate or attempt to impersonate VGSEVEN, a VGSEVEN
            employee, another user, or any other person or entity.
          </li>
          <li>
            To transmit, or procure the sending of, any advertising or
            promotional material, including any "junk mail," "chain letter,"
            "spam," or any other similar solicitation.
          </li>
          <li>
            To engage in any other conduct that restricts or inhibits anyone's
            use or enjoyment of our website, or which, as determined by us, may
            harm VGSEVEN or users of our website or expose them to liability.
          </li>
        </ul>
        <h3>Changes to Terms and Policy</h3>
        VGSEVEN reserves the right to modify these terms and policies at any
        time. We encourage you to review these terms and policies periodically
        for any updates or changes.
        <h3> Contact Us </h3>
        <p>
          If you have any questions about VGSEVEN's terms and policies, please
          contact us at mailteamseven@gmail.com.
        </p>
      </div>
      <Footer />
    </div>
  );
}
