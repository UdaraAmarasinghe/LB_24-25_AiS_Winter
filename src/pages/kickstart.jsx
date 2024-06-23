import React, { useEffect } from "react";

import { gsap } from "gsap";

const Kickstart = () => {
  const styles = {
    blackbg: {
      backgroundColor: "#121212",
    },
    blueText: {
      color: "#037ef3",
    },
    gradient: {
      background: "linear-gradient(90deg, rgba(0,26,255,1) 0%, rgba(255,0,206,1) 100%)",
    },
    hidden: {
      visibility: "hidden",
    },
  };

  useEffect(() => {
    gsap.fromTo(
      ".section",
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0,
        ease: "expo.inOut",
        duration: 1,
        stagger: 0.1,
      }
    );
  });

  return (
    <div className="w-full h-full text-white " style={styles.blackbg}>
      <div className="w-full max-w-2xl m-auto py-8 px-4">
        <div className="text-xl section" style={styles.blueText}>
          AIESEC in SLIIT
        </div>
        <div className="text-4xl font-bold section">
          <div className="p-4 rounded-lg" style={styles.gradient}>
            Benchmark
          </div>
          <div className="text-2xl">Designathon and Workshop Series</div>
        </div>

        <div className="text-xl mt-1 text-gray-400 section">Application Package</div>

        <div className="mt-8 section">
          <div className="w-full h-1 bg-gray-700 mb-8"></div>
          <div className="text-2xl mb-1 font-semibold">Event Introduction</div>
          <p className="text-gray-400">
            <span className="rounded-md" style={styles.gradient}>
              &nbsp;Benchmark&nbsp;
            </span>{" "}
            is a UI/UX focused design competition and a workshop series from the SLIIT Showcasing team.
          </p>
        </div>

        <div className="mt-8 section">
          <div className="w-full h-1 bg-gray-700 mb-8"></div>
          <div className="text-2xl mb-1 font-semibold">Timeline</div>
          <div>
            <span className="font-bold">Application Open - </span> <span className="text-gray-300">15th July</span> <br />
            <span className="font-bold">Application Deadline - </span> <span className="text-gray-300">19th July</span> <br />
          </div>
        </div>

        <div className="mt-8 section">
          <div className="w-full h-1 bg-gray-700 mb-8"></div>
          <div className="text-2xl mb-1 font-semibold">Team Structure</div>
          <div>
            <span className="">OCP</span> <br />
            <span className="">OCVP Delegates</span> <br />
            <span className="">OCVP Marketing</span> <br />
            <span className="">OCVP External Relations</span> <br />
            <span className="">OCVP Finance</span> <br />
            <span className="">OCVP Events</span> <br />
          </div>
        </div>

        <div className="mt-8 section">
          <div className="w-full h-1 bg-gray-700 mb-8"></div>
          <div className="text-2xl mb-1 font-semibold">Available Roles</div>
          <br />
          {/*  =====================================================  */}
          <div className="w-full rounded-lg border p-2" style={{ border: "2px solid #FFC845" }}>
            <div className="text-center text-2xl font-bold" style={{ color: "#FFC845" }}>
              OCP <span className="text-gray-500"> x1</span>
            </div>
            <div className="font-bold">Job Description</div>
            <div className="text-gray-400">
              <ul className="list-inside list-disc">
                <li>Lead the OC financially and potentially to succeed in the event</li>
                <li>Focus point on functional sales.</li>
                <li>Ensure the event meets its goals agreed upon between the OC and the EB of AIESEC in SLIIT.</li>
                <li>Ensure proper communication and reporting with OC and EB</li>
                <li>Setting out initial Organizing timelines for all the OCVPs.</li>
                <li>Setting out an ER plan with the PD Team.</li>
                <li>Setting out a PR plan with OEVPs.</li>
                <li>Accountable for the responsibilities which are assigned.</li>
                <li>Plan OC tasks and Evaluate OCVP performances.</li>
              </ul>
            </div>{" "}
            <br />
            <div className="font-bold">Experience</div>
            <div className="text-gray-400">
              <ul className="list-inside list-disc">
                <li>Experience in Managing people.</li>
                <li>Experience in Partnership Development</li>
                <li>Experience in Functional Goal Achievements.</li>
                <li>Experience in event management and coordination</li>
                <li>Risk Management</li>
                <li>Being Accountable</li>
                <li>Time Management</li>
                <li>Leadership Development</li>
              </ul>
            </div>
          </div>
          <br />
          {/*  =====================================================  */}
          <div className="w-full rounded-lg border p-2" style={{ border: "2px solid #0373f3" }}>
            <div className="text-center text-2xl font-bold" style={{ color: "#0373f3" }}>
              OCVP Delegates <span className="text-gray-500"> x2</span>
            </div>
            <div className="font-bold">Job Description</div>
            <div className="text-gray-400">
              <ul className="list-inside list-disc">
                <li>Being the first touchpoint between Benchmark delegates and AIESEC in SLIIT</li>
                <li>Answering all the inquiries from the participants</li>
                <li>Creating and managing a database of the participants</li>
                <li>Managing invitations of participants</li>
                <li>Managing the registrations of the participants</li>
                <li>Research and approach judges for the competition</li>
                <li>Research and approach speakers for the webinar series</li>
              </ul>
            </div>{" "}
            <br />
            <div className="font-bold">Experience</div>
            <div className="text-gray-400">
              <ul className="list-inside list-disc">
                <li>Experience in Coordinating and negotiating with people</li>
                <li>Experience in event management and coordination</li>
                <li>Communication skills</li>
              </ul>
            </div>
          </div>
          <br />
          {/*  =====================================================  */}
          <div className="w-full rounded-lg border p-2" style={{ border: "2px solid #F85A40" }}>
            <div className="text-center text-2xl font-bold" style={{ color: "#F85A40" }}>
              OCVP Marketing <span className="text-gray-500"> x2</span>
            </div>
            <div className="font-bold">Job Description</div>
            <div className="text-gray-400">
              <ul className="list-inside list-disc">
                <li>Approach electronic media for Pre-promotions</li>
                <li>Work with ER team for sales</li>
                <li>Design and launch promotional materials to attract participants</li>
                <li>Managing the content plan</li>
              </ul>
            </div>{" "}
            <br />
            <div className="font-bold">Experience</div>
            <div className="text-gray-400">
              <ul className="list-inside list-disc">
                <li>Experience in partnership management with variety of Stakeholders</li>
                <li>Experience in planning and running marketing campaigns</li>
                <li>Experience on designing promotional material for an event</li>
              </ul>
            </div>
          </div>{" "}
          <br />
          {/*  =====================================================  */}
          <div className="w-full rounded-lg border p-2" style={{ border: "2px solid #FFC845" }}>
            <div className="text-center text-2xl font-bold" style={{ color: "#FFC845" }}>
              OCVP External Relations <span className="text-gray-500"> x2</span>
            </div>
            <div className="font-bold">Job Description</div>
            <div className="text-gray-400">
              <ul className="list-inside list-disc">
                <li>Conduct market researches on potential partners together with OEVP PD</li>
                <li>Approach potential companies for sponsorships </li>
                <li>Follow-ups and sponsorship delivery</li>
              </ul>
            </div>{" "}
            <br />
            <div className="font-bold">Experience</div>
            <div className="text-gray-400">
              <ul className="list-inside list-disc">
                <li>Market research experience of partnership management with a variety of stakeholders</li>
                <li>Experience on event management and sales</li>
                <li>Experience in planning and running PR and marketing campaigns for events</li>
              </ul>
            </div>
          </div>{" "}
          <br />
          {/*  =====================================================  */}
          <div className="w-full rounded-lg border p-2" style={{ border: "2px solid #0CB9C1" }}>
            <div className="text-center text-2xl font-bold" style={{ color: "#0CB9C1" }}>
              OCVP Finance<span className="text-gray-500"> x1</span>
            </div>
            <div className="font-bold">Job Description</div>
            <div className="text-gray-400">
              <ul className="list-inside list-disc">
                <li>Preparing event budget</li>
                <li>Collecting and documentation of all the supporting documents</li>
                <li>Preparing the event report</li>
                <li>Expenses an partnership tracking</li>
                <li>Ensure partnership delivery</li>
              </ul>
            </div>{" "}
            <br />
            <div className="font-bold">Experience</div>
            <div className="text-gray-400">
              <ul className="list-inside list-disc">
                <li>Experience in budget preparation</li>
                <li>Experience in budgetary control</li>
              </ul>
            </div>
          </div>{" "}
          <br />
          {/*  =====================================================  */}
          <div className="w-full rounded-lg border p-2" style={{ border: "2px solid #0373f3" }}>
            <div className="text-center text-2xl font-bold" style={{ color: "#0373f3" }}>
              OCVP Events<span className="text-gray-500"> x2</span>
            </div>
            <div className="font-bold">Job Description</div>
            <div className="text-gray-400">
              <ul className="list-inside list-disc">
                <li>Delivering the model of the event</li>
                <li>Managing guests invitation</li>
                <li>Ensuring all systems are in place for guests</li>
                <li>Securing guest speakers and ensuring their objectives are achieved</li>
                <li>Managing the experience of the guests</li>
                <li>Responsible for the smooth flow of the event</li>
              </ul>
            </div>{" "}
            <br />
            <div className="font-bold">Experience</div>
            <div className="text-gray-400">
              <ul className="list-inside list-disc">
                <li>Experience in event planning and management</li>
                <li>Experience in attention to detail and working under pressure</li>
                <li>Professional communication skills</li>
              </ul>
            </div>
          </div>
          {/** Contact Info ***/}
          <div className="mt-8">
            <div className="w-full h-1 bg-gray-700 mb-8"></div>
            <div className="text-2xl mb-4 font-semibold">Contact Info</div>
            <div>
              <div>For any clarifications, </div>
              <div style={styles.blueText} className="text-3xl">
                Navindu Amarakoon
              </div>
              <div className="text-gray-400">OEVP MKT – AIESEC in SLIIT</div>
              <div className="text-gray-400">navindu.a@aiesec.net</div>
              <div className="text-gray-400">+94 71 464 9598</div>
            </div>
          </div>
          <a href="https://forms.gle/MzbSwthdCkkWPzEVA" target="_blank" rel="noreferrer">
            <div className="my-8 rounded-md w-full h-10 text-center text-lg font-bold grid content-center cursor-pointer" style={{ background: "#037ef3" }}>
              Apply
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Kickstart;