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
        <h1>COOKIE POLICY</h1>
        <span> Last Updated 10/13/2023</span>
        <p>
          This Cookie Policy explains how Spoused(“we,” “us,” and “our”) uses
          cookies and similar technologies to recognize you when you visit our
          website at www.Spoused (“Website”). It explains what these
          technologies are and why we use them, as well as your rights to
          control our use of them. In some cases we may use cookies to collect
          personal information, or that becomes personal information if we
          combine it with other information
        </p>
        <h2>WHAT ARE COOKIES?</h2>
        <p>
          Cookies are small data files that are placed on your computer or
          mobile device when you visit a website. Cookies are widely used by
          website owners in order to make their websites work, or to work more
          efficiently, as well as to provide reporting information.
        </p>
        <p>
          Cookies set by the website owner (in this case, Spoused) are called
          “first-party cookies.” Cookies set by parties other than the website
          owner are called “third-party cookies.” Third-party cookies enable
          third-party features or functionality to be provided on or through the
          website (e.g., advertising, interactive content, and analytics). The
          parties that set these third-party cookies can recognize your computer
          both when it visits the website in question and also when it visits
          certain other websites.
        </p>
        <h2>WHY DO WE USE COOKIES?</h2>
        <p>
          We use first- and third-party cookies for several reasons. Some
          cookies are required for technical reasons in order for our Website to
          operate, and we refer to these as “essential” or “strictly necessary”
          cookies. Other cookies also enable us to track and target the
          interests of our users to enhance the experience on our Online
          Properties. Third parties serve cookies through our Website for
          advertising, analytics, and other purposes. This is described in more
          detail below.
        </p>
        <h2>HOW CAN I CONTROL COOKIES?</h2>
        <p>
          You have the right to decide whether to accept or reject cookies. You
          can exercise your cookie rights by setting your preferences in the
          Cookie Consent Manager. The Cookie Consent Manager allows you to
          select which categories of cookies you accept or reject. Essential
          cookies cannot be rejected as they are strictly necessary to provide
          you with services.
        </p>
        <p>
          The Cookie Consent Manager can be found in the notification banner and
          on our website. If you choose to reject cookies, you may still use our
          website though your access to some functionality and areas of our
          website may be restricted. You may also set or amend your web browser
          controls to accept or refuse cookies.
        </p>
        <p>
          The specific types of first- and third-party cookies served through
          our Website and the purposes they perform are described in the table
          below (please note that the specific cookies served may vary depending
          on the specific Online Properties you visit):
        </p>
        <h3>Type of Cookie</h3>
        <h3>Purpose</h3>
        <h4>Analytics and Customization Cookies</h4>
        <p>
          These cookies are used to gather information about a user’s activity
          on a website and personalize their experience based on that
          information. These cookies allow website owners to collect data on
          user behavior, such as which pages are visited, how long they are
          viewed, and which buttons are clicked. This information is then used
          to optimize the website’s performance and provide a more tailored user
          experience.
        </p>
        <h4>Essential Website Cookies</h4>
        <p>
          These cookies are necessary to the core functionality of our website
          and some of its features, such as access to secure areas.
        </p>
        <h4>Advertising Cookies</h4>
        <p>
          These cookies are used to make advertising messages more relevant to
          you. They prevent the same ad from continuously reappearing, ensure
          that ads are properly displayed for advertisers, and in some cases
          select advertisements that are based on your interests.
        </p>
        <h2>HOW CAN I CONTROL COOKIES ON MY BROWSER?</h2>
        <p>
          As the means by which you can refuse cookies through your web browser
          controls vary from browser to browser, you should visit your browser’s
          help menu for more information. The following is information about how
          to manage cookies on the most popular browsers:
        </p>
        <ul>
          <li>
            <a href="#">Chrome</a>
          </li>
          <li>
            <a href="#">Internet Explorer</a>
          </li>
          <li>
            <a href="#">Firefox</a>
          </li>
          <li>
            <a href="#">Safari</a>
          </li>
          <li>
            <a href="#">Edge</a>
          </li>
          <li>
            <a href="#">Opera</a>
          </li>
        </ul>
        <p>
          In addition, most advertising networks offer you a way to opt out of
          targeted advertising. If you would like to find out more information,
          please visit:
        </p>
        <ul>
          <li>
            <a href="#">Digital Advertising Alliance</a>
          </li>{" "}
          <li>
            <a href="#">Digital Advertising Alliance of Canada</a>
          </li>{" "}
          <li>
            <a href="#">European Interactive Digital Advertising Alliance</a>
          </li>
        </ul>
        <h2>WHAT ABOUT OTHER TRACKING TECHNOLOGIES, LIKE WEB BEACON?</h2>
        <p>
          Cookies are not the only way to recognize or track visitors to a
          website. We may use other, similar technologies from time to time,
          like web beacons (sometimes called “tracking pixels” or “clear gifs”).
          These are tiny graphics files that contain a unique identifier that
          enables us to recognize when someone has visited our Website or opened
          an email including them. This allows us, for example, to monitor the
          traffic patterns of users from one page within a website to another,
          to deliver or communicate with cookies, to understand whether you have
          come to the website from an online advertisement displayed on a
          third-party website, to improve site performance, and to measure the
          success of email marketing campaigns. In many instances, these
          technologies are reliant on cookies to function properly, and so
          declining cookies will impair their functioning.
        </p>
        <h2>DO YOU USE FLASH COOKIES OR LOCAL SHARED OBJECTS?</h2>
        <p>
          Websites may also use so-called “Flash Cookies” (also known as Local
          Shared Objects or “LSOs”) to, among other things, collect and store
          information about your use of our services, fraud prevention, and for
          other site operations.
        </p>
        <p>
          If you do not want Flash Cookies stored on your computer, you can
          adjust the settings of your Flash player to block Flash Cookies
          storage using the tools contained in the Website Storage Settings
          Panel. You can also control Flash Cookies by going to the Global
          Storage Settings Panel and following the instructions (which may
          include instructions that explain, for example, how to delete existing
          Flash Cookies (referred to “information” on the Macromedia site), how
          to prevent Flash LSOs from being placed on your computer without your
          being asked, and (for Flash Player 8 and later) how to block Flash
          Cookies that are not being delivered by the operator of the page you
          are on at the time). Please note that setting the Flash Player to
          restrict or limit acceptance of Flash Cookies may reduce or impede the
          functionality of some Flash applications, including, potentially,
          Flash applications used in connection with our services or online
          content.
        </p>
        <h2>DO YOU SERVE TARGETED ADVERTISING?</h2>
        <p>
          Third parties may serve cookies on your computer or mobile device to
          serve advertising through our Website. These companies may use
          information about your visits to this and other websites in order to
          provide relevant advertisements about goods and services that you may
          be interested in. They may also employ technology that is used to
          measure the effectiveness of advertisements. They can accomplish this
          by using cookies or web beacons to collect information about your
          visits to this and other sites in order to provide relevant
          advertisements about goods and services of potential interest to you.
          The information collected through this process does not enable us or
          them to identify your name, contact details, or other details that
          directly identify you unless you choose to provide these.
        </p>
        <h2>HOW OFTEN WILL YOU UPDATE THIS COOKIE POLICY?</h2>
        <p>
          We may update this Cookie Policy from time to time in order to
          reflect, for example, changes to the cookies we use or for other
          operational, legal, or regulatory reasons. Please therefore revisit
          this Cookie Policy regularly to stay informed about our use of cookies
          and related technologies. The date at the top of this Cookie Policy
          indicates when it was last updated.
        </p>
        <h2>WHERE CAN I GET FURTHER INFORMATION?</h2>
        <p>
          If you have any questions about our use of cookies or other
          technologies, please email us at:
        </p>
        <a
          href="mailto:contact@spousedapp.com"
          className="text-base sm:text-lg lg:text-xl 2xl:text-2xl underline">
          contact@spousedapp.com
        </a>
      </div>
    </main>
  );
}
