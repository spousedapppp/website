/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";

import Chat from "/components/Chat";
import "/app/i18n";
export default function Page() {
  const [showChat, setShowChat] = useState<boolean>(false);
  useEffect(() => {
    if (showChat) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [showChat]);
  return (
    <main className="min-h-screen">
      <Chat showChat={showChat} setShowChat={setShowChat} />
      <div className="cookie-container max-screen my-32">
        <h1>PRIVACY NOTICE</h1>
        <span> Last Updated 10/13/2023</span>

        <p>
          This privacy notice for <span id="company_name">Spoused</span> ("we,"
          "us," or "our"), describes how and why we might collect, store, use,
          and/or share ("process") your information when you use our services
          ("Services"), such as when you:
        </p>

        <ul>
          <li>
            Visit our website at <a href="https://Spoused">https://Spoused</a>,
            or any website of ours that links to this privacy notice
          </li>
          <li>
            Download and use our mobile application, or any other application of
            ours that links to this privacy notice
          </li>
          <li>
            Engage with us in other related ways, including any sales,
            marketing, or events
          </li>
        </ul>

        <p>
          Questions or concerns? Reading this privacy notice will help you
          understand your privacy rights and choices. If you do not agree with
          our policies and practices, please do not use our Services. If you
          still have any questions or concerns, please contact us.
        </p>

        <h2>SUMMARY OF KEY POINTS</h2>
        <p>
          This summary provides key points from our privacy notice, but you can
          find out more details about any of these topics in the relevant
          section below.
        </p>

        <h3>What personal information do we process?</h3>
        <p>
          When you visit, use, or navigate our Services, we may process personal
          information depending on how you interact with our website, mobile
          application, and the Services, the choices you make, and the products
          and features you use.
        </p>

        <h3>Do we process any sensitive personal information?</h3>
        <p>
          We may process sensitive personal information when necessary with your
          consent or as otherwise permitted by applicable law.
        </p>

        <h3>Do we receive any information from third parties?</h3>
        <p>
          We may receive information from public databases, marketing partners,
          social media platforms, and other outside sources.
        </p>

        <h3>How do we process your information?</h3>
        <p>
          We process your information to provide, improve, and administer our
          Services, communicate with you, for security and fraud prevention, and
          to comply with the law. We may also process your information for other
          purposes with your consent. We process your information only when we
          have a valid legal reason to do so.
        </p>

        <h3>
          In what situations and with which parties do we share personal
          information?
        </h3>
        <p>
          We may share information in specific situations and with specific
          third parties.
        </p>

        <h3>How do we keep your information safe?</h3>
        <p>
          We have organizational and technical processes and procedures in place
          to protect your personal information. However, no electronic
          transmission over the internet or information storage technology can
          be guaranteed to be 100% secure, so we cannot promise or guarantee
          that hackers, cybercriminals, or other unauthorized third parties will
          not be able to defeat our security and improperly collect, access,
          steal, or modify your information.
        </p>

        <h3>What are your rights?</h3>
        <p>
          Depending on where you are located geographically, the applicable
          privacy law may mean you have certain rights regarding your personal
          information.
        </p>

        <h3>How do you exercise your rights?</h3>
        <p>
          The easiest way to exercise your rights is by contacting us. We will
          consider and act upon any request in accordance with applicable data
          protection laws.
        </p>

        <h2>WHAT INFORMATION DO WE COLLECT?</h2>
        <h3>Personal information you disclose to us</h3>
        <p>In Short: We collect personal information that you provide to us.</p>
        <p>
          We collect personal information that you voluntarily provide to us
          when you register on the Services, express an interest in obtaining
          information about us or our products and Services, when you
          participate in activities on the Services, or otherwise when you
          contact us.
        </p>

        <h4>Personal Information Provided by You</h4>
        <p>
          The personal information that we collect depends on the context of
          your interactions with us and the Services, the choices you make, and
          the products and features you use. The personal information we collect
          may include the following:
        </p>

        <ul>
          <li>Names</li>
          <li>Phone numbers</li>
          <li>Email addresses</li>
          <li>Mailing addresses</li>
          <li>Usernames</li>
          <li>Passwords</li>
          <li>Contact preference</li>
          <li>Contact or authentication data</li>
          <li>Billing addresses</li>
          <li>Debit/Credit card numbers</li>
        </ul>
        <h3>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h3>
        <p>
          In Short: We may share information in specific situations described in
          this section and/or with the following third parties.
        </p>

        <p>
          We may need to share your personal information in the following
          situations:
        </p>

        <ul>
          <li>
            Business Transfers. We may share or transfer your information in
            connection with, or during negotiations of, any merger, sale of
            company assets, financing, or acquisition of all or a portion of our
            business to another company.
          </li>
          <li>
            When we use Google Maps Platform APIs. We may share your information
            with certain Google Maps Platform APIs (e.g., Google Maps API,
            Places API). To find out more about Google’s Privacy Policy, please
            refer to this <a href="link_to_google_privacy_policy">link</a>. We
            obtain and store on your device ("cache") your location. You may
            revoke your consent anytime by contacting us at the contact details
            provided at the end of this document.
          </li>
          <li>
            Affiliates. We may share your information with our affiliates, in
            which case we will require those affiliates to honor this privacy
            notice. Affiliates include our parent company and any subsidiaries,
            joint venture partners, or other companies that we control or that
            are under common control with us.
          </li>
          <li>
            Business Partners. We may share your information with our business
            partners to offer you certain products, services, or promotions.
          </li>
          <li>
            Other Users. When you share personal information (for example, by
            posting comments, contributions, or other content to the Services)
            or otherwise interact with public areas of the Services, such
            personal information may be viewed by all users and may be publicly
            made available outside the Services in perpetuity. If you interact
            with other users of our Services and register for our Services
            through a social network (such as Facebook), your contacts on the
            social network will see your name, profile photo, and descriptions
            of your activity. Similarly, other users will be able to view
            descriptions of your activity, communicate with you within our
            Services, and view your profile.
          </li>
        </ul>

        <h3>WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</h3>
        <p>
          In Short: We are not responsible for the safety of any information
          that you share with third parties that we may link to or who advertise
          on our Services but are not affiliated with our Services.
        </p>

        <p>
          The Services may link to third-party websites, online services, or
          mobile applications and/or contain advertisements from third parties
          that are not affiliated with us and which may link to other websites,
          services, or applications. Accordingly, we do not make any guarantee
          regarding any such third parties, and we will not be liable for any
          loss or damage caused by the use of such third-party websites,
          services, or applications. The inclusion of a link towards a
          third-party website, service, or application does not imply an
          endorsement by us. We cannot guarantee the safety and privacy of data
          you provide to any third parties. Any data collected by third parties
          is not covered by this privacy notice. We are not responsible for the
          content or privacy and security practices and policies of any third
          parties, including other websites, services, or applications that may
          be linked to or from the Services. You should review the policies of
          such third parties and contact them directly to respond to your
          questions.
        </p>

        <h3>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h3>
        <p>
          In Short: We may use cookies and other tracking technologies to
          collect and store your information.
        </p>

        <p>
          We may use cookies and similar tracking technologies (like web beacons
          and pixels) to access or store information. Specific information about
          how we use such technologies and how you can refuse certain cookies is
          set out in our Cookie Notice.
        </p>

        <h3>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h3>
        <p>
          In Short: If you choose to register or log in to our Services using a
          social media account, we may have access to certain information about
          you.
        </p>

        <p>
          Our Services offer you the ability to register and log in using your
          third-party social media account details (like your Facebook or
          Twitter logins). Where you choose to do this, we will receive certain
          profile information about you from your social media provider. The
          profile information we receive may vary depending on the social media
          provider concerned, but will often include your name, email address,
          friends list, and profile picture, as well as other information you
          choose to make public on such a social media platform.
        </p>

        <p>
          We will use the information we receive only for the purposes that are
          described in this privacy notice or that are otherwise made clear to
          you on the relevant Services. Please note that we do not control, and
          are not responsible for, other uses of your personal information by
          your third-party social media provider. We recommend that you review
          their privacy notice to understand how they collect, use, and share
          your personal information, and how you can set your privacy
          preferences on their sites and apps.
        </p>
        <h3>Will your information be shared with anyone else?</h3>
        <p>
          We may disclose your personal information with our service providers
          pursuant to a written contract between us and each service provider.
          Each service provider is a for-profit entity that processes the
          information on our behalf, following the same strict privacy
          protection obligations mandated by the CCPA.
        </p>
        <p>
          We may use your personal information for our own business purposes,
          such as for undertaking internal research for technological
          development and demonstration. This is not considered to be "selling"
          of your personal information.
        </p>
        <p>
          Our company has not disclosed, sold, or shared any personal
          information to third parties for a business or commercial purpose in
          the preceding twelve (12) months. We will not sell or share personal
          information in the future belonging to website visitors, users, and
          other consumers.
        </p>

        <h3>Your rights with respect to your personal data</h3>
        <p>
          <strong>
            Right to request deletion of the data — Request to delete
          </strong>
        </p>
        <p>
          You can ask for the deletion of your personal information. If you ask
          us to delete your personal information, we will respect your request
          and delete your personal information, subject to certain exceptions
          provided by law, such as (but not limited to) the exercise by another
          consumer of his or her right to free speech, our compliance
          requirements resulting from a legal obligation, or any processing that
          may be required to protect against illegal activities.
        </p>

        <p>
          <strong>Right to be informed — Request to know</strong>
        </p>
        <p>Depending on the circumstances, you have a right to know:</p>
        <ul>
          <li>whether we collect and use your personal information;</li>
          <li>the categories of personal information that we collect;</li>
          <li>
            the purposes for which the collected personal information is used;
          </li>
          <li>
            whether we sell or share personal information to third parties;
          </li>
          <li>
            the categories of personal information that we sold, shared, or
            disclosed for a business purpose;
          </li>
          <li>
            the categories of third parties to whom the personal information was
            sold, shared, or disclosed for a business purpose;
          </li>
          <li>
            the business or commercial purpose for collecting, selling, or
            sharing personal information; and
          </li>
          <li>
            the specific pieces of personal information we collected about you.
          </li>
        </ul>

        <p>
          In accordance with applicable law, we are not obligated to provide or
          delete consumer information that is de-identified in response to a
          consumer request or to re-identify individual data to verify a
          consumer request.
        </p>

        <p>
          <strong>
            Right to Non-Discrimination for the Exercise of a Consumer’s Privacy
            Rights
          </strong>
        </p>
        <p>
          We will not discriminate against you if you exercise your privacy
          rights.
        </p>

        <p>
          <strong>
            Right to Limit Use and Disclosure of Sensitive Personal Information
          </strong>
        </p>
        <p>We do not process consumer's sensitive personal information.</p>

        <p>
          <strong>Verification process</strong>
        </p>
        <p>
          Upon receiving your request, we will need to verify your identity to
          determine you are the same person about whom we have the information
          in our system. These verification efforts require us to ask you to
          provide information so that we can match it with information you have
          previously provided us. For instance, depending on the type of request
          you submit, we may ask you to provide certain information so that we
          can match the information you provide with the information we already
          have on file, or we may contact you through a communication method
          (e.g., phone or email) that you have previously provided to us. We may
          also use other verification methods as the circumstances dictate.
        </p>

        <p>
          We will only use personal information provided in your request to
          verify your identity or authority to make the request. To the extent
          possible, we will avoid requesting additional information from you for
          the purposes of verification. However, if we cannot verify your
          identity from the information already maintained by us, we may request
          that you provide additional information for the purposes of verifying
          your identity and for security or fraud-prevention purposes. We will
          delete such additionally provided information as soon as we finish
          verifying you.
        </p>

        <p>
          <strong>Other privacy rights</strong>
        </p>
        <p>You may object to the processing of your personal information.</p>
        <p>
          You may request correction of your personal data if it is incorrect or
          no longer relevant, or ask to restrict the processing of the
          information.
        </p>
        <p>
          You can designate an authorized agent to make a request under the CCPA
          on your behalf. We may deny a request from an authorized agent that
          does not submit proof that they have been validly authorized to act on
          your behalf in accordance with the CCPA.
        </p>
        <p>
          You may request to opt out from future selling or sharing of your
          personal information to third parties. Upon receiving an opt-out
          request, we will act upon the request as soon as feasibly possible,
          but no later than fifteen (15) days from the date of the request
          submission.
        </p>
        <p>
          To exercise these rights, you can contact us or by referring to the
          contact details at the bottom of this document. If you have a
          complaint about how we handle your data, we would like to hear from
          you.
        </p>

        <h3>Colorado Residents</h3>
        <p>
          This section applies only to Colorado residents. Under the Colorado
          Privacy Act (CPA), you have the rights listed below. However, these
          rights are not absolute, and in certain cases we may decline your
          request as permitted by law.
        </p>
        <p>
          <strong>
            Right to be informed whether or not we are processing your personal
            data
          </strong>
        </p>
        <p>
          <strong>Right to access your personal data</strong>
        </p>
        <p>
          <strong>Right to correct inaccuracies in your personal data</strong>
        </p>
        <p>
          <strong>Right to request deletion of your personal data</strong>
        </p>
        <p>
          <strong>
            Right to obtain a copy of the personal data you previously shared
            with us
          </strong>
        </p>
        <p>
          <strong>
            Right to opt out of the processing of your personal data if it is
            used for targeted advertising, the sale of personal data, or
            profiling in furtherance of decisions that produce legal or
            similarly significant effects ("profiling")
          </strong>
        </p>
        <p>
          To submit a request to exercise these rights described above, please
          email or submit a data subject access request.
        </p>
        <p>
          If we decline to take action regarding your request and you wish to
          appeal our decision, please email us at{" "}
          <a href="mailto:contact@spousedapp.com">contact@spousedapp.com</a>. Within
          forty-five (45) days of receipt of an appeal, we will inform you in
          writing of any action taken or not taken in response to the appeal,
          including a written explanation of the reasons for the decisions.
        </p>

        <h3>Connecticut Residents</h3>
        <p>
          This section applies only to Connecticut residents. Under the
          Connecticut Data Privacy Act (CTDPA), you have the rights listed
          below. However, these rights are not absolute, and in certain cases we
          may decline your request as permitted by law.
        </p>
        <p>
          <strong>
            Right to be informed whether or not we are processing your personal
            data
          </strong>
        </p>
        <p>
          <strong>Right to access your personal data</strong>
        </p>
        <p>
          <strong>Right to correct inaccuracies in your personal data</strong>
        </p>
        <p>
          <strong>Right to request deletion of your personal data</strong>
        </p>
        <p>
          <strong>
            Right to obtain a copy of the personal data you previously shared
            with us
          </strong>
        </p>
        <p>
          <strong>
            Right to opt out of the processing of your personal data if it is
            used for targeted advertising, the sale of personal data, or
            profiling in furtherance of decisions that produce legal or
            similarly significant effects ("profiling")
          </strong>
        </p>
        <p>
          To submit a request to exercise these rights described above, please
          email or submit a data subject access request.
        </p>
        <p>
          If we decline to take action regarding your request and you wish to
          appeal our decision, please email us at{" "}
          <a href="mailto:contact@spousedapp.com">contact@spousedapp.com</a>. Within
          sixty (60) days of receipt of an appeal, we will inform you in writing
          of any action taken or not taken in response to the appeal, including
          a written explanation of the reasons for the decisions.
        </p>

        <h3>Virginia Residents</h3>
        <p>Under the Virginia Consumer Data Protection Act (VCDPA):</p>
        <p>
          <strong>
            "Consumer" means a natural person who is a resident of the
            Commonwealth acting only in an individual or household context. It
            does not include a natural person acting in a commercial or
            employment context.
          </strong>
        </p>
        <p>
          <strong>
            "Personal data" means any information that is linked or reasonably
            linkable to an identified or identifiable natural person. "Personal
            data" does not include de-identified data or publicly available
            information.
          </strong>
        </p>
        <p>
          <strong>
            "Sale of personal data" means the exchange of personal data for
            monetary consideration.
          </strong>
        </p>
        <p>
          If this definition of "consumer" applies to you, we must adhere to
          certain rights and obligations regarding your personal data.
        </p>
        <p>
          <strong>Your rights with respect to your personal data</strong>
        </p>
        <p>
          <strong>
            Right to be informed whether or not we are processing your personal
            data
          </strong>
        </p>
        <p>
          <strong>Right to access your personal data</strong>
        </p>
        <p>
          <strong>Right to correct inaccuracies in your personal data</strong>
        </p>
        <p>
          <strong>Right to request deletion of your personal data</strong>
        </p>
        <p>
          <strong>
            Right to obtain a copy of the personal data you previously shared
            with us
          </strong>
        </p>
        <p>
          <strong>
            Right to opt out of the processing of your personal data if it is
            used for targeted advertising, the sale of personal data, or
            profiling in furtherance of decisions that produce legal or
            similarly significant effects ("profiling")
          </strong>
        </p>
        <p>
          <strong>
            Exercise your rights provided under the Virginia VCDPA
          </strong>
        </p>
        <p>
          You may contact us by email at or submit a data subject access
          request.
        </p>
        <p>
          If you are using an authorized agent to exercise your rights, we may
          deny a request if the authorized agent does not submit proof that they
          have been validly authorized to act on your behalf.
        </p>

        <p>
          <strong>Verification process</strong>
        </p>
        <p>
          We may request that you provide additional information reasonably
          necessary to verify you and your consumer's request. If you submit the
          request through an authorized agent, we may need to collect additional
          information to verify your identity before processing your request.
        </p>
        <p>
          Upon receiving your request, we will respond without undue delay, but
          in all cases, within forty-five (45) days of receipt. The response
          period may be extended once by forty-five (45) additional days when
          reasonably necessary. We will inform you of any such extension within
          the initial 45-day response period, together with the reason for the
          extension.
        </p>
        <p>
          <strong>Right to appeal</strong>
        </p>
        <p>
          If we decline to take action regarding your request, we will inform
          you of our decision and reasoning behind it. If you wish to appeal our
          decision, please email us at{" "}
          <a href="mailto:contact@spousedapp.com">contact@spousedapp.com</a>. Within
          sixty (60) days of receipt of an appeal, we will inform you in writing
          of any action taken or not taken in response to the appeal, including
          a written explanation of the reasons for the decisions. If your appeal
          is denied, you may contact the Attorney General to submit a complaint.
        </p>

        <h3>DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</h3>
        <p>
          <strong>
            In Short: You may have additional rights based on the country you
            reside in.
          </strong>
        </p>

        <p>
          <strong>Australia and New Zealand</strong>
        </p>
        <p>
          We collect and process your personal information under the obligations
          and conditions set by Australia's Privacy Act 1988 and New Zealand's
          Privacy Act 2020 (Privacy Act).
        </p>
        <p>
          This privacy notice satisfies the notice requirements defined in both
          Privacy Acts, in particular: what personal information we collect from
          you, from which sources, for which purposes, and other recipients of
          your personal information.
        </p>
        <p>
          If you do not wish to provide the personal information necessary to
          fulfill their applicable purpose, it may affect our ability to provide
          our services, in particular:
        </p>
        <ul>
          <li>offer you the products or services that you want</li>
          <li>respond to or help with your requests</li>
          <li>manage your account with us</li>
          <li>confirm your identity and protect your account</li>
        </ul>
        <p>
          At any time, you have the right to request access to or correction of
          your personal information. You can make such a request by contacting
          us by using the contact details provided in the section "HOW CAN YOU
          REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?"
        </p>
        <p>
          If you believe we are unlawfully processing your personal information,
          you have the right to submit a complaint about a breach of the
          Australian Privacy Principles to the Office of the Australian
          Information Commissioner and a breach of New Zealand's Privacy
          Principles to the Office of New Zealand Privacy Commissioner.
        </p>

        <p>
          <strong>Republic of South Africa</strong>
        </p>
        <p>
          At any time, you have the right to request access to or correction of
          your personal information. You can make such a request by contacting
          us by using the contact details provided in the section "HOW CAN YOU
          REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?"
        </p>
        <p>
          If you are unsatisfied with the manner in which we address any
          complaint with regard to our processing of personal information, you
          can contact the office of the regulator, the details of which are:
        </p>
        <p>The Information Regulator (South Africa)</p>
        <p>General enquiries: enquiries@inforegulator.org.za</p>
        <p>
          Complaints (complete POPIA/PAIA form 5:
          PAIAComplaints@inforegulator.org.za &
          POPIAComplaints@inforegulator.org.za
        </p>

        <h3>DO WE MAKE UPDATES TO THIS NOTICE?</h3>
        <p>
          <strong>
            In Short: Yes, we will update this notice as necessary to stay
            compliant with relevant laws.
          </strong>
        </p>
        <p>
          We may update this privacy notice from time to time. The updated
          version will be indicated by an updated "Revised" date, and the
          updated version will be effective as soon as it is accessible. If we
          make material changes to this privacy notice, we may notify you either
          by prominently posting a notice of such changes or by directly sending
          you a notification. We encourage you to review this privacy notice
          frequently to be informed of how we are protecting your information.
        </p>

        <h3>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h3>
        <p>
          If you have questions or comments about this notice, you may email us
          at <a href="mailto:contact@spousedapp.com">contact@spousedapp.com</a> or by
          post to: <a href="mailto:contact@spousedapp.com">contact@spousedapp.com</a>
        </p>
        <p></p>
      </div>
    </main>
  );
}
